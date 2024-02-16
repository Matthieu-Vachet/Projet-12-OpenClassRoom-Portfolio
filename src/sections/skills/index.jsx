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
        <section id='skills'>
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
                    <div className='skill-icons-sections'>
                        {Frontend_skill.map((image, index) => (
                            <SkillComponent
                                key={index}
                                name={image.skill_name}
                                src={image.Image}
                                width={image.width}
                                height={image.height}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
                <div className='skills-section'>
                    <div className='skills-texts'>
                        <AnimatedText text={t('skills-text-2')} />
                    </div>
                    <div className='skill-icons-sections'>
                        {Backend_skill.map((image, index) => (
                            <SkillComponent
                                key={index}
                                name={image.skill_name}
                                src={image.Image}
                                width={image.width}
                                height={image.height}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
                <div className='skills-section'>
                    <div className='skills-texts'>
                        <AnimatedText text={t('skills-text-3')} />
                    </div>
                    <div className='skill-icons-sections'>
                        {Developpement_skill.map((image, index) => (
                            <SkillComponent
                                key={index}
                                name={image.skill_name}
                                src={image.Image}
                                width={image.width}
                                height={image.height}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
                <div className='skills-section'>
                    <div className='skills-texts'>
                        <AnimatedText text={t('skills-text-4')} />
                    </div>
                    <div className='skill-icons-sections'>
                        {Conception_skill.map((image, index) => (
                            <SkillComponent
                                key={index}
                                name={image.skill_name}
                                src={image.Image}
                                width={image.width}
                                height={image.height}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
