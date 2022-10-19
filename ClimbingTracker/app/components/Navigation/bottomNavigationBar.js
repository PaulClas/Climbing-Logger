import * as React from 'react';
import { View, Text, Image } from 'react-native';
import {NavigationContainer, TouchableOpacity, useNavigation} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IonIcons from 'react-native-vector-icons/Ionicons';
//Screens
import HomeScreen from '../../screens/HomeScreen';
import ClimbingScreen from '../../screens/ClimbingScreen';  
import CommunityScreen from '../../screens/CommunityScreen';
import ProfileScreen from '../../screens/ProfileScreen';
import GymScreen from '../../screens/MygymScreen';

//Screen Names
const homeName = "Home";
const climbingName = "Climbing";
const communityName = "Chat";
const profileName = "Profile";
const gymName = "Search";

const tab= createBottomTabNavigator();

export default function BottomNavBar(){
    return(
        <NavigationContainer>
            <tab.Navigator
                screenOptions={({route}) => ({
                    tabBarIcon: ({focused, color, size}) => {
                        let iconName;
                        let rn = route.name;
                        if(rn === homeName){
                            iconName = focused ? 'home' : 'home-outline';
                        } else if(rn === gymName){
                            iconName = focused ? 'search' : 'search-outline';
                        } else if(rn === climbingName){
                            iconName = focused ? 'play-circle' : 'play-circle-outline';
                            size=50;
                        } else if(rn === communityName){
                            iconName = focused ? 'chatbubbles' : 'chatbubbles-outline';
                        } else if(rn === profileName){
                            iconName = focused ? 'person' : 'person-outline';
                        }
                        return <IonIcons name={iconName} size={size} color={color} />
                    },
                    tabBarStyle: {height:80, backgroundColor: '#fff', borderTopWidth: 0, elevation: 0},
                    tabBarLabelStyle: {fontSize: 12, fontWeight: 'bold', marginBottom: 10},
                    activeTintColor: 'tomato',
                    inactiveTintColor: 'gray',
                })}
            >
                <tab.Screen name={homeName} component={HomeScreen} />
                <tab.Screen name={gymName} component={GymScreen} />
                <tab.Screen name={climbingName} component={ClimbingScreen} />
                <tab.Screen name={communityName} component={CommunityScreen} />
                <tab.Screen name={profileName} component={ProfileScreen} />
            </tab.Navigator>
        </NavigationContainer>
    

    )
}