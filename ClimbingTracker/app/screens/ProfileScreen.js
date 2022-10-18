import * as React from 'react'
import { StyleSheet, SafeAreaView, View, Text, Button } from 'react-native'

export default function ProfileScreen({navigation}) {
    return(
        <View style={{flex:1, alignItems:'center', justifyContent: 'center'}}>
            <Text style={{fontSize: 26, fontWeight: 'bold'}}>Profile Screen</Text>
        </View>
    )
}