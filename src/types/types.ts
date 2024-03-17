export interface ExperiencesTypes {
    id: number;
    title: string;
    school: string;
    location: string;
    description: string;
    diplome: string;
    startDate: string;
    endDate: string;
    technologies: string[];
    link: string;
    img: string;
}

export interface ProjectsTypes {
    id: string;
    name: string;
    description: string;
    category: string;
    imageUrl: string;
    githubLink: string;
    demoLink: string;
    technologies: string[];
}

export interface UserType {
    id: number;
    profession: string;
    pays: string;
    name: string;
    lastname: string;
    age: string;
    address: string;
    cp: string;
    city: string;
    number: string;
    email: string;
}

export interface Theme {
    theme: string;
    toggleTheme: () => void;
}
