import * as React from 'react'
import { StyleSheet, SafeAreaView, View, Text, Button } from 'react-native'

export default function ClimbingScreen({navigation}) {
    return(
        <View style={{flex:1, alignItems:'center', justifyContent: 'center'}}>
            <Text
                onPress={() =>navigation.navigate('Home')} 
                style={{fontSize: 26, fontWeight: 'bold'}}>Climbing Screen</Text>
        </View>
    )
}