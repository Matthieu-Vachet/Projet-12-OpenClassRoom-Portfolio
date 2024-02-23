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

const ModalDeleteProjets = ({ onClose, onDelete, id }) => {
    const { t } = useTranslation();

    const handleDeleteClick = () => {
        onDelete(id);
        onClose();
        toast.success(t('modal.delete.success'));
    };

    return (
        <div className='modal-delete-container'>
            <div className='close-icon'>
                <IoCloseCircle className='close-icon' onClick={onClose} />
            </div>
            <h2 className='delete-title'>{t('modal.delete.title')}</h2>
            <p className='delete-text'>{t('modal.delete.text')}</p>
            <div className='delete-btn'>
                <Button
                    type='submit'
                    text={t('modal.delete.btn-1')}
                    className='link-btn'
                    width={'15rem'}
                    height={'4rem'}
                    onClick={handleDeleteClick}
                />
                <Button
                    type='submit'
                    text={t('modal.delete.btn-2')}
                    className='link-btn'
                    width={'15rem'}
                    height={'4rem'}
                    onClick={onClose}
                />
            </div>
        </div>
    );
};

ModalDeleteProjets.propTypes = {
    onClose: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
};

export default ModalDeleteProjets;
