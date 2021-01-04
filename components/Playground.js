import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {MaterialIcons} from "@expo/vector-icons"


export default function Playground() {
    return (
        <View style={styles.container}> 
            <MaterialIcons name="delete" size={40} color="red"/> 
            <Text style={styles.textOne}>One</Text>
            <Text style={styles.textTwo}>Two</Text>
            <Text style={styles.textThree}>Three</Text>
            <Text style={styles.textFour}>Four</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingTop:40,
        backgroundColor:'grey',
        flexDirection:'row',
        justifyContent:'space-around'
    },
    textOne:{
        padding:10,
        backgroundColor:'orange',
    },
    textTwo:{
        padding:10,
        backgroundColor:'skyblue',
    },
    textThree:{
        padding:10,
        backgroundColor:'violet',
    },
    textFour:{
        padding:10,
        backgroundColor:'green',
    },

  });