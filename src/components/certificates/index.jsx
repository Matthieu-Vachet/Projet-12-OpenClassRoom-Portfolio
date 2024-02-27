/* Importation des données */
import { certificates } from '../../utils/constants/constants';
import { useTranslation } from 'react-i18next';

/* Importation des styles */
import './style.scss';

/* 
    * Composant Certificates
    * Description :
        Ce composant permet d'afficher les certificats de formation
        Il affiche un dropdown avec la liste des certificats
    * Data :
        - certificates : liste des certificats de formation
    * @returns {JSX.Element}
*/

export default function Certificates() {
    const { t } = useTranslation();

    return (
        <div className='dropdown-certificates-container'>
            <h3 className='dropdown-certificates-title'>{t('experience.certificats')}</h3>
            <select onChange={(e) => window.open(e.target.value)}>
                <option className='dropdown-option-title'>Sélectionnez un certificat</option>
                {certificates.map((certificate, index) => (
                    <option className='dropdown-option' key={index} value={certificate.url}>
                        {certificate.name}
                    </option>
                ))}
            </select>
        </div>
    );
}
