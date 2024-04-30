/* IMPORTS BASE */
import * as React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

/* IMPORTS COMPOSANTS */
import Home from './src/views/home/home'
import Details from './src/views/details/details'
import AirQuality from './src/views/airQuality/airQuality'

/* SETUP */
const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{title: 'Apply Maitaiau'}}/>
        <Stack.Screen name="Details" component={Details} options={{title: 'Apply Maitaiau'}}/>
        <Stack.Screen name="AirQuality" component={AirQuality} options={{title: 'Apply Maitaiau'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
