import React, { useTranslation } from 'react-i18next';
import AnimatedSubtitle from '../../components/animations/AnimatedSubtitle';
import AnimatedText from '../../components/animations/AnimatedText';
import AnimatedElement from '../../components/animations/AnimatedElement';
import Button from '../../components/button';
import TopScroll from '../../components/topScroll';
// import './style.scss';

export default function About() {
    const { t } = useTranslation();

    return (
        <section
            id='about'
            className='section w-[100%] flex flex-col items-center justify-center sm:pb-[3rem] '
            aria-label='About section'
        >
            <div className=' sm:w-[95%] lg:w-[100%] sm:ml-[0px] lg:ml-[2rem] md:items-center md:text-center lg:items-end lg:text-end relative flex flex-col justify-center'>
                <h1 className=' sm:items-center lg:items-end sm:pr-[0px] lg:pr-[4rem] section-title'>
                    About
                </h1>
                <AnimatedSubtitle
                    text={t('about.title')}
                    className={'about-title title'}
                    charSpace='0.016px'
                    wordSpace='0.016px'
                />
                <div className='about-content'>
                    <div className='about-text'>
                        <AnimatedText text={t('about.text-1')} />
                        <AnimatedText delay={0.1} text={t('about.text-2')} />
                        <AnimatedText delay={0.2} text={t('about.text-3')} />
                    </div>
                    <AnimatedElement
                        delay={0.3}
                        className='about-button'
                        aria-label='About section buttons'
                    >
                        <Button
                            text={t('about.button-1')}
                            target={'_blank'}
                            rel='noopener noreferrer'
                            href='https://drive.google.com/file/d/1zMZp_Z-gkrRHBZe1b1m1yXhWOR7HDjG4/view?usp=drive_link'
                        />
                    </AnimatedElement>
                </div>
            </div>
            <TopScroll />
        </section>
    );
}
