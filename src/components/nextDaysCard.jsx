// #region IMPORTS

import React, { useState, useEffect } from 'react'
import { Image, Text, View, StyleSheet } from 'react-native'

// #endregion 

const NextDaysCard = ({currentMeteo}) => {
  // #region RETURN

  return (
    <View style={styles.meteoCard}>
      <Image style={styles.mainMeteoIcon} source={{ uri: `https:${currentMeteo.day.condition.icon}` }}/>
      <Text style={styles.itemDay}>{new Date(currentMeteo.date).toLocaleDateString('fr-FR', { weekday: 'long' }).charAt(0).toUpperCase() + new Date(currentMeteo.date).toLocaleDateString('fr-FR', { weekday: 'long' }).slice(1)}</Text>
      <Text style={styles.itemTemp}>{`${currentMeteo.day.avgtemp_c} °`}</Text>
    </View>
  )

  // #endregion
}
export default NextDaysCard


// #region STYLE

const styles = StyleSheet.create({
  meteoCard: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainMeteoIcon: {
    width: 40,
    height: 40,
  },
  itemDay: {
    color: 'white',
  },
  itemTemp: {
    color: 'white',
    fontWeight: '900',
  },
})

// #endregion