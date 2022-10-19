import * as React from 'react';
import { View, Text, Image } from 'react-native';
import {NavigationContainer, TouchableOpacity, useNavigation} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IonIcons from 'react-native-vector-icons/Ionicons';
//Screens
import HomeScreen from '../screens/HomeScreen';
import ClimbingScreen from '../screens/ClimbingScreen';  
import CommunityScreen from '../screens/CommunityScreen';
import ProfileScreen from '../screens/ProfileScreen';
import GymScreen from '../screens/MygymScreen';
import SettingsScreen from '../screens/SettingsScreen';

//Screen Names
const homeName = "Home";
const climbingName = "Climbing";
const communityName = "Community";
const profileName = "Profile";
const gymName = "My Gym";
const settingsName= "Settings";

function HeaderOptions() {
    const navigation = useNavigation();
    return (
            <View style={{
                flexDirection: 'row',
            }}>
                <IonIcons 
                    name="wallet-outline" 
                    size={30} 
                    style={{padding:10}}
                    onPress={() => navigation.navigate(gymName)}/>
                <IonIcons 
                    name="settings-outline" 
                    size={30} 
                    style={{padding:10}}
                    onPress={() => navigation.navigate(settingsName)}/>
            </View>
    );
}

function Nav(){
    return(
        <stack.Navigator
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    let rn = route.name;
                    if(rn === gymName){
                        iconName = focused ? 'wallet' : 'wallet-outline';
                    } else if(rn === climbingName){
                        iconName = focused ? 'settings' : 'settings-outline';
                    }
                    return <IonIcons name={iconName} size={size} color={color} />
                },
            })}
        >
            <stack.Screen name={gymName} component={GymScreen} />
            <stack.Screen name={settingsName} component={SettingsScreen} />
        </stack.Navigator>
    )
}

const tab= createBottomTabNavigator();

const stack = createNativeStackNavigator();

export default function BottomNavBar(){
    return(
        <NavigationContainer>
            <tab.Navigator
                initialRouteName={homeName}
                screenOptions={({route}) => ({
                    tabBarActiveTintColor: '#e91e63',
                    tabBarInactiveTintColor: 'black',
                    tabBarLabelStyle: {fontSize: 10, paddingBottom: 10},
                    tabBarStyle: {height: 70, padding:10},
                    tabBarIcon: ({focused, color, size}) => {
                        let iconName;
                        let rn = route.name;
                        if(rn === homeName){
                            iconName = focused ? 'home' : 'home-outline';
                        } else if(rn === climbingName){
                            iconName = focused ? 'fitness' : 'fitness-outline';
                        } else if(rn === communityName){
                            iconName = focused ? 'chatbubbles' : 'chatbubbles-outline';
                        } else if(rn === profileName){
                            iconName = focused ? 'person' : 'person-outline';
                        }
                        return <IonIcons name={iconName} size={size} color={color} />
                    },
                })}>
                <tab.Screen 
                    name={homeName} 
                    component={HomeScreen}
                    options={{ 
                        headerRight:() =>(
                            <HeaderOptions navigation/>
                        )
                    }}
                />
                <tab.Screen 
                    name={climbingName} 
                    component={ClimbingScreen}  
                    options={{ 
                        headerRight:() =>(
                            <HeaderOptions navigation/>
                        )
                    }}
                />
                <tab.Screen 
                    name={communityName} 
                    component={CommunityScreen}
                    options={{ 
                        headerRight:() =>(
                            <HeaderOptions navigation/>
                        )
                    }} 
                />
                <tab.Screen 
                    name={profileName} 
                    component={ProfileScreen}
                    options={{ 
                        headerRight:() =>(
                            <HeaderOptions navigation/>
                        )
                    }} 
                />
                <stack.Screen name={gymName} component={GymScreen} />
                <stack.Screen name={settingsName} component={SettingsScreen} />
            </tab.Navigator>
        </NavigationContainer>
    

    )
}