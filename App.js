import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './screens/home'
import About from './screens/about'
import Details from './screens/details'

const Stack = createStackNavigator();



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: "center",
          headerTintColor: "red",
          headerStyle: {
            backgroundColor: "orange"
          },
          headerTitleStyle: {
            fontWeight: "bold",
          }
        }}
      >
        <Stack.Screen name="HOME" component={Home}
          options={{
            title: "خانه",
          }}
        />
        <Stack.Screen name="ABOUT" component={About} />
        <Stack.Screen name="DETAILS" component={Details}
          initialParams={{ id: '3', text: 'خدانگهدار' }}
        />
      </Stack.Navigator>
    </NavigationContainer>

  );

}
