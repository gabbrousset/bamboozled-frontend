import React, { useContext } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ButtonGroup, Button, Layout, Text } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';
import ThemeContext from '../theme/ThemeContext';

const HomeScreen = () => {
    const { theme, changeTheme } = useContext(ThemeContext);
    return (
        <Layout style={styles.container}>
            <SafeAreaView style={styles.container}>
                <Text>{theme}</Text>
                <ButtonGroup>
                    <Button onPress={() => changeTheme('auto')}>Auto</Button>
                    <Button onPress={() => changeTheme('light')}>Light</Button>
                    <Button onPress={() => changeTheme('dark')}>Dark</Button>
                </ButtonGroup>
            </SafeAreaView>
        </Layout>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default HomeScreen;
