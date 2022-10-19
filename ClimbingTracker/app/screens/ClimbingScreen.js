import * as React from 'react'
import { StyleSheet, SafeAreaView, View, Text, Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HorizontalScrollView from '../components/HorizontalScrollView/horizontalScrollView';

function ClimbTabScreen() {
    return (
        <HorizontalScrollView />
    );
}

function ChallengesTabScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Climbing!</Text>
        </View>
    );
}

function WorkoutTabScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Climbing!</Text>
        </View>
    );
}

const Tab = createMaterialTopTabNavigator();

function ClimbingTabs(){
    return (
        <Tab.Navigator
            initialRouteName="Feed"
            swipeEnabled={false}
            screenOptions={{
                tabBarActiveTintColor: 'black',
                tabBarLabelStyle: { fontSize: 12 },
                swipeEnabled:false
        }}>
            <Tab.Screen name="Climbing" component={ClimbTabScreen} />
            <Tab.Screen name="Challenges" component={ChallengesTabScreen} />
            <Tab.Screen name="Workout" component={WorkoutTabScreen} />
        </Tab.Navigator>
    )

}

export default function ClimbingScreen({navigation}) {
    return(
        <ClimbingTabs />
    )
}