/**
 * Composant Footer qui affiche le pied de page du site.
 * Il utilise les données de l'utilisateur à partir du contexte UserContext et les constantes Footer_Link, Footer_Projects et Footer_Follow pour afficher les informations de contact, les liens, les projets et les réseaux sociaux.
 *
 * @returns {JSX.Element} Le pied de page du site avec les informations de contact de l'utilisateur, une liste de liens, une liste de projets et une liste de réseaux sociaux.
 */

/* Importation des modules */
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';

/* Importation des Données */
import { UserContext } from '../../utils/dataProvider/DataProvider';
import { Footer_Link, Footer_Projects, Footer_Follow } from '../../utils/constants/constants';

/* Importation des icônes */
import { MdCopyright } from 'react-icons/md';

/* Importation des styles */
import './style.scss';

export default function Footer() {
    const userData = useContext(UserContext);
    const { t } = useTranslation();

    return (
        <footer className='footer'>
            <div className='footer-container'>
                <div className='footer-container-row'>
                    <div className='footer-container-col'>
                        <h4 className='footer-container-title'>{t('footer.title-contact')}</h4>
                        <ul className='footer-list'>
                            <li>
                                <span className='footer-text'>
                                    {userData[0].name} {userData[0].lastname}
                                </span>
                            </li>
                            <li>
                                <span className='footer-text'>{userData[0].adress}</span>
                            </li>
                            <li>
                                <span className='footer-text'>
                                    {userData[0].cp} {userData[0].city}
                                </span>
                            </li>
                            <li>
                                <span className='footer-text'>{userData[0].email}</span>
                            </li>
                        </ul>
                    </div>
                    <div className='footer-container-col'>
                        <h4 className='footer-container-title'>{t('footer.title-link')}</h4>
                        <ul className='foofter-list'>
                            {Footer_Link.map((link, index) => (
                                <li key={index}>
                                    <a className='footer-text' href={link.link}>
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='footer-container-col'>
                        <h4 className='footer-container-title'>{t('footer.title-projects')}</h4>
                        <ul className='footer-list'>
                            {Footer_Projects.map((project, index) => (
                                <li key={index}>
                                    <a className='footer-text' href={project.link}>
                                        {project.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='footer-container-col'>
                        <h4 className='footer-container-title'>{t('footer.title-social')}</h4>
                        <div className='social-links'>
                            {Footer_Follow.map((item, index) => (
                                <a
                                    key={index}
                                    className='footer-link'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    href={item.link}
                                    aria-label={item.label}
                                >
                                    <i className={item.icon}></i>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='footer-container-copyright'>
                    <div className='copyright'>
                        <MdCopyright />
                        <p>VACHET MATTHIEU 2024</p>
                    </div>
                    <div>
                        <p>
                            DESIGN & DEPLOYED BY{' '}
                            <a
                                target={'_blank'}
                                rel='noopener noreferrer'
                                href='https://github.com/Matthieu-Vachet'
                            >
                                VACHET MATTHIEU
                            </a>
                            <br />
                            <a
                                target={'_blank'}
                                rel='noopener noreferrer'
                                href='https://github.com/Matthieu-Vachet/Projet-12-OpenClassRoom-Portfolio/blob/main/LICENSE.txt'
                                className='licence'
                            >
                                {t('footer.licence')}
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
