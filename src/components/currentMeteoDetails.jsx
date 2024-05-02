// #region IMPORTS

import React, { useState, useEffect } from 'react'
import { Image, Text, View, StyleSheet } from 'react-native'

// #endregion

const CurrentMeteoDetails = ({currentMeteo}) => {
  // #region INIT
  
  const [nextDay, setNextDay] = useState(null)
  const [next2Day, setNext2Day] = useState(null)
  const [next3Day, setNext3Day] = useState(null)

  // #endregion
  // #region FUNCTIONS

  // #endregion
  // #region RETURN

  return (
    <View style={styles.currentMeteoDetails}>

      {/* WIND */}
      <View style={styles.detailLayout}>
        <Image style={styles.itemIcon} source={require('../../assets/img/wind.png')}/>
        <Text style={styles.itemContent}>{`${currentMeteo.current.wind_kph} Km/h`}</Text>
      </View>

      {/* HUMIDITY */}
      <View style={styles.detailLayout}>
        <Image style={styles.itemIcon} source={require('../../assets/img/humidity.png')}/>
        <Text style={styles.itemContent}>{`${currentMeteo.current.humidity} %`}</Text>
      </View>

      {/* SUNRISE */}
      <View style={styles.detailLayout}>
        <Image style={styles.itemIcon} source={require('../../assets/img/cold.png')}/>
        <Text style={styles.itemContent}>{`${currentMeteo.current.feelslike_c}°`}</Text>
      </View>

    </View>
  )

  // #endregion
}
export default CurrentMeteoDetails

// #region STYLE

const styles = StyleSheet.create({
  currentMeteoDetails: {
    flex: 1,
    width: '100%',
    marginBottom: 20,
    justifyContent: 'center',
    gap: 15,
    paddingVertical: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderStyle: 'solid',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 30,
  },
  detailLayout: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
  },
  itemIcon: {
    width: 30,
    height: 30,
  },
  itemContent: {
    fontSize: 20,
    fontWeight: 'bold',
  },
})

// #endregion