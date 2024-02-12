import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// Context pour chaque API
export const UserContext = createContext();
export const ProjectContext = createContext();
export const ExperienceContext = createContext();

// Provider pour chaque API
export const DataProvider = ({ children }) => {
    const [userData, setUserData] = useState(null);
    const [projetsData, setProjetsData] = useState(null);
    const [experiencesData, setExperiencesData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userResponse = fetch('http://node6.adky.net:1048/Api/v1/users/');
                const projetResponse = fetch('http://node6.adky.net:1048/Api/v1/projets/');
                const experienceResponse = fetch('http://node6.adky.net:1048/Api/v1/experiences/');

                const [userResult, projetResult, experienceResult] = await Promise.all([
                    userResponse,
                    projetResponse,
                    experienceResponse,
                ]).then((responses) => Promise.all(responses.map((response) => response.json())));

                console.log('UserData fetched:', userResult);
                console.log('ProjetData fetched:', projetResult);
                console.log('ExperienceData fetched:', experienceResult);

                setUserData(userResult);
                setProjetsData(projetResult);
                setExperiencesData(experienceResult);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

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
