// #region IMPORTS

import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import NextDaysCard from './nextDaysCard'

// #endregion

const NextDays = ({currentMeteo}) => {
  // #region RETURN

  return (
    <View style={styles.nextDaysLayout}>
      <Text style={styles.nextDaysTitle}>Next 3 Days</Text>
      <View style={styles.nextDaysList}>
        <NextDaysCard currentMeteo={currentMeteo.forecast.forecastday[1]} />
        <NextDaysCard currentMeteo={currentMeteo.forecast.forecastday[2]} />
        <NextDaysCard currentMeteo={currentMeteo.forecast.forecastday[3]} />
      </View>
    </View>
  )

  // #endregion
}
export default NextDays

// #region STYLE

const styles = StyleSheet.create({
  nextDaysLayout: {
    width: '100%',
    height: 120,
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 30,
    borderStyle: 'solid',
    borderColor: 'white',
    borderWidth: 1,
  },
  nextDaysTitle: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
    paddingVertical: 5,
  },
  nextDaysList: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  }
})

// #endregion