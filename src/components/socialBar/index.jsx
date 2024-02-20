/* Importation des modules */
import { motion } from 'framer-motion';

// Style
import './style.scss';

export default function SocialBar() {
    const styles = {
        icon: {
            textDecoration: 'none',
            fontSize: '22px',
            padding: '10px',
            transition: '0.2s ease-in',
        },
    };

    return (
        <div className='socialIcons' style={styles.socialIcons}>
            <a
                className='icon'
                href='https://github.com/Matthieu-Vachet'
                target='_blank'
                rel='noopener noreferrer'
                title='Matthieu Vachet GitHub Profile'
            >
                {/* GitHub Icon */}
                <motion.i
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 2, duration: 0.8, type: 'spring' }}
                    className='fa-brands fa-github'
                    aria-hidden='true'
                ></motion.i>
            </a>
            <a
                className='icon'
                href='www.linkedin.com/in/matthieu-vachet-46b7231b0'
                target='_blank'
                rel='noopener noreferrer'
                title='Matthieu Vachet LinkedIn Profile'
            >
                {/* LinkedIn Icon */}
                <motion.i
                    initial={{ y1: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.9, duration: 0.7, type: 'spring' }}
                    className='fa-brands fa-linkedin'
                    aria-hidden='true'
                ></motion.i>
            </a>
            <a
                className='icon'
                href='https://www.instagram.com/mathunting02/'
                target='_blank'
                rel='noopener noreferrer'
                title='Matthieu Vachet Instagram Profile'
            >
                {/* Instagram Icon */}
                <motion.i
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.7, duration: 0.6, type: 'spring' }}
                    className='fa-brands fa-instagram'
                    aria-hidden='true'
                ></motion.i>
            </a>
            <a
                className='icon'
                href='https://twitter.com/ShinyHunting02'
                target='_blank'
                rel='noopener noreferrer'
                title='Matthieu Vachet Twitter Profile'
            >
                {/* Twitter Icon */}
                <motion.i
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.5, duration: 0.5, type: 'spring' }}
                    className='fa-brands fa-twitter'
                    aria-hidden='true'
                ></motion.i>
            </a>
        </div>
    );
}
