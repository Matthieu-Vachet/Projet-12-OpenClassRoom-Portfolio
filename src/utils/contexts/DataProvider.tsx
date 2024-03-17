import React, { createContext, useState } from 'react';
import { Theme } from '../../types/types';

export const ThemeContext = createContext<Theme | null>(null);

interface DataProviderProps {
    children: React.ReactNode;
}

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<string>('dark');

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

export default DataProvider;
