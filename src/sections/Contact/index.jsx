// Importation des données
import { useTranslation } from 'react-i18next';

// Importation des Animations
import AnimatedTitle from '../../components/animations/AnimatedTitle';
import AnimatedText from '../../components/animations/AnimatedText';

// Importation des composants
import ContactForm from '../../components/contact/Form';

// Importation des styles
import './style.scss';

const Contact = () => {
    const { t } = useTranslation();

    return (
        <section id='contact' className='section'>
            <div className='contact-container'>
                <AnimatedTitle title='Contact' className='contact-section-title section-title' />
                <AnimatedText text={t('contact-title')} className='contact-title title' />

                <div className='contact-content'>
                    <div className='contact-form'>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
