/**
 * Composant Projects qui affiche la section "Projets" du site.
 * @returns {JSX.Element} La section "Projets" avec un sous-titre animé, une liste de cartes de projets et des modales pour créer et supprimer des projets.
 */

/* Importation des modules */
import { useContext, useState } from 'react';

/* Importation des Animations */
import AnimatedSubtitle from '../../components/animations/AnimatedSubtitle';
import AnimatedElement from '../../components/animations/AnimatedElement';

/* Importation des composants */
import ProjectsCards from '../../components/projectsCards';
import ModalCreateProjets from '../../components/modal/projets/create';
import ModalDeleteProjets from '../../components/modal/projets/delete';

/* Importation des Données */
import { useTranslation } from 'react-i18next';
import { ProjectContext, AuthContext } from '../../utils/dataProvider/DataProvider';

/* Importation des ressources */
import { IoMdAdd } from 'react-icons/io';

/* Importation des styles */
import './style.scss';

export default function Projects() {
    const { projets, deleteProjets } = useContext(ProjectContext);
    const { isLoggedIn } = useContext(AuthContext);
    const { t } = useTranslation();

    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
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
        setIsDeleteModalOpen(false);
    };

    /**
     * Supprime un projet.
     * @param {string} id - L'ID du projet à supprimer.
     */

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
                        <AnimatedElement key={project._id}>
                            <ProjectsCards
                                id={project._id}
                                name={project.name}
                                description={project.description}
                                image={'/projets/' + project.imageUrl}
                                alt={`Image du projet ${project.name}`}
                                technologies={project.technologies}
                                github={project.githubLink}
                                live={project.demoLink}
                                categorie={project.category}
                                onDeleteClick={() => handleOpenDeleteModal(project._id)}
                            />
                        </AnimatedElement>
                    ))}
                    {isLoggedIn && (
                        <div className='projects-cards-add-news'>
                            <IoMdAdd className='edit-icons' onClick={handleOpenCreateModal} />
                        </div>
                    )}
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
}
