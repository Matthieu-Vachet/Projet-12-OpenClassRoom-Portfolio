import './style.scss';
import { motion } from 'framer-motion';

// Importing icons from react-icons
import { FaTwitterSquare, FaGithubSquare, FaLinkedin  } from 'react-icons/fa';
import { IoLogoDiscord } from 'react-icons/io5';

import LineTop from '../../assets/LineTopGray.svg';
import LineBottom from '../../assets/LineBottomGray.svg';

export default function SocialBar() {
    return (
        <motion.div
            className='socialBar'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, ease: 'easeInOut' }}
        >
            <motion.img
                className='social_top_bar'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.1, duration: 1.5, ease: 'easeInOut' }}
                src={LineTop}
                alt='Matthieu Vachet social bar bottom line'
            />
            <motion.a
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.5, type: 'spring' }}
                className='social_link'
                aria-hidden='true'
                title="Matthieu Vachet' GitHub Profile"
            >
                <FaLinkedin />
            </motion.a>
            <motion.i
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.7, duration: 0.5, type: 'spring' }}
                className='social_link'
                aria-hidden='true'
                title="Matthieu Vachet' LinkedIn Profile"
            >
                <FaTwitterSquare />
            </motion.i>
            <motion.i
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.9, duration: 0.5, type: 'spring' }}
                className='social_link'
                aria-hidden='true'
                title="Matthieu Vachet' Instagram Profile"
            >
                <FaGithubSquare />
            </motion.i>
            <motion.i
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 2.1, duration: 0.5, type: 'spring' }}
                className='social_link'
                aria-hidden='true'
                title="Matthieu Vachet' Twitter Profile"
            >
                <IoLogoDiscord />
            </motion.i>
            <motion.img
                className='social_top_bar'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.1, duration: 1.5, ease: 'easeInOut' }}
                src={LineBottom}
                alt='Matthieu Vachet social bar bottom line'
            />
        </motion.div>
    );
}
