import { useTranslation } from 'react-i18next';
import AnimatedSubtitle from '../../components/animations/AnimatedSubtitle';
import AnimatedText from '../../components/animations/AnimatedText';
import SkillComponent from '../../components/skillComponent';
import {
    Backend_skill,
    Conception_skill,
    Developpement_skill,
    Frontend_skill,
} from '../../utils/data/constants';
import './style.scss';

const Skills = () => {
    const { t } = useTranslation();
    return (
        <section id='skills' aria-label='Skills section'>
            <div className='skills-container'>
                <h1 className='skills-section-title'>Skills</h1>
                <AnimatedSubtitle
                    text={t('skills-title')}
                    className={'skills-title'}
                    charSpace='0.016px'
                />
                <div className='skills-section'>
                    <div className='skills-texts'>
                        <AnimatedText text={t('skills-text-1')} />
                    </div>
                    <div className='skill-icons-sections' aria-label='Frontend skills'>
                        {Frontend_skill.map((skill, index) => (
                            <SkillComponent
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
                <div className='skills-section'>
                    <div className='skills-texts'>
                        <AnimatedText text={t('skills-text-2')} />
                    </div>
                    <div className='skill-icons-sections' aria-label='Backend skills'>
                        {Backend_skill.map((skill, index) => (
                            <SkillComponent
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
                <div className='skills-section'>
                    <div className='skills-texts'>
                        <AnimatedText text={t('skills-text-3')} />
                    </div>
                    <div className='skill-icons-sections' aria-label='Developpement skills'>
                        {Developpement_skill.map((skill, index) => (
                            <SkillComponent
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
                <div className='skills-section'>
                    <div className='skills-texts'>
                        <AnimatedText text={t('skills-text-4')} />
                    </div>
                    <div className='skill-icons-sections' aria-label='Conception skills'>
                        {Conception_skill.map((skill, index) => (
                            <SkillComponent
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
};

export default Skills;
