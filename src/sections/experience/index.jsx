import AnimatedTitle from '../../components/animations/AnimatedTitle';
import ExperienceCards from '../../components/experienceCards';
import { useContext } from 'react';
import { ExperienceContext } from '../../utils/dataProvider/DataProvider';
import opLogo from '../../assets/icons/OpLogo.png';
import './style.scss';

const Experience = () => {
    const data = useContext(ExperienceContext);

    return (
        <section id='experience'>
            <div className='experience-container'>
                <AnimatedTitle
                    text={'Les étapes clés de mon parcours'}
                    className={'experience-title'}
                />
            </div>
            <ExperienceCards
                src={opLogo}
                alt={'Op-Logo'}
                title={data[0].title.fr}
                school={data[0].school.fr}
                location={data[0].location.fr}
                description={data[0].description.fr}
                diplome={data[0].diplome.fr}
                startDate={data[0].startDate}
                endDate={data[0].endDate}
                technologies={data[0].technologies.map((tech, techIndex) => (
                    <span key={techIndex}>{tech}</span>
                ))}
                link={data[0].link}
            />
        </section>
    );
};

export default Experience;
