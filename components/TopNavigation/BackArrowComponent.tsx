import React, { ReactElement, useContext } from 'react';
import {
    Divider,
    Layout,
    Text,
    Icon,
    TopNavigationAction,
} from '@ui-kitten/components';
import { StyleSheet } from 'react-native';

interface Props {
    onPress: () => void;
}

const BackArrowComponent: React.FC<Props> = ({ onPress }) => {
    return (
        <TopNavigationAction
            icon={(props) => <Icon {...props} name='arrow-back' />}
            onPress={onPress}
        />
    );
};

export default BackArrowComponent;
