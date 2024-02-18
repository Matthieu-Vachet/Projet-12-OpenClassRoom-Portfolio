// Importation des librairies
import { motion } from 'framer-motion';
import { useContext } from 'react';
import FancyText from '@carefully-coded/react-text-gradient';

// Importation des données
import { UserContext } from '../../utils/dataProvider/DataProvider';
import { TextHeroVariant, SvgVariants } from '../../utils/framerMotion/Variante';
import { useTranslation } from 'react-i18next';

// Importation des composants
import ScrollMouse from '../../components/scrollMouse';
import ImgIcons from '../../assets/images/VersionBalck.svg';
// Importation des styles
import './style.scss';
import '../../styles/variable.scss';

export default function Hero() {
    const { t } = useTranslation();
    const data = useContext(UserContext);

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
                        <FancyText
                            gradient={{ from: '#0ce39a', to: '#69007f', type: 'linear' }}
                            animateTo={{ from: '#69007f', to: '#fc0987' }}
                        >
                            {t('hero-slogan')}
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
                    <motion.img
                        initial='hidden'
                        animate='visible'
                        variants={SvgVariants}
                        className='img-icons'
                        src={ImgIcons}
                        alt='Image Icons technologies web'
                    />
                </div>
            </div>

            {/* Scroll Mouse composant */}
            <ScrollMouse />
        </div>
    );
}
