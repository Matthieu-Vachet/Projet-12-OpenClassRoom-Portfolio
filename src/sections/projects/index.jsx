/* Importation des modules */
import { useContext, useState } from 'react';

/* Importation des Animations */
import AnimatedSubtitle from '../../components/animations/AnimatedSubtitle';

/* Importation des composants */
import ProjectsCards from '../../components/projectsCards';
import ModalCreateProjets from '../../components/modal/projets/create';
import ModalDeleteProjets from '../../components/modal/projets/delete'; // Importez votre modale de suppression ici

/* Importation des Données */
import { useTranslation } from 'react-i18next';
import { ProjectContext } from '../../utils/dataProvider/DataProvider';

/* Importation des styles */
import './style.scss';

const Projects = () => {
    const { projets, deleteProjets } = useContext(ProjectContext);
    const { t } = useTranslation();

    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false); // Ajoutez cet état pour la modale de suppression
    const [selectedProjectId, setSelectedProjectId] = useState(null);

    const handleOpenCreateModal = () => {
        setIsCreateModalOpen(true);
    };

    const handleCloseCreateModal = () => {
        setIsCreateModalOpen(false);
    };

    const handleOpenDeleteModal = (id) => {
        setSelectedProjectId(id);
        setIsDeleteModalOpen(true);
    };

    const handleCloseDeleteModal = () => {
        // Ajoutez cette fonction pour fermer la modale de suppression
        setIsDeleteModalOpen(false);
    };

    const handleDeleteClick = async (id) => {
        const response = await fetch(
            `https://api-rest-portfolio-mauve.vercel.app/Api/v1/projets/delete/${id}`,
            {
                method: 'DELETE',
            },
        );
        if (!response.ok) {
            throw new Error('Erreur lors de la suppression du projet');
        }
        deleteProjets(id);
    };

    return (
        <section id='projects' className='section' aria-label='Projects section'>
            <div className='projects-container'>
                <h1 className='projects-section-title section-title'>Projects</h1>
                <AnimatedSubtitle
                    text={t('projets.title')}
                    className={'projects-title title'}
                    charSpace='0.016px'
                />
                <div className='projects-cards-container' aria-label='Projects list'>
                    {projets.map((project) => (
                        <ProjectsCards
                            key={project._id}
                            id={project._id}
                            name={project.name}
                            description={project.description}
                            image={project.imageUrl}
                            alt={project.name}
                            technologies={project.technologies}
                            github={project.githubLink}
                            live={project.demoLink}
                            categorie={project.category}
                            onAddClick={handleOpenCreateModal}
                            onDeleteClick={() => handleOpenDeleteModal(project._id)} // Passez la fonction ici
                        />
                    ))}
                </div>
            </div>
            <div className='modale-create'>
                {isCreateModalOpen && <ModalCreateProjets onClose={handleCloseCreateModal} />}
                {isDeleteModalOpen && (
                    <ModalDeleteProjets
                        id={selectedProjectId}
                        onDelete={handleDeleteClick}
                        onClose={handleCloseDeleteModal}
                    />
                )}
            </div>
        </section>
    );
};

export default Projects;
