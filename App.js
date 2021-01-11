import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './screens/home'
import About from './screens/about'
import Details from './screens/details'
import { Button,Image,View } from 'react-native'
import {createDrawerNavigator} from '@react-navigation/drawer'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Ionicons} from '@expo/vector-icons'

const Stack = createStackNavigator();

const LogoTitle=() => {
  return(
    <Image style={{width:50,height:50}} source={require("./assets/icon.png")}/>
  )
}

const HomeScreen = ({navigation})=>{
  return(
    <View style={{flex:1,justifyContent: 'center'}}>
      <Button title="ورود به صفحه اطلاعات" onPress={()=>navigation.navigate("InformationScreen")}/>
      <Button title="Open Drawer" onPress={()=>navigation.openDrawer()}/>
      <Button title="Close Drawer" onPress={()=>navigation.closeDrawer()}/>
      <Button title="Toggle Drawer" onPress={()=>navigation.toggleDrawer()}/>
    </View>
  );

 };

const InformationScreen = ({navigation})=>{
  return(
    <View style={{flex:1,justifyContent: 'center'}}>
      <Button title="ورود به صفحه خانه" onPress={()=>navigation.navigate("HomeScreen")}/>
    
    </View>
  );

 };

const Drawer=createDrawerNavigator();

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route})=>({
          tabBarIcon:({focused,color,size})=>{ 
            let iconName;
            if(route.name==='HomeScreen'){
              iconName=focused?"ios-information-circle":"ios-information-circle-outline";
            }
            else if(route.name==="InformationScreen"){
              iconName=focused?"ios-list-box":"ios-list";
            }

            return (
              <Ionicons name={iconName} size={size} color={color}/>
            )
          }
        })}
        tabBarOptions={{
          activeTintColor:"tomato",
          inactiveTintColor:"gray"
        }}
      >
        <Tab.Screen name="HomeScreen" component={HomeScreen}/>
        <Tab.Screen name="InformationScreen" component={InformationScreen}
        options={{
          title:"اطلاعات",
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
    // <NavigationContainer>
    //   <Drawer.Navigator 
    //   initialRouteName="HomeScreen" 
    //   drawerPosition="right"
    //   drawerStyle={{
    //     backgroundColor:"orange",
    //     width:250
    //   }}
    //   >
    //     <Drawer.Screen name="HomeScreen" component={HomeScreen}/>
    //     <Drawer.Screen 
    //     name="InformationScreen" 
    //     component={InformationScreen}
    //     options={{
    //       title:"اطلاعات",
    //     }}/>
    //   </Drawer.Navigator>
    // </NavigationContainer>
    //  <NavigationContainer>
    //   <Stack.Navigator
    //     screenOptions={{
    //       headerTitleAlign: "center",
    //       headerTintColor: "red",
    //       headerStyle: {
    //         backgroundColor: "orange"
    //       },
    //       headerTitleStyle: {
    //         fontWeight: "bold",
    //       }
    //     }}
    //   >
    //     <Stack.Screen name="HOME" component={Home}
    //       options={{
    //         title: "خانه",
    //         headerTitle:(props)=><LogoTitle {...props}/>,
    //         headerRight:()=>(
    //           <Button title="test" color="green" onPress={()=>alert("salam")}></Button>
    //         )
    //       }}
    //     />
    //     <Stack.Screen name="ABOUT" component={About} />
    //     <Stack.Screen name="DETAILS" component={Details}
    //       initialParams={{ id: '3', text: 'خدانگهدار' }}
    //     />
    //   </Stack.Navigator>
    // </NavigationContainer> 

    

  );

}
