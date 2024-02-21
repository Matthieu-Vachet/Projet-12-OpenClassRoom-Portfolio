/* Importation des modules */
import { useContext } from 'react';

/* Importation des Animations */
import AnimatedSubtitle from '../../components/animations/AnimatedSubtitle';

/* Importation des composants */
import ProjectsCards from '../../components/projectsCards';

/* Importation des Données */
import { useTranslation } from 'react-i18next';
import { ProjectContext } from '../../utils/dataProvider/DataProvider';

/* Importation des styles */
import './style.scss';

const Projects = () => {
    const projects = useContext(ProjectContext);
    const { t } = useTranslation();

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
                    {projects.map((project, index) => (
                        <ProjectsCards
                            key={index}
                            name={project.name}
                            description={project.description}
                            image={project.imageUrl}
                            alt={project.name}
                            technologies={project.technologies}
                            github={project.githubLink}
                            live={project.demoLink}
                            categorie={project.category}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
