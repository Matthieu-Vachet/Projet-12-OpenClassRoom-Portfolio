import React from 'react';
import { technologyIcons } from '../../utils/constants/constants';
import { FaGithub, FaGlobe } from 'react-icons/fa';
import './style.scss';

type ProjectsCardsProps = {
    id: string;
    image: string;
    alt: string;
    name: string;
    description: string;
    github: string;
    live: string;
    technologies: string[];
    categorie: string;
};

export default function ProjectsCards({
    id,
    image,
    alt,
    name,
    description,
    github,
    live,
    technologies,
    categorie,
}: ProjectsCardsProps) {
    return (
        <div className='projects-cards-container'>
            <div className='projects-cards'>
                <div className='projects-cards-image-container'>
                    <img
                        className='projects-cards-image'
                        src={image}
                        alt={alt}
                        aria-label={alt}
                        tabIndex={0}
                    />
                </div>
                <div className='projects-cards-content'>
                    <h2 className='projects-cards-title'>{name}</h2>
                    <p className='projects-categorie'>{categorie}</p>
                    <div className='projects-cards-technologies'>
                        {technologies &&
                            technologies.map((tech, index) => {
                                const Icon = technologyIcons[tech];
                                return <Icon key={index} />;
                            })}
                    </div>
                    <p className='projects-cards-description'>{description}</p>
                    <div className='projects-cards-link-section'>
                        <a
                            className='projects-cards-icons-link'
                            href={github}
                            target='_blank'
                            rel='noopener noreferrer'
                            aria-label={`View ${name} on GitHub`}
                        >
                            <FaGithub />
                        </a>
                        <a
                            className='projects-cards-icons-link'
                            href={live}
                            target='_blank'
                            rel='noopener noreferrer'
                            aria-label={`View ${name} live`}
                        >
                            <FaGlobe />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
