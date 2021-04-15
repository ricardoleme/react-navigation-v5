import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Sobre from '../screens/Sobre'
import Tabs from './Tabs'

const Stack = createStackNavigator()

export default function Navigation(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Tabs">
        <Stack.Screen 
          name="Home" 
          component={Tabs} 
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