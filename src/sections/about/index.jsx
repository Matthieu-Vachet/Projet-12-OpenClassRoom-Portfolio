import AnimatedTitle from '../../components/animations/AnimatedTitle';
import AnimatedText from '../../components/animations/AnimatedText';
import Button from '../../components/button';
import ScrollToTopButton from '../../components/scrollToTopButton';
import { motion } from 'framer-motion';
import { ButtonVariant } from '../../utils/framerMotion/Variante';
import ExperienceCards from '../../components/experienceCards';
import OpLogo from '../../assets/icons/OpLogo.png';
import './style.scss';

export default function About() {
    return (
        <section id='about'>
            <div className='about-container'>
                <AnimatedTitle text={'APPRENEZ À ME CONNAÎTRE'} className={'about-title'} />
                <div className='about-content'>
                    <div className='about-text'>
                        <AnimatedText
                            delay={0.4}
                            text="Fan d'informatique depuis ma jeunesse, j'ai exploré la programmation bien avant de devenir intégrateur web. Pour moi, chaque ligne de code est une œuvre d'art, une exploration infinie de création."
                        />
                        <AnimatedText
                            delay={0.5}
                            text="Mon engagement dans ce domaine est bien plus qu'une carrière, c'est une passion sans limites, une aventure que je poursuivrai avec détermination jusqu'à ce que mes mains ne puissent plus glisser sur un clavier."
                        />
                        <AnimatedText
                            delay={0.8}
                            text="Aujourd'hui, je suis prêt à mettre ces compétences au service de vos projets. Ensemble, nous pouvons créer des sites web dynamiques, optimisés et sans bugs. Je suis impatient de vous aider à concrétiser vos idées et à faire de vos projets une réalité."
                        />
                    </div>
                    <motion.div
                        className='about-button'
                        initial='initial'
                        animate='animate'
                        transition={{ delay: 1.9, duration: 1, type: 'spring' }}
                        variants={ButtonVariant}
                    >
                        <Button text={'Mon Cv'} />
                        <Button text={'Contact'} />
                    </motion.div>
                </div>
            </div>
            <div className='experience-container'>
                <AnimatedTitle
                    text={'Les étapes clés de mon parcours'}
                    className={'experience-title'}
                />
            </div>
            <div className='experience-content'>
                <div className='experience-cards'>
                    <ExperienceCards src={OpLogo} alt={'Logo OpenClassRooms'} />
                </div>
                <div className='experience-text'>
                    <AnimatedText
                        delay={0.2}
                        text="Suite à une volonté profonde de reconversion, j'ai décidé d'embrasser une nouvelle voie et d'entreprendre une formation d'Intégrateur Web chez OpenClassRooms. Cette formation, d'une durée de neuf mois, s'est déroulée de 2023 à 2024. Avec détermination et volonté, j'ai réussi à décrocher le RNCP niveau 5. Fort de cette réussite, j'envisage maintenant de me lancer en freelance et de construire ma propre histoire."
                    />
                    <AnimatedText
                        delay={0.4}
                        text='Cette aventure a été une occasion inestimable de faire connaissance avec des mentors et des développeurs, tous merveilleux et extrêmement compétents dans leurs domaines respectifs.'
                    />
                    <AnimatedText
                        delay={0.6}
                        text="Au cours de cette formation, j'ai découvert l'intégration de sites web dynamiques, l'optimisation, le débogage et la gestion de projets. Chaque jour était une nouvelle opportunité d'apprendre et de me perfectionner."
                    />
                </div>
            </div>

            <ScrollToTopButton />
        </section>
    );
}
