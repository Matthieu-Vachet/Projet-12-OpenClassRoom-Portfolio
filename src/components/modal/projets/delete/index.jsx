/**
 * ModalDeleteProjets est un composant React qui affiche une boîte de dialogue de confirmation pour la suppression d'un projet.
 * @component
 * @param {Object} props - Les propriétés passées au composant.
 * @param {Function} props.onClose - La fonction à exécuter lorsque la boîte de dialogue doit être fermée.
 * @param {Function} props.onDelete - La fonction à exécuter pour supprimer le projet.
 * @param {string} props.id - L'identifiant du projet à supprimer.
 *
 * @example
 * <ModalDeleteProjets onClose={handleClose} onDelete={handleDelete} id="123" />
 *
 * @returns {React.Element} - Le composant ModalDeleteProjets.
 */

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
