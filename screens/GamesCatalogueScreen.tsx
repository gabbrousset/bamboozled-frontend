import React, { useContext } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ButtonGroup, Button, Layout, Text } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import ThemeContext from '../theme/ThemeContext';
import { MainStackParamList } from '../navigation/AppNavigator';
import TitleComponent from '../components/TitleComponent';
import BackArrowComponent from '../components/TopNavigation/BackArrowComponent';

type Props = StackScreenProps<MainStackParamList, 'GamesCatalogue'>;

const GamesCatalogueScreen: React.FC<Props> = ({ navigation }: Props) => {
    return (
        <Layout style={styles.container}>
            <SafeAreaView style={styles.container}>
                <TitleComponent
                    title='Games Catalogue'
                    left={
                        <BackArrowComponent
                            onPress={() => navigation.navigate('Home')}
                        />
                    }
                />
            </SafeAreaView>
        </Layout>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
    },
});

export default GamesCatalogueScreen;
