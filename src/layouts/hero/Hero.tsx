/**
 * Composant Hero qui affiche la section Hero du site.
 * Il utilise le contexte UserContext pour obtenir les données de l'utilisateur et le contexte ThemeContext pour gérer le thème du site.
 * Il affiche également un slogan, la profession de l'utilisateur, un bouton et une image avec des icônes de technologies web.
 *
 * @returns {JSX.Element} La section hero du site avec un slogan, la profession de l'utilisateur, un bouton, une image avec des icônes de technologies web et un composant ScrollMouse.
 */

/* Importation des librairies */
import React, { useContext } from 'react';
import FancyText from '@carefully-coded/react-text-gradient';

/* Importation des données */
import { useTranslation } from 'react-i18next';
import { user } from '../../utils/constants/user';

/* Importation des composants */
import ScrollMouse from '../../components/scrollMouse/ScrollMouse';
import Button from '../../components/button';
import Tilt from 'react-parallax-tilt';
import { TextRevealCard } from '../../components/background/wavy-background/text-reveal-card';

/* Importation des Ressources */
import IconsVersionBlack from '../../assets/images/IconsVersionBlack.svg';
// import IconsVersionWhite from '../../assets/images/IconsVersionWhite.svg';

export default function Hero() {
    const { t } = useTranslation();

    return (
        <div className=' absolute w-[100vw] h-[100vh] flex justify-center items-center text-center'>
            <div className='w-[100%] flex justify-center'>
                <div className='sm:w-[85%] sm:mb-[5rem] md:w-[90%] lg:w-[90%] lg:mt-[3em] xl:mt-[4em] xl:w-[50%] relative flex flex-col justify-center items-center text-basicWhite text-center'>
                    <h1 className=' font-syne md:text-[60px] sm:text-[25px] 2xl:text-[90px] font-bold md:mb-0 sm:mb-1 sm:mt-2 uppercase'>
                        <FancyText gradient={{ from: '#0ce39a', to: '#69007f', type: 'linear' }}>
                            {t('hero.slogan')}
                        </FancyText>
                    </h1>
                    <h3 className='sm:mt-[1rem] md:mt-[27px] mb-[0px] text-center justify-center sm:text-[25px] md:text-[32px] lg:text-[40px] font-normal font-syne'>
                        {user.profession}
                    </h3>
                    <h3>
                        <Button
                            text={t('about.button-2')}
                            href='#contact'
                            height={'4rem'}
                            width={'15rem'}
                            className=' font-syne text-[35px] font-normal sm:mt-[2rem] md:mt-[27px] mb-[100px] no-underline text-basicWhite rounded-[20px] py-[5px] px-[15px] z-0 sm:w-[15rem] sm:h-[3rem] sm:z-10'
                        />
                    </h3>
                </div>

                <div className=' sm:hidden md:hidden lg:hidden xl:w-[30%] backdrop:blur-[2px]'>
                    <Tilt>
                        <img
                            className='w-[100%] '
                            src={IconsVersionBlack}
                            alt='Image Icons technologies web'
                        />
                    </Tilt>
                </div>
            </div>
            <div>
                <ScrollMouse />
            </div>
        </div>
    );
}
