import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import AppNavigator from './navigation/AppNavigator';

const App = () => {
    return (
        <SafeAreaProvider>
            <StatusBar style='auto' />
            <IconRegistry icons={EvaIconsPack} />
            <ApplicationProvider {...eva} theme={eva.light}>
                <AppNavigator />
            </ApplicationProvider>
        </SafeAreaProvider>
    );
};

export default App;
