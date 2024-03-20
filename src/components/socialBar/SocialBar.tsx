import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaTwitterSquare } from 'react-icons/fa';

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
        <div
            className='sm:w-[100%] md:w-[3%] h-[100vh] absolute flex sm:flex-row md:flex-col sm:justify-center md:justify-end items-center py-[5px] px-[5px] sm:ml-0 md:ml-[1em] sm:bottom-[3em] md:bottom-[4em] lg:bottom-[4.5em] xl:bottom-[3em] sm:top-[7rem] md:top-0 sm:gap-[2em] md:gap-[1em] z-10 '
            style={styles.icon}
        >
            <a
                className='text-basicWhite no-underline text-[2.2rem] cursor-pointer duration-[0.3s] hover:text-basicDarkGray hover:scale-120 2xl:text-[2.5rem] 2xl:scale-125'
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
                className='text-basicWhite no-underline text-[2.2rem] cursor-pointer duration-[0.3s] hover:text-basicDarkGray hover:scale-120 2xl:text-[2.5rem] 2xl:scale-125'
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
                className='text-basicWhite no-underline text-[2.2rem] cursor-pointer duration-[0.3s] hover:text-basicDarkGray hover:scale-120 2xl:text-[2.5rem] 2xl:scale-125'
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
                className='text-basicWhite no-underline text-[2.2rem] cursor-pointer duration-[0.3s] hover:text-basicDarkGray hover:scale-120 2xl:text-[2.5rem] 2xl:scale-125'
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
