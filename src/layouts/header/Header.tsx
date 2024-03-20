/* Importation des modules */
import React from 'react';

/* Importation des composants */
import { toast } from 'sonner';

/* Importation des données */
import { useTranslation } from 'react-i18next';
import { user } from '../../utils/constants/user';
/*Importation des ressources*/
import Logo from '../../assets/images/LogoM.webp';
import ToggleOther from '../../components/toggle/toggleOther';
import ToggleMobile from '../../components/toggle/toggleMobile';

export default function Header() {
    const { i18n } = useTranslation();
    const { t } = useTranslation();

    const changeLanguage = (language: string) => {
        i18n.changeLanguage(language);
        toast.success(t('header.langue'));
    };

    return (
        <header className=' absolute w-screen h-auto flex justify-between box-border'>
            <div className='lg:flex justify-center sm:hidden'>
                <img
                    className='w-7 text-basicWhite mt-0.5'
                    src={Logo}
                    alt='Matthieu Vachet Logo portfolio'
                />
                <h1 className=' w-full text-basicWhite mt-1.5 font-space-grotesk text-[20px] font-normal'>
                    {user.name + ' '}
                    {user.lastname}
                </h1>
            </div>
            <div className='z-10 lg:flex justify-end items-center text-center gap-[0.5em] mr-[2%] sm:hidden'>
                <button
                    className='w-[42px] h-[30px] rounded-md border border-strockGlass bg-glassGlassDark60 backdrop-blur-sm cursor-pointer transition-all duration-100 hover:bg-strockGlass'
                    onClick={() => changeLanguage('fr')}
                >
                    <span className='w-[100%] font-space-grotesk text-[16px] font-normal text-basicWhite'>
                        FR
                    </span>
                </button>
                <button
                    className='w-[42px] h-[30px] rounded-md border border-strockGlass bg-glassGlassDark60 backdrop-blur-sm cursor-pointer transition-all duration-100 hover:bg-strockGlass'
                    onClick={() => changeLanguage('en')}
                >
                    <span className='w-[100%] font-space-grotesk text-[16px] font-normal text-basicWhite'>
                        EN
                    </span>
                </button>

                <ToggleOther />
            </div>
            <ToggleMobile />
        </header>
    );
}
