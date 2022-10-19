import * as React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import CardTEST from '../Card/card';

export default function HorizontalScrollView() {
    return(
        <ScrollView>
            <View style={{ flex: 1, paddingTop: 20 }}>
                <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>Start a Climbing Challenge</Text>
            </View>
            <View style={{ height: 130, marginTop: 20 }}>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    <CardTEST 
                        name="Endurance Challenge"
                    />
                    <CardTEST 
                        name="Strength Challenge"
                    />
                    <CardTEST 
                        name="Speed Challenge"
                    />
                </ScrollView>
            </View>
        </ScrollView> 
    )
}
