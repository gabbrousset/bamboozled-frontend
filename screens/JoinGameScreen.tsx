import React, { useContext, useRef, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
    useStyleSheet,
    ButtonGroup,
    Button,
    Layout,
    Text,
    StyleService,
} from '@ui-kitten/components';
import { Pressable, TextInput } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import ThemeContext from '../theme/ThemeContext';
import { MainStackParamList } from '../navigation/AppNavigator';
import TitleComponent from '../components/TitleComponent';
import BackArrowComponent from '../components/TopNavigation/BackArrowComponent';

const CODE_LENGTH = 6;

type Props = StackScreenProps<MainStackParamList, 'JoinGame'>;

const JoinGameScreen: React.FC<Props> = ({ navigation }: Props) => {
    const styles = useStyleSheet(themedStyles);

    const [code, setCode] = useState<string>('');

    const ref = useRef<TextInput>(null);

    const handleOnPress = () => {
        ref?.current?.focus();
    };

    const inputToIndividual = (
        input: string,
        length: number
    ): JSX.Element[] => {
        const res: JSX.Element[] = [];
        for (let i = 0; i < length; i++) {
            res.push(
                <Layout key={i} level={'4'} style={styles.codeCharContainer}>
                    <Text style={styles.codeChar}>{input[i] || ''}</Text>
                </Layout>
            );
        }
        return res;
    };

    return (
        <Layout style={styles.container}>
            <SafeAreaView style={styles.container}>
                <TitleComponent
                    title='Join a Game'
                    left={
                        <BackArrowComponent
                            onPress={() => navigation.navigate('Home')}
                        />
                    }
                />
                <Text category={'h5'} style={styles.textContainer}>
                    Awkwardly stare at whoever in your group tapped "Start a
                    Game" until they tell you the secret code. Then enter it
                    here:
                </Text>
                <Pressable onPress={handleOnPress} style={styles.codeContainer}>
                    {inputToIndividual(code, CODE_LENGTH)}
                    <TextInput
                        ref={ref}
                        value={code}
                        onChangeText={setCode}
                        maxLength={CODE_LENGTH}
                        returnKeyType={'done'}
                        style={styles.hiddenTextInput}
                        autoFocus={true}
                        autoCorrect={false}
                        autoCompleteType={'off'}
                        keyboardType={'number-pad'}
                    />
                </Pressable>
                <Button disabled={code.length !== CODE_LENGTH} size={'giant'}>
                    Submit
                </Button>
            </SafeAreaView>
        </Layout>
    );
};

const themedStyles = StyleService.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
    },
    textContainer: {
        paddingHorizontal: 20,
        textAlign: 'center',
    },
    codeContainer: {
        paddingVertical: 20,
        flexDirection: 'row',
    },
    codeCharContainer: {
        // borderColor: 'color-basic-400',
        // borderWidth: 2,
        borderRadius: 4,
        margin: 4,
        padding: 16,
    },
    codeChar: {
        textAlign: 'center',
        width: 9,
    },
    hiddenTextInput: {
        height: 0,
        width: 0,
        opacity: 0,
    },
});

export default JoinGameScreen;
