import * as React from 'react'
import { StyleSheet, SafeAreaView, View, Text, Button } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ProfileTabScreen } from './ProfileTabs/ProfileTabScreen';
import { ProgressTabScreen } from './ProfileTabs/ProgressTabScreen';
import { LogTabScreen } from './ProfileTabs/LogTabScreen';

const Tab = createMaterialTopTabNavigator();

function ProfileTabs(){
    return (
        <Tab.Navigator
            initialRouteName="Feed"
            swipeEnabled={false}
            screenOptions={{
                tabBarActiveTintColor: 'black',
                tabBarLabelStyle: { fontSize: 12 },
                swipeEnabled:false
        }}>
            <Tab.Screen name="Profile" component={ProfileTabScreen} />
            <Tab.Screen name="Progress" component={ProgressTabScreen} />
            <Tab.Screen name="Log" component={LogTabScreen} />
        </Tab.Navigator>
    )
}

export default function ProfileScreen({navigation}) {
    return(
        <ProfileTabs/>
    )
}