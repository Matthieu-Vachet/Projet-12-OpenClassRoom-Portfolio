/**
 * Fournit des données pour chaque contexte.
 * @param {object} props - Les propriétés du composant.
 * @param {React.ReactNode} props.children - Les composants enfants.
 * @returns {React.ReactNode} Les composants enfants enveloppés dans les fournisseurs de contexte.
 */

/* Importation des modules */
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';

/* Importation des Données */
import { useTranslation } from 'react-i18next';

export const UserContext = createContext(); /* Contexte pour les données utilisateur */
export const ProjectContext = createContext(); /* Contexte pour les données de projet */
export const ExperienceContext = createContext(); /* Contexte pour les données d'expérience */
export const AuthContext = createContext(); /* Contexte pour les données d'authentification */
export const ThemeContext = createContext(); /* Contexte pour les données de thème */

export const DataProvider = ({ children }) => {
    const { i18n } = useTranslation();
    const [userData, setUserData] = useState(null);
    const [projetsData, setProjetsData] = useState(null);
    const [experiencesData, setExperiencesData] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [token, setToken] = useState(null);
    const [theme, setTheme] = useState('light');

    /**
     * Supprime un projet de la liste des projets.
     * @param {string} id - L'identifiant du projet à supprimer.
     */

    const deleteProjets = (id) => {
        setProjetsData(projetsData.filter((projet) => projet._id !== id));
    };

    /**
     * Utilise l'API Fetch pour rafraîchir les données de projet.
     */

    const refreshProjects = async () => {
        try {
            const response = await fetch(
                'https://api-rest-portfolio-mauve.vercel.app/Api/v1/projets/',
            );
            if (!response.ok) {
                throw new Error('Erreur lors de la récupération des projets');
            }
            const projetResult = await response.json();

            /**
             * Traduction des données de projet.
             */

            const projetResultTranslated = projetResult.map((projet) => ({
                ...projet,
                name: projet.name[i18n.language],
                description: projet.description[i18n.language],
                category: projet.category[i18n.language],
            }));

            setProjetsData(projetResultTranslated);
        } catch (error) {
            console.error('Error refreshing projects:', error);
        }
    };

    /**
     * Bascule entre les thèmes clair et sombre.
     */

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    /**
     * Utilise l'API Fetch pour récupérer les données utilisateur, de projet et d'expérience.
     */

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

                /**
                 * Traduction des données utilisateur.
                 */
                const userResultTranslated = userResult.map((user) => ({
                    ...user,
                    profession: user.profession[i18n.language],
                    pays: user.pays[i18n.language],
                }));

                /**
                 * Traduction des données de projet.
                 */
                const projetResultTranslated = projetResult.map((projet) => ({
                    ...projet,
                    name: projet.name[i18n.language],
                    description: projet.description[i18n.language],
                    category: projet.category[i18n.language],
                }));

                /**
                 * Traduction des données d'expérience.
                 */
                const experienceResultTranslated = experienceResult.map((experience) => ({
                    ...experience,
                    title: experience.title[i18n.language],
                    school: experience.school[i18n.language],
                    location: experience.location[i18n.language],
                    description: experience.description[i18n.language],
                    diplome: experience.diplome[i18n.language],
                }));

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

    /**
     * Les valeurs de contexte pour le contexte d'authentification.
     */
    const authContextValue = {
        isLoggedIn,
        setIsLoggedIn,
        token,
        setToken,
    };

    return (
        <UserContext.Provider value={userData}>
            <ProjectContext.Provider
                value={{
                    projets: projetsData,
                    deleteProjets,
                    refreshProjects,
                }}
            >
                <ExperienceContext.Provider value={experiencesData}>
                    <AuthContext.Provider value={authContextValue}>
                        <ThemeContext.Provider value={{ theme, toggleTheme }}>
                            {children}
                        </ThemeContext.Provider>
                    </AuthContext.Provider>
                </ExperienceContext.Provider>
            </ProjectContext.Provider>
        </UserContext.Provider>
    );
};

DataProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
