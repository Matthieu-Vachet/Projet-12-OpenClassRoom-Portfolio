import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

// Context pour chaque API
export const UserContext = createContext();
export const ProjectContext = createContext();
export const ExperienceContext = createContext();

// Provider pour chaque API
export const DataProvider = ({ children }) => {
    const { i18n } = useTranslation();
    const [userData, setUserData] = useState(null);
    const [projetsData, setProjetsData] = useState(null);
    const [experiencesData, setExperiencesData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userResponse = fetch(
                    'https://api-rest-portfolio-mauve.vercel.app/Api/v1/users/',
                );
                const projetResponse = fetch(
                    'https://api-rest-portfolio-mauve.vercel.app/Api/v1/projets/',
                );
                const experienceResponse = fetch(
                    'https://api-rest-portfolio-mauve.vercel.app/Api/v1/experiences/',
                );

                const [userResult, projetResult, experienceResult] = await Promise.all([
                    userResponse,
                    projetResponse,
                    experienceResponse,
                ]).then((responses) => Promise.all(responses.map((response) => response.json())));

                const userResultTranslated = userResult.map((user) => ({
                    ...user,
                    profession: user.profession[i18n.language],
                    pays: user.pays[i18n.language],
                }));

                const projetResultTranslated = projetResult.map((projet) => ({
                    ...projet,
                    name: projet.name[i18n.language],
                    description: projet.description[i18n.language],
                    category: projet.category[i18n.language],
                }));

                const experienceResultTranslated = experienceResult.map((experience) => ({
                    ...experience,
                    title: experience.title[i18n.language],
                    school: experience.school[i18n.language],
                    location: experience.location[i18n.language],
                    description: experience.description[i18n.language],
                    diplome: experience.diplome[i18n.language],
                }));

                console.log(userResultTranslated);
                console.log(projetResultTranslated);
                console.log(experienceResultTranslated);

                setUserData(userResultTranslated);
                setProjetsData(projetResultTranslated);
                setExperiencesData(experienceResultTranslated);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [i18n.language]);

    if (!userData || !projetsData || !experiencesData) {
        return null; // Ne rend rien tant que les données ne sont pas chargées
    }

    return (
        <UserContext.Provider value={userData}>
            <ProjectContext.Provider value={projetsData}>
                <ExperienceContext.Provider value={experiencesData}>
                    {children}
                </ExperienceContext.Provider>
            </ProjectContext.Provider>
        </UserContext.Provider>
    );
};

DataProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
