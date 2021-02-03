import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Layout, Text } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';

const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Home</Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default HomeScreen;
