/* Importation des modules */
import { motion } from 'framer-motion';
import { useContext } from 'react';

// Importation des composants
import { HeaderVariants } from '../../utils/framerMotion/Variante';

// Importation des données
import { UserContext } from '../../utils/dataProvider/DataProvider';
import { useTranslation } from 'react-i18next';

// Ressources
import Logo from '../../assets/images/LogoM.svg';
import LightDarkToggle from '../../components/lightDarkToggle';

// Importation des styles
import './style.scss';

export default function Header() {
    const { i18n } = useTranslation();
    const data = useContext(UserContext);

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

    return (
        <header>
            {/* Logo */}
            <div className='logo_content'>
                <motion.img
                    className='logo_header'
                    initial='initial'
                    animate='animate'
                    transition={{ delay: 1.9, duration: 1, type: 'spring' }}
                    variants={HeaderVariants}
                    src={Logo}
                    alt='Matthieu Vachet Logo portfolio'
                />
                {/* Name */}
                <motion.h1
                    initial='initial'
                    animate='animate'
                    transition={{ delay: 1.9, duration: 1, type: 'spring' }}
                    variants={HeaderVariants}
                    className='name_header'
                >
                    {data[0].name + ' '}
                    {data[0].lastname}
                </motion.h1>
            </div>
            {/* Buttons FR - EN - Toggle */}
            <motion.div
                initial='initial'
                animate='animate'
                transition={{ delay: 1.9, duration: 1, type: 'spring' }}
                variants={HeaderVariants}
                className='button_header'
            >
                <button className='button_fr' onClick={() => changeLanguage('fr')}>
                    <span className='text_fr'>FR</span>
                </button>
                <button className='button_en' onClick={() => changeLanguage('en')}>
                    <span className='text_en'>EN</span>
                </button>
                <LightDarkToggle />
            </motion.div>
        </header>
    );
}
