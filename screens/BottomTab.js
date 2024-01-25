import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from './HomePage';

const Tab = createBottomTabNavigator();


const BottomTab = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomePage} />
        </Tab.Navigator>
    );
}

export default BottomTab;
