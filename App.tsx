import React from 'react';
import { StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import * as eva from '@eva-design/eva';
import {
    ApplicationProvider,
    IconRegistry,
    Layout,
    Text,
} from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

const App = () => {
    return (
        <>
            <StatusBar style='auto' />
            <IconRegistry icons={EvaIconsPack} />
            <ApplicationProvider {...eva} theme={eva.light}>
                <Layout style={styles.container}>
                    <Text category='h1'>Home</Text>
                </Layout>
            </ApplicationProvider>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default App;
