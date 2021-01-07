import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import Playground from "../components/Playground"
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { styles } from '../components/styles/globalStyle'




const getFonts = () => {
  return Font.loadAsync({
    //yekan:require('./assets/fonts/byekan.ttf')
  })
}

export default function Home(props) {
  const [firstName, setFirstName] = useState('جمال');
  const [age, setAge] = useState();
  const [masters, setMasters] = useState([
    { id: 1, fullname: "استاد صفوی" },
    { id: 2, fullname: "استاد جمشیدی" },
    { id: 3, fullname: "استاد حیدری" },
    { id: 4, fullname: "استاد بنهری" },
    { id: 5, fullname: "استاد امیری" },
    { id: 6, fullname: "استاد پهلوان" },
    { id: 7, fullname: "استاد بهاری" },
    { id: 8, fullname: "استاد صدفی" }
  ]);

  const [fontLoading, setFontLoading] = useState(false);

  const deleteItem = id => {
    //const filtered = masters.filter(master=>master.id!==id);
    //setMasters(filtered);
    setMasters(prevState => prevState.filter(master => master.id !== id))
  }

  const handleNameChange = () => {
    setFirstName("کمال");
  }


  const pressHandler=() => {
      props.navigation.navigate("ABOUT");
  }
  // if(fontLoading){
  //   return (
  //     <View style={styles.container}>
  //       <View style={styles.header}>
  //         <Text style={styles.jamtext}>Hello ! Open up App.js to start working on your app!</Text>
  //       </View>
  //       <Text style={styles.testText}>این یک متن تست هست</Text>
  //       <Text >این یک متن تست هست</Text>
  //       <View>
  //         <Text>سلام {firstName}</Text>
  //         <Button title="کلیک کن" onPress={handleNameChange}/>
  //       </View>
  //       <View style={{margin:30,backgroundColor:'orange',borderRadius:10,width:300}}>
  //         <Text>سن: {age}</Text>
  //       </View>
  //       <Text>
  //         آقا چند سالته:
  //       </Text>
  //       <TextInput style={styles.textinput} keyboardType="numeric" onChangeText={value =>setAge(value)}/>

  //       <FlatList keyExtractor={item => item.id.toString()} data={masters} renderItem={({item:master})=>(
  //         <TouchableOpacity onPress={()=>{deleteItem(master.id)}}>
  //           <Text style={styles.card}>
  //             {master.fullname} 
  //           </Text>
  //         </TouchableOpacity>

  //       )}/>

  //       {/* <ScrollView>
  //         {masters.map(master=>{
  //           return (
  //             <View key={master.id}>

  //               <Text style={styles.card}>
  //                 {master.fullname} 
  //               </Text>
  //             </View>
  //           )
  //         })}
  //       </ScrollView> */}

  //       <Playground></Playground>
  //       <StatusBar style="auto" />
  //     </View>
  //   );
  // }
  // else{
  //   return(
  //     <AppLoading 
  //       startAsync={getFonts}
  //       onFinish={()=>setFontLoading(true)}
  //     />
  //   )
  // }


  return (
    
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.jamtext}>Hello ! Open up App.js to start working on your app!</Text>
        </View>
        <Text >این یک متن تست هست</Text>
        <Text >این یک متن تست هست</Text>
        <View>
          <Text>سلام {firstName}</Text>
          <Button title="کلیک کن" onPress={handleNameChange} />
          <Button title="برو به درباره ما" onPress={pressHandler} />
        </View>
        <View style={{ margin: 30, backgroundColor: 'orange', borderRadius: 10, width: 300 }}>
          <Text>سن: {age}</Text>
        </View>
        <Text>
          آقا چند سالته:
        </Text>
        <TextInput style={styles.textinput} keyboardType="numeric" onChangeText={value => setAge(value)} />

        <FlatList keyExtractor={item => item.id.toString()} data={masters} renderItem={({ item: master }) => (
          <TouchableOpacity onPress={() => { deleteItem(master.id) }}>
            <Text style={styles.card}>
              {master.fullname}
            </Text>
          </TouchableOpacity>

        )} />

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

        <Playground></Playground>
        <StatusBar style="auto" />
      </View>


  );

}
