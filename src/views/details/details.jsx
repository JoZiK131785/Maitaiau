// #region IMPORTS

import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native'

// #endregion

const Details = ({navigation}) => {

  // #region INIT

  // #endregion
  // #region FUNCTIONS

  // #endregion
  // #region RETURN

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../../assets/img/main-background-sun.jpg')} style={styles.backgroundImage}>
        <Button title="Back Home" onPress={() => navigation.navigate('Home')} />
      </ImageBackground>
    </View>
  )

  // #endregion
}

export default Details

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