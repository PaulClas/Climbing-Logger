
import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";

const Rectangle = () => {
    return < View style={styles.rectangle}/>
}

function CardTEST(props) {
    return (
        <View style={{ height: 130, width: 130, marginLeft: 20, borderWidth: 0.5, borderColor: '#dddddd' }}>
            <View style={{ flex: 2 }}>
                <Rectangle/>
            </View>
            <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                <Text>{props.name}</Text>
            </View>
        </View>
    );
}
export default CardTEST;

const styles = StyleSheet.create({
    rectangle: {
        flex: 1,
        width:null,
        height:null,
        backgroundColor: 'blue',
        resizeMode:'cover',
    }
});