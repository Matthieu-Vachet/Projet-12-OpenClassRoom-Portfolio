import React from 'react';
import AnimatedSubtitle from '../../components/animations/AnimatedSubtitle';
import AnimatedElement from '../../components/animations/AnimatedElement';
import ProjectsCards from '../../components/projectsCards';
import { useTranslation } from 'react-i18next';
import { ProjectsTypes } from '../../types/types';
import { projects } from '../../utils/constants/projects';
import './style.scss';

export default function Projects() {
    const { t } = useTranslation();

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
                    {projects.map((project: ProjectsTypes) => (
                        <AnimatedElement key={project.id}>
                            <ProjectsCards
                                id={project.id}
                                name={project.name}
                                description={project.description}
                                image={'/projets/' + project.imageUrl}
                                alt={`Image du projet ${project.name}`}
                                technologies={project.technologies}
                                github={project.githubLink}
                                live={project.demoLink}
                                categorie={project.category}
                            />
                        </AnimatedElement>
                    ))}
                </div>
            </div>
        </section>
    );
}
