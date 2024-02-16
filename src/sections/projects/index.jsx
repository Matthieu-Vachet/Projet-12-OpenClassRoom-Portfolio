import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import AnimatedSubtitle from '../../components/animations/AnimatedSubtitle';
import ProjectsCards from '../../components/projectsCards';
import { ProjectContext } from '../../utils/dataProvider/DataProvider';
import './style.scss';

const Projects = () => {
    const projects = useContext(ProjectContext);
    const { t } = useTranslation();

    return (
        <section id='projects'>
            <div className='projects-container'>
                <h1 className='projects-section-title'>Projects</h1>
                <AnimatedSubtitle
                    text={t('projects-title')}
                    className={'projects-title'}
                    charSpace='0.016px'
                />
                <div className='projects-cards-container'>
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
