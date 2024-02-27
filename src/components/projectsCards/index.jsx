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

/*
 * Composant ProjectsCards
 * Affiche une carte de projet
 * @param {string} id - Identifiant du projet
 * @param {string} image - Image du projet
 * @param {string} alt - Texte alternatif de l'image
 * @param {string} name - Nom du projet
 * @param {string} description - Description du projet
 * @param {string} github - Lien vers le dépôt GitHub
 * @param {string} live - Lien vers le projet en ligne
 * @param {array} technologies - Tableau des technologies utilisées
 * @param {string} categorie - Catégorie du projet
 * @param {function} onDeleteClick - Fonction pour supprimer un projet
 * @returns {JSX.Element}
 */

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
                        tabIndex='0'
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
