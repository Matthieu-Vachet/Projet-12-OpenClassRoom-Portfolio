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
    const [Error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userResponse = await fetch('http://node6.adky.net:1048/Api/v1/users/');
                const userResult = await userResponse.json();
                setUserData(userResult);
                setError(null);
                console.log('UserData fetched:', userResult);

                const projetResponse = await fetch('http://node6.adky.net:1048/Api/v1/projets/');
                const projetResult = await projetResponse.json();
                setProjetsData(projetResult);
                setError(null);
                console.log('ProjetData fetched:', projetResult);

                const experienceResponse = await fetch(
                    'http://node6.adky.net:1048/Api/v1/experiences/',
                );
                const experienceResult = await experienceResponse.json();
                setExperiencesData(experienceResult);
                setError(null);
                console.log('ExperienceData fetched:', experienceResult);
            } catch (error) {
                setError(error);
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    if (Error) {
        return (
            <UserContext.Provider value={userData}>
                <ProjectContext.Provider value={projetsData}>
                    <ExperienceContext.Provider value={experiencesData}>
                        {children}
                    </ExperienceContext.Provider>
                </ProjectContext.Provider>
            </UserContext.Provider>
        );
    }

    return <UserContext.Provider value={userData}>{children}</UserContext.Provider>;
};

DataProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
