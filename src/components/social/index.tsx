/**
 * Socials est un composant React qui affiche une liste d'icônes de médias sociaux avec des animations.
 * @component
 *
 * @example
 * <Socials />
 *
 * @returns {React.Element} - Le composant Socials.
 */

/* Importation des modules */
import React from 'react';
import { motion } from 'framer-motion';

import { FaGithub, FaLinkedin, FaInstagram, FaTwitterSquare } from 'react-icons/fa';

/* Importation du style */
import './style.scss';

export default function Socials() {
    const styles = {
        icon: {
            textDecoration: 'none',
            fontSize: '22px',
            padding: '10px',
            transition: '0.2s ease-in',
        },
    };

    return (
        <div className='socialIcons' style={styles.icon}>
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
                    aria-hidden='true'
                >
                    <FaGithub />
                </motion.i>
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
                    aria-hidden='true'
                >
                    <FaLinkedin />
                </motion.i>
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
                    aria-hidden='true'
                >
                    <FaInstagram />
                </motion.i>
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
                    aria-hidden='true'
                >
                    <FaTwitterSquare />
                </motion.i>
            </a>
        </div>
    );
}
