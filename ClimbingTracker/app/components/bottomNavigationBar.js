import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import IonIcons from 'react-native-vector-icons/Ionicons';
//Screens
import HomeScreen from '../screens/HomeScreen';
import ClimbingScreen from '../screens/ClimbingScreen';  
import CommunityScreen from '../screens/CommunityScreen';
import ProfileScreen from '../screens/ProfileScreen';

//Screen Names
const homeName = "Home";
const climbingName = "Climbing";
const communityName = "Community";
const profileName = "Profile";

const tab= createBottomTabNavigator();

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
                <tab.Screen name={homeName} component={HomeScreen} />
                <tab.Screen name={climbingName} component={ClimbingScreen} />
                <tab.Screen name={communityName} component={CommunityScreen} />
                <tab.Screen name={profileName} component={ProfileScreen} />
            </tab.Navigator>
        </NavigationContainer>

    )
}