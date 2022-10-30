import * as React from 'react'
import { StyleSheet, SafeAreaView, View, Text, Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ClimbingTabScreen from './ClimbingTabs/ClimbingTabScreen';

// function CTabScreen() {
//     return (
//         <View>
//             <HorizontalScrollView
//                 sectionName="Start a Climbing Challenge"
//                 data1="Endurance Challenge"
//                 data2="Strength Challenge"
//                 data3="Speed Challenge"
//             />
//             <HorizontalScrollView
//                 sectionName="Start a Climbing Workout"
//                 data1="Full Body Workout"
//                 data2="Arms and Back Workout"
//                 data3="Legs and Core Workout"
//             />
//         </View>
//     );
// }

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
            <Tab.Screen name="Climbing" component={ClimbingTabScreen} />
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