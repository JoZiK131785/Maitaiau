// #region IMPORTS

import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

// #endregion

const MainButton = ({title, color, onPress}) => {
  // #region RETURN

  return (
    <TouchableOpacity style={[styles.mainButton, { backgroundColor: color }]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )

  // #endregion
}
export default MainButton

// #region STYLE

const styles = StyleSheet.create({
  mainButton: {
    height: 40,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'solid',
    borderColor: 'white',
    borderWidth: 1,
  },
  text: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
})

// #endregion