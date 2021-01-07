import React from 'react';
import {StyleSheet,Text,View,Button} from 'react-native';



export default function About({navigation}){
    
    return(
        <View>
            <Button title="برگرد به عقب" onPress={()=>navigation.goBack()} />
        </View>
    )
}