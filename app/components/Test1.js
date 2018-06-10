import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';

class Test1 extends React.Component {
  render() {
    return (
    <View style={styles.container}>
      <Text style={styles.grosJambon}>Test1</Text>
      <Button title="back" onPress={Actions.pop}></Button>
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

export default Test1