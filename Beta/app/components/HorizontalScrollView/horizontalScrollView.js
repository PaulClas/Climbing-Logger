import * as React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import CardTEST from '../Card/card';

export default function HorizontalScrollView(props) {
    return(
        <ScrollView>
            <View style={{ flex: 1, paddingTop: 20 }}>
                <Text style={{ fontSize: 18, fontWeight: '600', paddingHorizontal: 20 }}>{props.sectionName}</Text>
            </View>
            <View style={{ height: 130, marginTop: 20 }}>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    <CardTEST 
                        name={props.data1}
                    />
                    <CardTEST 
                        name={props.data2}
                    />
                    <CardTEST 
                        name={props.data3}
                    />
                </ScrollView>
            </View>
        </ScrollView> 
    )
}
