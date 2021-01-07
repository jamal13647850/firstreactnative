import React from 'react';
import {StyleSheet,Text,View,Button} from 'react-native';



export default function Details({navigation,route}){
    const {id,text}=route.params;
    return(
        <View style={styles.container}>
            <Text>جزئیات</Text>
            <View style={styles.seperator}>
                <Text>{id}</Text>
                <Text>{text}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    seperator:{
        marginVertical:8,
    }

});