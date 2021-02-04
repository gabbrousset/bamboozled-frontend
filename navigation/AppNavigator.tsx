import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen, { TitleComponent } from '../screens/HomeScreen';
import JoinGameScreen from '../screens/JoinGameScreen';
import GamesCatalogueScreen from '../screens/GamesCatalogueScreen';

export type MainStackParamList = {
    Home: undefined;
    JoinGame: undefined;
    GamesCatalogue: undefined;
};

const { Navigator, Screen } = createStackNavigator<MainStackParamList>();

const MainNavigator = () => (
    <Navigator initialRouteName='Home' headerMode={'none'}>
        <Screen name='Home' component={HomeScreen} />
        <Screen name='JoinGame' component={JoinGameScreen} />
        <Screen name='GamesCatalogue' component={GamesCatalogueScreen} />
    </Navigator>
);

const AppNavigator = () => (
    <NavigationContainer>
        <MainNavigator />
    </NavigationContainer>
);
export default AppNavigator;
