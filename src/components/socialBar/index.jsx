import './style.scss';
import { motion } from 'framer-motion';

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
            <a className='icon' href='#'>
                {/* GitHub Icon */}
                <motion.i
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 2, duration: 0.8, type: 'spring' }}
                    className='fa-brands fa-github'
                    aria-hidden='true'
                    title='Matthieu Vachet GitHub Profile'
                ></motion.i>
            </a>
            <a className='icon' href='#'>
                {/* LinkedIn Icon */}
                <motion.i
                    initial={{ y1: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.9, duration: 0.7, type: 'spring' }}
                    className='fa-brands fa-linkedin'
                    aria-hidden='true'
                    title='Matthieu Vachet LinkedIn Profile'
                ></motion.i>
            </a>
            <a className='icon' href='#'>
                {/* Instagram Icon */}
                <motion.i
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.7, duration: 0.6, type: 'spring' }}
                    className='fa-brands fa-instagram'
                    aria-hidden='true'
                    title='Matthieu Vachet Instagram Profile'
                ></motion.i>
            </a>
            <a className='icon' href='#'>
                {/* Twitter Icon */}
                <motion.i
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.5, duration: 0.5, type: 'spring' }}
                    className='fa-brands fa-twitter'
                    aria-hidden='true'
                    title='Matthieu Vachet Twitter Profile'
                ></motion.i>
            </a>
        </div>
    );
}
