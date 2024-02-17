import AnimatedTitle from '../../components/animations/AnimatedTitle';
import AnimatedText from '../../components/animations/AnimatedText';

import { useTranslation } from 'react-i18next';
import './Contact.scss';

const Contact = () => {
    const { t } = useTranslation();

    return (
        <section id='contact'>
            <div className='contact-container'>
                <AnimatedTitle title='Contact' className='contact-section-title' />
                <AnimatedText text={t('contact-title')} className='contact-title' />
            </div>
        </section>
    );
};

export default Contact;
