import './style.scss';
import { FaGithub, FaGlobe } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { technologyIcons } from '../../utils/data/constants';

const ProjectsCards = ({
    image,
    alt,
    name,
    description,
    github,
    live,
    technologies,
    categorie,
}) => {
    return (
        <div className='projects-cards-container'>
            <div className='projects-cards'>
                <div className='projects-cards-image-container'>
                    <img className='projects-cards-image' src={image} alt={alt} />
                </div>
                <div className='projects-cards-content'>
                    <h2 className='projects-cards-title'>{name}</h2>
                    <p className='projects-categorie'>{categorie}</p>
                    <div className='projects-cards-technologies'>
                        {technologies.map((tech, index) => {
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
                        >
                            <FaGithub />
                        </a>
                        <a
                            className='projects-cards-icons-link'
                            href={live}
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <FaGlobe />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

ProjectsCards.propTypes = {
    image: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
    live: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    categorie: PropTypes.string.isRequired,
};

export default ProjectsCards;
