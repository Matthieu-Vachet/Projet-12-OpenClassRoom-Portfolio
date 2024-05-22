/**
 * ProjectsCards est un composant React qui affiche une carte de projet.
 * @component
 * @param {Object} props - Les propriétés passées au composant.
 * @param {string} props.id - L'identifiant du projet.
 * @param {string} props.image - L'URL de l'image du projet.
 * @param {string} props.alt - Le texte alternatif pour l'image du projet.
 * @param {string} props.name - Le nom du projet.
 * @param {string} props.description - La description du projet.
 * @param {string} props.github - L'URL du dépôt GitHub du projet.
 * @param {string} props.live - L'URL du site en direct du projet.
 * @param {Array<string>} props.technologies - Les technologies utilisées dans le projet.
 * @param {string} props.categorie - La catégorie du projet.
 * @param {Function} props.onDeleteClick - La fonction à exécuter lorsque l'icône de suppression est cliquée.
 *
 * @example
 * <ProjectsCards id="1" image="image.jpg" alt="Project" name="Project 1" description="This is a project" github="https://github.com" live="https://project.com" technologies={["React", "JavaScript"]} categorie="Web" onDeleteClick={handleDeleteClick} />
 *
 * @returns {React.Element} - Le composant ProjectsCards.
 */

/* Importation des modules */
import PropTypes from 'prop-types';
import { useContext } from 'react';

/* Importation des données */
import { AuthContext } from '../../utils/dataProvider/DataProvider';

/* Importation des ressources */
import { technologyIcons } from '../../utils/constants/constants';
import { FaGithub, FaGlobe } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md';

/* Importation des styles */
import './style.scss';

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
    onDeleteClick,
}) {
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
                        tabIndex={0}
                    />
                </div>
                <div className='projects-cards-content'>
                    <h2 className='projects-cards-title'>{name}</h2>
                    {isLoggedIn && (
                        <div className='projects-cards-edit-icons'>
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
}

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
    onDeleteClick: PropTypes.func,
};
