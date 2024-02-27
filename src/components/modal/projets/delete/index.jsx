/* Importation des modules */
import PropTypes from 'prop-types';

/* Importation des ressources */
import { IoCloseCircle } from 'react-icons/io5';

/* Importation des données */
import { useTranslation } from 'react-i18next';

/* Importation des composants */
import Button from '../../../button';
import { toast } from 'sonner';

/* Importation des styles */
import './style.scss';

/*
 * Composant ModalDeleteProjets
 * Affiche une modale de suppression de projet
 * @param {function} onClose - Fonction pour fermer la modale
 * @param {function} onDelete - Fonction pour supprimer un projet
 * @param {string} id - Identifiant du projet
 * @returns {JSX.Element}
 */

export default function ModalDeleteProjets({ onClose, onDelete, id }) {
    const { t } = useTranslation();

    const handleDeleteClick = () => {
        onDelete(id);
        onClose();
        toast.success(t('modal.delete.success'));
    };

    return (
        <div className='modal-delete-container' role='dialog' aria-labelledby='delete-title'>
            <div className='close-icon'>
                <IoCloseCircle className='close-icon' onClick={onClose} />
            </div>
            <h2 id='delete-title' className='delete-title'>
                {t('modal.delete.title')}
            </h2>
            <p className='delete-text'>{t('modal.delete.text')}</p>
            <div className='delete-btn'>
                <Button
                    type='submit'
                    text={t('modal.delete.btn-1')}
                    className='link-btn'
                    width={'15rem'}
                    height={'4rem'}
                    onClick={handleDeleteClick}
                    aria-label={t('modal.delete.btn-1')}
                />
                <Button
                    type='submit'
                    text={t('modal.delete.btn-2')}
                    className='link-btn'
                    width={'15rem'}
                    height={'4rem'}
                    onClick={onClose}
                    aria-label={t('modal.delete.btn-2')}
                />
            </div>
        </div>
    );
}

ModalDeleteProjets.propTypes = {
    onClose: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
};
