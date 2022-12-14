import * as React from 'react';
import {NavigationContainer, TouchableOpacity, useNavigation} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import IonIcons from 'react-native-vector-icons/Ionicons';
//Screens
import HomeScreen from '../../screens/HomeScreen';
import ClimbingScreen from '../../screens/ClimbingScreen';  
import CommunityScreen from '../../screens/CommunityScreen';
import ProfileScreen from '../../screens/ProfileScreen';
import SearchScreen from '../../screens/SearchScreen';

//Screen Names
const homeName = "Home";
const climbingName = "Climbing";
const communityName = "Chat";
const profileName = "Profile";
const searchName = "Search";

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
                        } else if(rn === searchName){
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
                <tab.Screen name={searchName} component={SearchScreen} />
                <tab.Screen name={climbingName} component={ClimbingScreen} />
                <tab.Screen name={communityName} component={CommunityScreen} />
                <tab.Screen name={profileName} component={ProfileScreen} />
            </tab.Navigator>
        </NavigationContainer>
    

    )
}