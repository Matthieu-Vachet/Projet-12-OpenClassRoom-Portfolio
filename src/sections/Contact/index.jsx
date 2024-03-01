/**
 * Composant Contact qui affiche la section "Contact" du site.
 * @returns {JSX.Element} La section "Contact" avec un titre animé et un formulaire de contact.
 */

/* Importation des modules */
import { useTranslation } from 'react-i18next';

/* Importation des composants d'animation */
import AnimatedTitle from '../../components/animations/AnimatedTitle';
import AnimatedText from '../../components/animations/AnimatedText';

/* Importation des composants */
import ContactForm from '../../components/contact/Form';

/* Importation du style */
import './style.scss';

export default function Contact() {
    const { t } = useTranslation();

    return (
        <section id='contact' className='section'>
            <div className='contact-container'>
                <AnimatedTitle title='Contact' className='contact-section-title section-title' />
                <AnimatedText text={t('contact.title')} className='contact-title title' />

                <div className='contact-content'>
                    <div className='contact-form'>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    );
}
