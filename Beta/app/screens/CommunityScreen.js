import * as React from 'react'
import { StyleSheet, SafeAreaView, View, Text, Button } from 'react-native'
import { ChatTabScreen } from './CommunityTabs/ChatTabScreen';
import { CommunityTabScreen } from './CommunityTabs/CommunityTabScreen';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ContactsTabScreen } from './CommunityTabs/ContactsTabScreen';


const Tab = createMaterialTopTabNavigator();

function CommunityTabs(){
    return (
        <Tab.Navigator
            initialRouteName="Feed"
            swipeEnabled={false}
            screenOptions={{
                tabBarActiveTintColor: 'black',
                tabBarLabelStyle: { fontSize: 12 },
                swipeEnabled:false
        }}>
            <Tab.Screen name="Chat" component={ChatTabScreen} />
            <Tab.Screen name="Community" component={CommunityTabScreen} />
            <Tab.Screen name="Contacts" component={ContactsTabScreen} />
        </Tab.Navigator>
    )
}

export default function CommunityScreen({navigation}) {
    return(
        <CommunityTabs/>
    )
}