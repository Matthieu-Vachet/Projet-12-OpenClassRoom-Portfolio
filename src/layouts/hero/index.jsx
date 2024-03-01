/**
 * Composant Hero qui affiche la section Hero du site.
 * Il utilise le contexte UserContext pour obtenir les données de l'utilisateur et le contexte ThemeContext pour gérer le thème du site.
 * Il affiche également un slogan, la profession de l'utilisateur, un bouton et une image avec des icônes de technologies web.
 *
 * @returns {JSX.Element} La section hero du site avec un slogan, la profession de l'utilisateur, un bouton, une image avec des icônes de technologies web et un composant ScrollMouse.
 */

/* Importation des librairies */
import { motion } from 'framer-motion';
import { useContext } from 'react';
import FancyText from '@carefully-coded/react-text-gradient';

/* Importation des données */
import { UserContext } from '../../utils/dataProvider/DataProvider';
import { ThemeContext } from '../../utils/dataProvider/DataProvider';
import { useTranslation } from 'react-i18next';

/* Importation des composants */
import ScrollMouse from '../../components/scrollMouse';
import Button from '../../components/button';
import { HeroVariante, SvgVariante } from '../../utils/framerMotion/Variante';
import Tilt from 'react-parallax-tilt';

/* Importation des Ressources */
import IconsVersionBlack from '../../assets/images/IconsVersionBlack.svg';
import IconsVersionWhite from '../../assets/images/IconsVersionWhite.svg';

/* Importation des styles */
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
                <motion.div
                    initial='initial'
                    animate='animate'
                    variants={HeroVariante}
                    className='hero_text'
                >
                    <h1 className='hero_slogan'>
                        <FancyText gradient={{ from: '#0ce39a', to: '#69007f', type: 'linear' }}>
                            {t('hero.slogan')}
                        </FancyText>
                    </h1>
                    <h3 className='hero_profession'>{data[0].profession}</h3>
                    <h4>
                        <Button
                            text={t('about.button-2')}
                            href='#contact'
                            height={'4rem'}
                            width={'15rem'}
                            className='hero_btn'
                        />
                    </h4>
                </motion.div>
                <div className='img-icons-section'>
                    <Tilt>
                        <motion.img
                            initial='hidden'
                            animate='visible'
                            variants={SvgVariante}
                            className='img-icons'
                            src={islightMode ? IconsVersionWhite : IconsVersionBlack}
                            alt='Image Icons technologies web'
                        />
                    </Tilt>
                </div>
            </div>
            <motion.div
                initial='initial'
                animate='animate'
                variants={HeroVariante}
                className='ScrollMouse'
            >
                <ScrollMouse />
            </motion.div>
        </div>
    );
}
