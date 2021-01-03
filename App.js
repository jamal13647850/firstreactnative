import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View,Button,TextInput ,ScrollView, FlatList} from 'react-native';

export default function App() {
  const [firstName,setFirstName]=useState('جمال');
  const [age,setAge]=useState();
  const [masters,setMasters]=useState([
    {id:1,fullname:"استاد صفوی"},
    {id:2,fullname:"استاد جمشیدی"},
    {id:3,fullname:"استاد حیدری"},
    {id:4,fullname:"استاد بنهری"},
    {id:5,fullname:"استاد امیری"},
    {id:6,fullname:"استاد پهلوان"},
    {id:7,fullname:"استاد بهاری"},
    {id:8,fullname:"استاد صدفی"}
  ]);
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
      <View style={{margin:30,backgroundColor:'orange',borderRadius:10,width:300}}>
        <Text>سن: {age}</Text>
      </View>
      <Text>
        آقا چند سالته:
      </Text>
      <TextInput style={styles.textinput} keyboardType="numeric" onChangeText={value =>setAge(value)}/>
      
      <FlatList keyExtractor={item => item.id.toString()} data={masters} renderItem={({item:master})=>(
        <Text style={styles.card}>
          {master.fullname} 
        </Text>
      )}/>
      {/* <ScrollView>
        {masters.map(master=>{
          return (
            <View key={master.id}>
              
              <Text style={styles.card}>
                {master.fullname} 
              </Text>
            </View>
          )
        })}
      </ScrollView> */}
      
      
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
  },
  textinput:{
    borderWidth:1,
    borderColor:"lightgrey",
    borderRadius:10,
    padding:15,
    margin:10,
    width: 250,
    textAlign:"center",
    fontSize:15,
  },
  card:{
    backgroundColor: 'green',
    width: 300,
    padding:5,
    margin:20,
  }
});
