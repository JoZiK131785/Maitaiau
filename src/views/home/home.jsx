// #region IMPORTS

import React, { useState, useEffect } from 'react'
import { View, StyleSheet, ImageBackground, TextInput, Text, Image } from 'react-native'
import * as Location from 'expo-location'
import {WEITHER_KEY} from '@env'
import MainButton from '../../components/mainButton'
import CurrentMeteoDetails from '../../components/currentMeteoDetails'
import NextDays from '../../components/nextDays'

// #endregion

const Home = ({navigation}) => {

  // #region INIT
  
  const [location, setLocation] = useState(null)
  const [currentMeteo, setCurrentMeteo] = useState(null)

  // #endregion
  // #region FUNCTIONS

  /* Recuperation de la position GPS */
  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        console.log('Permission to access location was denied')
        return
      }

      let location = await Location.getCurrentPositionAsync({})
      setLocation(`${location.coords.latitude},${location.coords.longitude}`)
      fetchMeteo()
    })()
  }, [])

  /* Recuperation de la meteo quand on a les coords GPS */
  useEffect(() => {
    if(location) fetchMeteo()
  }, [location])

  /* Recuperation de la meteo */
  const fetchMeteo = async () => {
    const url = `http://api.weatherapi.com/v1/forecast.json?q=${encodeURIComponent(location)}&days=4`;
    const options = {
      method: 'GET',
      headers: {
        'key': WEITHER_KEY
      }
    };

    fetch(url, options)
      .then((response) => response.json())
      .then((data) => setCurrentMeteo(data))
      .catch(() => console.log("error fetching meteo data"));
  }

  // #endregion
  // #region RETURN

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../../assets/img/main-background-sun.jpg')} style={styles.backgroundImage}>

        {/* HEADER */}
        <View style={styles.header}>
          <TextInput style={styles.input} placeholder="Chercher une ville, des coordonnes..." value='' autoCapitalize="none"/>
          <View style={styles.headerDetails}>
            {currentMeteo && <Text style={styles.headerDetailsCity}>{`${currentMeteo.location.name}, `}</Text>}
            {currentMeteo && <Text style={styles.headerDetailsCountry}>{currentMeteo.location.country}</Text>}
          </View>
        </View>
        
        {/* CURRENT METEO */}
        <View style={styles.currentMeteo}>
          <View style={styles.mainMeteoIconPanel}>
            {currentMeteo && <Image style={styles.mainMeteoIcon} source={{ uri: `https:${currentMeteo.current.condition.icon}` }}/>}
          </View>
          <View style={styles.currentMeteoDetails}>
            {currentMeteo && <Text style={styles.currentMeteoTemp}>{`${currentMeteo.current.temp_c}°`}</Text>}
            {currentMeteo && <Text style={styles.currentMeteoTempDetail}>{currentMeteo.current.condition.text}</Text>}
          </View>
        </View>

        {/* DETAILS METEO */}
        {currentMeteo && <CurrentMeteoDetails currentMeteo={currentMeteo}/>}

        {/* CARDS METEO */}
        {currentMeteo && <NextDays currentMeteo={currentMeteo}/>}

        {/* METEO CONTROLS */}
        <View style={styles.controlsMeteo}>
          <MainButton title='Details' color='rgba(219, 186, 20, 1)' onPress={() => navigation.navigate('Details')}/>
          <MainButton title='AirQuality' color='rgba(189, 165, 240, 1)' onPress={() => navigation.navigate('AirQuality')}/>
        </View>
      </ImageBackground>
    </View>
  )

  // #endregion
}

export default Home

// #region STYLE

const styles = StyleSheet.create({
  // #region MAIN STYLE

  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    paddingHorizontal: '10%',
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },

  // #endregion
  // #region HEADER STYLE

  header: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
  },
  input: {
    width: '100%',
    height: 50,
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 30,
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 1,
  },
  headerDetails: {
    flexDirection: 'row', 
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderStyle: 'solid',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 30,
  },
  headerDetailsCity: {
    color: 'white',
    fontSize: 20,
    fontWeight: '900'
  },
  headerDetailsCountry: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500'
  },

  // #endregion
  // #region CURRENT METEO STYLE
  
  currentMeteo: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    gap: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainMeteoIconPanel: {
    flex: 1,
    width: 100,
    height: 100,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    borderStyle: 'solid',
    borderColor: 'white',
    borderWidth: 1,
  },
  mainMeteoIcon: {
    flex: 1,
    width: 100,
    height: 100,
  },
  currentMeteoDetails: {
    flex: 1,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 30,
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 1,
  },
  currentMeteoTemp: {
    color: 'black',
    fontSize: 32,
    fontWeight: '900'
  },
  currentMeteoTempDetail: {
    color: 'black',
    fontSize: 12,
    fontWeight: '900'
  },

  // #endregion
  // #region METEO CONTROLS STYLE

  controlsMeteo: {
    flex: 1,
    width: '100%',
    paddingHorizontal: '10%',
    justifyContent: 'center',
    gap: 20,
  },

  // #endregion
})

// #endregion