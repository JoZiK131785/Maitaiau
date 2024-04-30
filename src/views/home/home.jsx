// #region IMPORTS

import React, { useState } from 'react'
import { View, Button, StyleSheet, ImageBackground } from 'react-native'

// #endregion

const Home = ({navigation}) => {

  // #region INIT

  // #endregion
  // #region FUNCTIONS

  // #endregion
  // #region RETURN

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../../assets/img/main-background-sun.jpg')} style={styles.backgroundImage}>
        <Button title="Details" onPress={() => navigation.navigate('Details')} />
        <Button title="AirQuality" onPress={() => navigation.navigate('AirQuality')} />
      </ImageBackground>
    </View>
  )

  // #endregion
}

export default Home

// #region STYLE

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    paddingHorizontal: '20%',
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

// #endregion