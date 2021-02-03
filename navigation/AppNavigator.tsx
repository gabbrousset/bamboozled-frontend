import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';

const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = () => (
    <Navigator initialRouteName='Home' headerMode='none'>
        <Screen name='Home' component={HomeScreen} />
    </Navigator>
);

const AppNavigator = () => (
    <NavigationContainer>
        <HomeNavigator />
    </NavigationContainer>
);
export default AppNavigator;
