import React, { ReactElement, useContext } from 'react';
import {
    Divider,
    Layout,
    Text,
    TopNavigation,
    TopNavigationAction,
} from '@ui-kitten/components';
import { StyleSheet } from 'react-native';

interface Props {
    title: string | { name: string; category: string };
    left?: ReactElement;
    right?: ReactElement;
}

// Accepts a title string, or a title object with the category option.
// Optionally you can provide the left and / or right accessories.

const TitleComponent: React.FC<Props> = ({ title, left, right }: Props) => {
    const renderTitle = (): JSX.Element => {
        if (typeof title === 'string') {
            return <Text category={'h4'}>{title}</Text>;
        }
        return <Text category={title.category}>{title.name}</Text>;
    };

    return (
        <Layout style={styles.container}>
            <TopNavigation
                title={renderTitle}
                accessoryLeft={() => (left ? left : <></>)}
                accessoryRight={() => (right ? right : <></>)}
                alignment={'center'}
            />
            <Divider />
        </Layout>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginBottom: 20,
    },
});

export default TitleComponent;
