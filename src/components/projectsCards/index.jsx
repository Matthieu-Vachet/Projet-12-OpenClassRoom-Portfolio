/* Importation des modules */
import PropTypes from 'prop-types';
import { useContext } from 'react';

/* Importation des données */
import { AuthContext } from '../../utils/dataProvider/DataProvider';

// Ressources
import { technologyIcons } from '../../utils/constants/constants';
import { FaGithub, FaGlobe } from 'react-icons/fa';
import { FaPencilAlt } from 'react-icons/fa';
import { IoMdAdd } from 'react-icons/io';
import { MdDeleteForever } from 'react-icons/md';

// Style
import './style.scss';

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
    const { isLoggedIn } = useContext(AuthContext);

    return (
        <div className='projects-cards-container'>
            <div className='projects-cards'>
                <div className='projects-cards-image-container'>
                    <img
                        className='projects-cards-image'
                        src={image}
                        alt={alt}
                        aria-label={alt}
                        tabIndex='0'
                    />
                </div>
                <div className='projects-cards-content'>
                    <h2 className='projects-cards-title'>{name}</h2>
                    {isLoggedIn && (
                        <div className='projects-cards-edit-icons'>
                            <FaPencilAlt className='edit-icons' />
                            <IoMdAdd className='edit-icons' />
                            <MdDeleteForever className='edit-icons' />
                        </div>
                    )}
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
