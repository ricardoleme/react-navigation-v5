import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from '../screens/Home'
import Sobre from '../screens/Sobre'

const Stack = createStackNavigator()

export default function Navigation(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{
            title: 'iComida',
            headerStyle: {backgroundColor: '#002984'},
            headerTintColor: '#FFFFFF'
          }}
          />
        <Stack.Screen name="Sobre" component={Sobre} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}