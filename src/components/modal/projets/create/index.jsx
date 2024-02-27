/* Importation des modules */
import { useState, useContext } from 'react';
import PropTypes from 'prop-types';

/* Importation des ressources */
import { IoCloseCircle } from 'react-icons/io5';

/* Importation des composants */
import Button from '../../../button';
import { toast } from 'sonner';

/* Importation des données */
import { useTranslation } from 'react-i18next';
import { ProjectContext } from '../../../../utils/dataProvider/DataProvider';

/* Importation des styles */
import './style.scss';

/*
 * Composant ModalCreateProjets
 * Affiche un formulaire pour créer un projet
 * @param {function} onClose - Fonction pour fermer la modale
 * @returns {JSX.Element}
 */

export default function ModalCreateProjets({ onClose }) {
    const { t } = useTranslation();
    const { refreshProjects } = useContext(ProjectContext);
    const [projectData, setProjectData] = useState({
        name: { fr: '', en: '' },
        description: { fr: '', en: '' },
        imageUrl: '',
        category: { fr: '', en: '' },
        githubLink: '',
        demoLink: '',
        technologies: [],
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        const keys = name.split('.');

        if (name === 'technologies') {
            // Convertir la chaîne de caractères en un tableau de technologies en séparant par des virgules
            const techArray = value.split(',').map((tech) => tech.trim());
            setProjectData((prevState) => ({
                ...prevState,
                [name]: techArray,
            }));
        } else {
            setProjectData((prevState) => {
                if (keys.length === 1) {
                    // Pour les champs non imbriqués comme 'imageUrl', 'githubLink', etc.
                    return { ...prevState, [name]: value };
                } else {
                    // Pour les champs imbriqués comme 'name.fr', 'name.en', etc.
                    return { ...prevState, [keys[0]]: { ...prevState[keys[0]], [keys[1]]: value } };
                }
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(
                'https://api-rest-portfolio-mauve.vercel.app/Api/v1/projets/create',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(projectData),
                },
            );

            if (!response.ok) {
                toast.error(t('modal.create.error'));
            }

            // Si la réponse est OK, fermez la modale
            onClose();
            toast.success(t('modal.create.success'));
            refreshProjects();
        } catch (error) {
            toast.error(t('modal.create.error'));
            console.error(error);
        }
    };

    return (
        <div className='modal-create-container'>
            <div className='close-icon'>
                <IoCloseCircle className='close-icon' onClick={onClose} />
            </div>
            <h2 className='modal-create-title'>{t('modal.create.title')}</h2>
            <div className='modal-container'>
                <div className='modal-container-1'>
                    <form className='create-form' onSubmit={handleSubmit}>
                        <div className='create-section'>
                            <label className='create-label'>
                                Nom du projet (FR):
                                <input
                                    type='text'
                                    name='name.fr'
                                    value={projectData.name.fr}
                                    placeholder='Nom du projet'
                                    onChange={handleChange}
                                    required
                                    className='create-input'
                                />
                            </label>
                            <label className='create-label'>
                                Nom du projet (EN):
                                <input
                                    type='text'
                                    name='name.en'
                                    value={projectData.name.en}
                                    placeholder='Project name'
                                    onChange={handleChange}
                                    required
                                    className='create-input'
                                />
                            </label>
                        </div>
                        <label className='create-label'>
                            Lien de Image:
                            <input
                                type='text'
                                name='imageUrl'
                                value={projectData.imageUrl}
                                placeholder='https://example.com/image.jpg'
                                onChange={handleChange}
                                required
                                className='create-input'
                            />
                        </label>
                        <div className='create-section'>
                            <label className='create-label'>
                                Catégorie (FR):
                                <input
                                    type='text'
                                    name='category.fr'
                                    value={projectData.category.fr}
                                    placeholder='Catégorie du projet'
                                    onChange={handleChange}
                                    required
                                    className='create-input'
                                />
                            </label>
                            <label className='create-label'>
                                Catégorie (EN):
                                <input
                                    type='text'
                                    name='category.en'
                                    value={projectData.category.en}
                                    placeholder='Project category'
                                    onChange={handleChange}
                                    required
                                    className='create-input'
                                />
                            </label>
                        </div>
                        <div className='create-section'>
                            <label className='create-label'>
                                Lien Github:
                                <input
                                    type='text'
                                    name='githubLink'
                                    value={projectData.githubLink}
                                    placeholder='https://exemple.com'
                                    onChange={handleChange}
                                    required
                                    className='create-input'
                                />
                            </label>
                            <label className='create-label'>
                                Lien démo:
                                <input
                                    type='text'
                                    name='demoLink'
                                    value={projectData.demoLink}
                                    placeholder='https://exemple.com'
                                    onChange={handleChange}
                                    required
                                    className='create-input'
                                />
                            </label>
                        </div>
                        <label className='create-label'>
                            Technologies:
                            <input
                                type='text'
                                name='technologies'
                                value={projectData.technologies}
                                placeholder='HTML, CSS, JavaScript'
                                onChange={handleChange}
                                required
                                className='create-input'
                            />
                        </label>
                        <Button
                            text='Créer le projet'
                            type='submit'
                            width={'20rem'}
                            height={'4rem'}
                        />
                    </form>
                </div>
                <div className='modal-container-2'>
                    <div className='create-section'>
                        <label className='create-label'>
                            Description (FR):
                            <textarea
                                name='description.fr'
                                value={projectData.description.fr}
                                placeholder='Description du projet'
                                onChange={handleChange}
                                required
                                className='create-textarea'
                            />
                        </label>
                        <label className='create-label'>
                            Description (EN):
                            <textarea
                                name='description.en'
                                value={projectData.description.en}
                                placeholder='Project description'
                                onChange={handleChange}
                                required
                                className='create-textarea'
                            />
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
}

ModalCreateProjets.propTypes = {
    onClose: PropTypes.func.isRequired,
};
