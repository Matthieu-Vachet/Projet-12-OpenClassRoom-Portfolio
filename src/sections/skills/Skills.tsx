import React from 'react';
import AnimatedSubtitle from '../../components/animations/AnimatedSubtitle';
import AnimatedText from '../../components/animations/AnimatedText';
import SkillCards from '../../components/skillCards';
import { useTranslation } from 'react-i18next';
import {
    Backend_skill,
    Conception_skill,
    Developpement_skill,
    Frontend_skill,
} from '../../utils/constants/constants';
import './Skills.scss';

export default function Skills() {
    const { t } = useTranslation();

    return (
        <section id='skills' className='section w-[100%] lg:pt-[0px]' aria-label='Skills section'>
            <div className='sm:w-[95%] lg:w-[100%] sm:m-auto relative flex flex-col'>
                <h1 className='skills-section-title section-title'>Skills</h1>
                <AnimatedSubtitle
                    text={t('skills.title')}
                    className={'skills-title title'}
                    charSpace='0.016px'
                    wordSpace='0.016px'
                />
                <div className='sm:w-[100%] lg:w-[95%] flex sm:flex-col lg:flex-row items-center text-center sm:justify-center lg:justify-between sm:ml-[0px] lg:ml-[2rem] sm:mb-[2rem] lg:mb-[5rem] gap-5 '>
                    <div className=' text-basicWhite uppercase gap-[4rem] opacity-[0.5] sm:text-center lg:text-start sm:scale-y-[1] lg:scale-y-[2] font-bold sm:text-[20px] font-syne xl:text-[25px] 2xl:text-[30px]  '>
                        <AnimatedText text={t('skills.text-1')} />
                    </div>
                    <div className='skill-icons-sections' aria-label='Frontend skills'>
                        {Frontend_skill.map((skill, index) => (
                            <SkillCards
                                key={index}
                                name={skill.skill_name}
                                Image={skill.Image}
                                fontSize={skill.size}
                                color='white'
                                index={index}
                                alt={skill.alt}
                            />
                        ))}
                    </div>
                </div>
                <div className='sm:w-[100%] lg:w-[95%] flex sm:flex-col lg:flex-row items-center text-center sm:justify-center lg:justify-between sm:ml-[0px] lg:ml-[2rem] sm:mb-[2rem] lg:mb-[5rem] gap-5 '>
                    <div className=' text-basicWhite uppercase gap-[4rem] opacity-[0.5] sm:text-center lg:text-start sm:scale-y-[1] lg:scale-y-[2] font-bold sm:text-[20px] font-syne xl:text-[25px] 2xl:text-[30px] '>
                        <AnimatedText text={t('skills.text-2')} />
                    </div>
                    <div className='skill-icons-sections' aria-label='Backend skills'>
                        {Backend_skill.map((skill, index) => (
                            <SkillCards
                                key={index}
                                name={skill.skill_name}
                                Image={skill.Image}
                                fontSize={skill.size}
                                color='white'
                                index={index}
                                alt={skill.alt}
                            />
                        ))}
                    </div>
                </div>
                <div className='sm:w-[100%] lg:w-[95%] flex sm:flex-col lg:flex-row items-center text-center sm:justify-center lg:justify-between sm:ml-[0px] lg:ml-[2rem] sm:mb-[2rem] lg:mb-[5rem] gap-5 '>
                    <div className=' text-basicWhite uppercase gap-[4rem] opacity-[0.5] sm:text-center lg:text-start sm:scale-y-[1] lg:scale-y-[2] font-bold sm:text-[20px] font-syne xl:text-[25px] 2xl:text-[30px] '>
                        <AnimatedText text={t('skills.text-3')} />
                    </div>
                    <div className='skill-icons-sections' aria-label='Developpement skills'>
                        {Developpement_skill.map((skill, index) => (
                            <SkillCards
                                key={index}
                                name={skill.skill_name}
                                Image={skill.Image}
                                fontSize={skill.size}
                                color='white'
                                index={index}
                                alt={skill.alt}
                            />
                        ))}
                    </div>
                </div>
                <div className='sm:w-[100%] lg:w-[95%] flex sm:flex-col lg:flex-row items-center text-center sm:justify-center lg:justify-between sm:ml-[0px] lg:ml-[2rem] sm:mb-[2rem] lg:mb-[5rem] gap-5 '>
                    <div className=' text-basicWhite gap-[4rem] opacity-[0.5] sm:text-center lg:text-start sm:scale-y-[1] lg:scale-y-[2] font-bold sm:text-[20px] font-syne uppercase xl:text-[25px] 2xl:text-[30px] '>
                        <AnimatedText text={t('skills.text-4')} />
                    </div>
                    <div className='skill-icons-sections' aria-label='Conception skills'>
                        {Conception_skill.map((skill, index) => (
                            <SkillCards
                                key={index}
                                name={skill.skill_name}
                                Image={skill.Image}
                                fontSize={skill.size}
                                color='white'
                                index={index}
                                alt={skill.alt}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
