// Importation des librairies
import { motion } from 'framer-motion';
import { useContext } from 'react';
import FancyText from '@carefully-coded/react-text-gradient';

// Importation des données
import { UserContext } from '../../utils/dataProvider/DataProvider';
import { ThemeContext } from '../../utils/dataProvider/DataProvider';
import { useTranslation } from 'react-i18next';

// Importation des composants
import ScrollMouse from '../../components/scrollMouse';
import { TextHeroVariant, SvgVariants } from '../../utils/framerMotion/Variante';
import Tilt from 'react-parallax-tilt';

// Importation des Ressources
import IconsVersionBlack from '../../assets/images/IconsVersionBlack.svg';
import IconsVersionWhite from '../../assets/images/IconsVersionWhite.svg';

// Importation des styles
import './style.scss';
import '../../styles/variable.scss';

export default function Hero() {
    const { t } = useTranslation();
    const data = useContext(UserContext);
    const { theme } = useContext(ThemeContext);

    const islightMode = theme === 'dark';

    return (
        <div className='hero'>
            <div className='hero_content'>
                <div className='hero_text'>
                    {/* Slogan Hero */}
                    <motion.h1
                        initial='initial'
                        animate='animate'
                        transition={{ delay: 0.6, duration: 0.8, type: 'spring' }}
                        variants={TextHeroVariant}
                        className='hero_slogan'
                    >
                        <FancyText gradient={{ from: '#0ce39a', to: '#69007f', type: 'linear' }}>
                            {t('about.title')}
                        </FancyText>
                    </motion.h1>

                    {/* Profession Hero */}
                    <motion.h3
                        initial='initial'
                        animate='animate'
                        transition={{ delay: 0.9, duration: 0.5, type: 'spring' }}
                        variants={TextHeroVariant}
                        className='hero_profession'
                    >
                        {data[0].profession}
                    </motion.h3>

                    {/* Number Hero */}
                    <motion.h4
                        initial='initial'
                        animate='animate'
                        transition={{ delay: 1, duration: 0.5, type: 'spring' }}
                        variants={TextHeroVariant}
                        className='hero_number'
                    >
                        {data[0].number}
                    </motion.h4>
                </div>
                <div className='img-icons-section'>
                    <Tilt>
                        <motion.img
                            initial='hidden'
                            animate='visible'
                            variants={SvgVariants}
                            className='img-icons'
                            src={islightMode ? IconsVersionWhite : IconsVersionBlack}
                            alt='Image Icons technologies web'
                        />
                    </Tilt>
                </div>
            </div>

            {/* Scroll Mouse composant */}
            <div className='ScrollMouse'>
                <ScrollMouse />
            </div>
        </div>
    );
}
