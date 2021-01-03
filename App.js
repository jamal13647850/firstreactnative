import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';

export default function App() {
  const [firstName,setFirstName]=useState('جمال');

  const handleNameChange = () =>{
    setFirstName("کمال");
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.jamtext}>Hello ! Open up App.js to start working on your app!</Text>
      </View>
      <Text>این یک متن تست هست</Text>
      <View>
        <Text>سلام {firstName}</Text>
        <Button title="کلیک کن" onPress={handleNameChange}/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{
    backgroundColor: 'purple',
    padding: 20
  },
  jamtext:{
    color: 'white',
    fontWeight: 'bold'
  }
});
