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

function BottomNav(){
    return(
        <tab.Navigator
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    let rn = route.name;
                    if(rn === homeName){
                        iconName = focused ? 'home' : 'home-outline';
                    } else if(rn === climbingName){
                        iconName = focused ? 'barbell' : 'barbell-outline';
                    } else if(rn === communityName){
                        iconName = focused ? 'people' : 'people-outline';
                    } else if(rn === profileName){
                        iconName = focused ? 'person' : 'person-outline';
                    }
                    return <IonIcons name={iconName} size={size} color={color} />
                },
            })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            }}
        >
            <tab.Screen 
                name={homeName} 
                component={HomeScreen}
                options={{ 
                    headerRight:() =>(
                        <HeaderOptions/>
                    )
                }} />
            <tab.Screen name={climbingName} component={ClimbingScreen} />
            <tab.Screen name={communityName} component={CommunityScreen} />
            <tab.Screen name={profileName} component={ProfileScreen} />
        </tab.Navigator>
    )
}

const tab= createBottomTabNavigator();

const stack = createNativeStackNavigator();

export default function BottomNavBar(){
    return(
        <NavigationContainer>
            <BottomNav/>
            <stack.Screen name={gymName} component={GymScreen} />
            <stack.Screen name={settingsName} component={SettingsScreen} />
        </NavigationContainer>
    

    )
}