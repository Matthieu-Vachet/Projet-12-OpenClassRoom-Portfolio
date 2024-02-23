/* Importation des modules */
import PropTypes from 'prop-types';
import { useContext } from 'react';

/* Importation des données */
import { AuthContext } from '../../utils/dataProvider/DataProvider';

/* Importation des ressources */
import { technologyIcons } from '../../utils/constants/constants';
import { FaGithub, FaGlobe } from 'react-icons/fa';
import { IoMdAdd } from 'react-icons/io';
import { MdDeleteForever } from 'react-icons/md';

/* Importation des styles */
import './style.scss';

const ProjectsCards = ({
    id,
    image,
    alt,
    name,
    description,
    github,
    live,
    technologies,
    categorie,
    onAddClick,
    onDeleteClick,
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
                            <IoMdAdd className='edit-icons' onClick={onAddClick} />
                            <MdDeleteForever
                                className='edit-icons'
                                onClick={() => onDeleteClick(id)}
                            />
                        </div>
                    )}
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
};

ProjectsCards.propTypes = {
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
    live: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    categorie: PropTypes.string.isRequired,
    onAddClick: PropTypes.func,
    onDeleteClick: PropTypes.func,
};

export default ProjectsCards;
