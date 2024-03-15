export interface User {
    profession: {
        fr: string;
        en: string;
    };
    pays: {
        fr: string;
        en: string;
    };
    _id: string;
    name: string;
    lastname: string;
    age: number;
    adress: string;
    cp: number;
    city: string;
    number: string;
    email: string;
    password: string;
    __v: number;
}

export interface Project {
    name: {
        fr: string;
        en: string;
    };
    description: {
        fr: string;
        en: string;
    };
    category: {
        fr: string;
        en: string;
    };
    _id: string;
    imageUrl: string;
    githubLink: string;
    demoLink: string;
    technologies: string[];
}

export interface ProjectContextType {
    projetsData: Project[]; // Remplacez 'any' par le type réel de vos données de projets
    deleteProjets: (id: string) => void;
    refreshProjects: () => void;
}

export interface Experiencetype {
    title: {
        fr: string;
        en: string;
    };
    school: {
        fr: string;
        en: string;
    };
    location: {
        fr: string;
        en: string;
    };
    description: {
        fr: string;
        en: string;
    };
    diplome: {
        fr: string;
        en: string;
    };
    _id: string;
    startDate: string;
    endDate: string;
    technologies: string[];
    link: string;
    img: string;
    __v: string;
}

export interface Auth {
    isLoggedIn: boolean;
    token: string | null;
}

export interface Theme {
    theme: string;
    toggleTheme: () => void;
}
