import React, { useState, useContext } from 'react';
import { AppRegistry } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppearanceProvider } from 'react-native-appearance';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import ThemeContext, { ThemeContextProvider } from './theme/ThemeContext';
import AppNavigator from './navigation/AppNavigator';

const AppWithTheme = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <>
            <StatusBar style={theme === 'dark' ? 'light' : 'dark'} />
            <ApplicationProvider {...eva} theme={eva[theme]}>
                <AppNavigator />
            </ApplicationProvider>
        </>
    );
};

const App = () => (
    <SafeAreaProvider>
        <IconRegistry icons={EvaIconsPack} />
        <AppearanceProvider>
            <ThemeContextProvider>
                <AppWithTheme />
            </ThemeContextProvider>
        </AppearanceProvider>
    </SafeAreaProvider>
);

AppRegistry.registerComponent('bamboozled', () => App);

export default App;
