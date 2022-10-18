import * as React from 'react'
import { StyleSheet, SafeAreaView, View, Text, Button } from 'react-native'

export default function CommunityScreen({navigation}) {
    return(
        <View style={{flex:1, alignItems:'center', justifyContent: 'center'}}>
            <Text
                onPress={() =>navigation.navigate('Home')} 
                style={{fontSize: 26, fontWeight: 'bold'}}>Community Screen</Text>
        </View>
    )
}