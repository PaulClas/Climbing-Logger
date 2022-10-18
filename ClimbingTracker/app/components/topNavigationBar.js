import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import IonIcons from 'react-native-vector-icons/Ionicons';
//Screens
import GymScreen from '../screens/MygymScreen';
import SettingsScreen from '../screens/SettingsScreen';
//Screen Names
const gymName = "My Gym";
const settingName= "Settings";

const Tab = createMaterialTopTabNavigator();

export default function TopNavBar() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({route}) => ({
            tabBarActiveTintColor: '#e91e63',
            tabBarInactiveTintColor: 'black',
            tabBarLabelStyle: {fontSize: 10, paddingBottom: 10},
            tabBarStyle: {height: 70, padding:10},
            tabBarIcon: ({focused, color, size}) => {
                let iconName;
                let rn = route.name;
                if(rn === gymName){
                    iconName = focused ? 'storefront' : 'storefront-outline';
                } else if(rn === settingName){
                    iconName = focused ? 'settings' : 'settings-outline';
                }
                return <IonIcons name={iconName} size={size} color={color} />
            },
        })}>
        <Tab.Screen name={gymName} component={GymScreen} />
        <Tab.Screen name={settingName} component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}