import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useColorScheme } from 'react-native-appearance';

interface ContextType {
    theme: themeNameType;
    changeTheme: (value: userThemeNameType) => void;
}
type themeNameType = 'light' | 'dark';
type userThemeNameType = themeNameType | 'auto';

const defaultValues: ContextType = {
    theme: 'light',
    changeTheme: () => null,
};
const ThemeContext = createContext<ContextType>(defaultValues);
const { setItem, getItem } = AsyncStorage;

export const ThemeContextProvider = ({ children }: { children: object }) => {
    const [theme, setTheme] = useState<themeNameType>('light');

    const automaticTheme = useColorScheme();

    useEffect(() => {
        // Retrieve the prefered theme by the user, stored in the async storage
        const getUserTheme = async () => {
            const userTheme: userThemeNameType | null = (await getItem(
                'theme'
            )) as userThemeNameType | null;
            if (userTheme) {
                changeTheme(userTheme);
            } else {
                changeTheme('auto');
            }
        };

        getUserTheme();
    }, [automaticTheme]);

    const changeTheme = (value: userThemeNameType): void => {
        // Store the preference in storage
        setItem('theme', value);
        if (value === 'auto') {
            setTheme(automaticTheme === 'dark' ? 'dark' : 'light');
        } else {
            setTheme(value);
        }
    };

    return (
        <ThemeContext.Provider value={{ theme: 'light', changeTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeContext;
