import { View, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Ingredients from './Screens/Ingredients'; 
import Nutritions from './Screens/Nutritions';
import Splash from './Screens/Splash';

const Stack = createStackNavigator();

export default function Layout() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Splash' component={Splash} options={{
          headerShown:false
        }}/>
        <Stack.Screen name='Ingredients' component={Ingredients} options={{
          headerLeft:false,
          headerTintColor:"white",
          headerStyle:{
            backgroundColor:"#6ACC00"
          }
        }}/>
        <Stack.Screen name='Nutritions' component={Nutritions} options={{
          headerStyle:{
            backgroundColor:"#6ACC00"
          },
          headerTintColor:"white"
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}