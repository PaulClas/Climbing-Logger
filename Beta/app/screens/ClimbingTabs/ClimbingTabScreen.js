import * as React from 'react'
import { StyleSheet, SafeAreaView, View, Text, Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


export default function ClimbingTabScreen() {
    return (
        <View>
            <Text style={{ fontSize: 18, fontWeight: '600', paddingHorizontal: 20 }}>New climbing session</Text>
            <Text style={{ fontSize: 18, fontWeight: '600', paddingHorizontal: 20 }}>Gym</Text>
            <Text style={{ fontSize: 18, fontWeight: '600', paddingHorizontal: 20 }}>Partner</Text>
            <Text style={{ fontSize: 18, fontWeight: '600', paddingHorizontal: 20 }}>Climbing Type</Text>
        </View>
    );
}