/**
 * Composant Projects qui affiche la section "Projets" du site.
 * @returns {JSX.Element} La section "Projets" avec un sous-titre animé, une liste de cartes de projets et des modales pour créer et supprimer des projets.
 */

/* Importation des modules */
import React, { useContext, useState } from 'react';

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
import { ProjectContextType, Project } from '../../types/types';

/* Importation des ressources */
import { IoMdAdd } from 'react-icons/io';

/* Importation des styles */
import './style.scss';

export default function Projects() {
    const projectContext = useContext(ProjectContext);
    const authContext = useContext(AuthContext);

    if (!projectContext || !authContext) {
        return null;
    }

    const { projetsData, deleteProjets } = projectContext;
    const { isLoggedIn } = authContext;

    const { t, i18n } = useTranslation();

    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

    const handleOpenCreateModal = () => {
        setIsCreateModalOpen(true);
    };

    const handleCloseCreateModal = () => {
        setIsCreateModalOpen(false);
    };

    const handleOpenDeleteModal = (id: string) => {
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

    const handleDeleteClick = async (id: string) => {
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
                    wordSpace='0.016px'
                />
                <div className='projects-cards-container' aria-label='Projects list'>
                    {projetsData.map((project: Project) => (
                        <AnimatedElement key={project._id}>
                            <ProjectsCards
                                id={project._id}
                                name={project.name[i18n.language as 'fr' | 'en']}
                                description={project.description[i18n.language as 'fr' | 'en']}
                                image={'/projets/' + project.imageUrl}
                                alt={`Image du projet ${project.name}`}
                                technologies={project.technologies}
                                github={project.githubLink}
                                live={project.demoLink}
                                categorie={project.category[i18n.language as 'fr' | 'en']}
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
                        id={selectedProjectId as string}
                        onDelete={handleDeleteClick}
                        onClose={handleCloseDeleteModal}
                    />
                )}
            </div>
        </section>
    );
}
