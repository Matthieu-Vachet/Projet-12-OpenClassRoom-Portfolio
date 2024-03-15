import React, { createContext, useEffect, useState } from 'react';
import { User, Project, Experiencetype, Auth, Theme, ProjectContextType } from '../../types/types';

import { useTranslation } from 'react-i18next';

export const UserContext = createContext<User | null>(null);
export const ProjectContext = createContext<ProjectContextType | null>(null);
export const ExperienceContext = createContext<Experiencetype[] | null>(null);
export const AuthContext = createContext<Auth | null>(null);
export const ThemeContext = createContext<Theme | null>(null);

interface DataProviderProps {
    children: React.ReactNode;
}

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
    const { i18n } = useTranslation();
    const [userData, setUserData] = useState<User | null>(null);
    const [projetsData, setProjetsData] = useState<Project[] | null>(null);
    const [experiencesData, setExperiencesData] = useState<Experiencetype[] | null>(null);
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [token, setToken] = useState<string | null>(null);
    const [theme, setTheme] = useState<string>('dark');

    /**
     * Supprime un projet de la liste des projets.
     * @param {string} id - L'identifiant du projet à supprimer.
     */

    const deleteProjets = (id: string) => {
        if (projetsData) {
            setProjetsData(projetsData.filter((projet: any) => projet._id !== id));
        }
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

            const projetResultTranslated = projetResult.map((projet: any) => ({
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
                const userResultTranslated = userResult.map((user: any) => ({
                    ...user,
                    profession: user.profession[i18n.language],
                    pays: user.pays[i18n.language],
                }));

                /**
                 * Traduction des données de projet.
                 */
                const projetResultTranslated = projetResult.map((projet: any) => ({
                    ...projet,
                    name: projet.name[i18n.language],
                    description: projet.description[i18n.language],
                    category: projet.category[i18n.language],
                }));

                /**
                 * Traduction des données d'expérience.
                 */
                const experienceResultTranslated = experienceResult.map((experience: any) => ({
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
                    projetsData,
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

export default DataProvider;
