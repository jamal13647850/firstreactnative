import React from 'react'
import { Text, View } from 'react-native'
import {MaterialIcons} from "@expo/vector-icons"
import {styles} from './styles/playgroundStyle'

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


