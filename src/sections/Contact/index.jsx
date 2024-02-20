/* Importation des modules */
import { useContext } from 'react';

// Importation des données
import { UserContext } from '../../utils/dataProvider/DataProvider';
import { useTranslation } from 'react-i18next';

// Importation des Animations
import AnimatedTitle from '../../components/animations/AnimatedTitle';
import AnimatedText from '../../components/animations/AnimatedText';

// Importation des composants
import ContactForm from '../../components/contact/Form';
import ContactInfoCard from '../../components/contact/Card';

// Importation des Ressources
import ContactIcon from '../../assets/icons/contactIcon.svg';

// Importation des styles
import './style.scss';

const Contact = () => {
    const { t } = useTranslation();
    const user = useContext(UserContext);

    return (
        <section id='contact' className='section'>
            <div className='contact-container'>
                <AnimatedTitle title='Contact' className='contact-section-title section-title' />
                <AnimatedText text={t('contact-title')} className='contact-title title' />

                <div className='contact-content'>
                    <div className='contact-details'>
                        <ContactInfoCard
                            iconUrl={ContactIcon}
                            name={user[0].name}
                            lastname={user[0].lastname}
                            adress={user[0].adress}
                            cp={user[0].cp}
                            city={user[0].city}
                            number={user[0].number}
                            email={user[0].email}
                        />
                    </div>

                    <div className='contact-form'>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
