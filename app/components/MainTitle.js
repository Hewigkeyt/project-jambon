import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class MainTitle extends React.Component {
  render() {
    return (
    <View style={styles.container}>
      <Text style={styles.grosJambon}>Project Jambon</Text>
    </View>
  )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:0.2
  },
  grosJambon: {
    fontSize: 50,
    textAlign: 'center'
  },
});

export default MainTitle