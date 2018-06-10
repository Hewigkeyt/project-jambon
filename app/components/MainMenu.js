import React from 'react';
import { StyleSheet, Button, View } from 'react-native';
import { Actions } from 'react-native-router-flux';

class MainMenu extends React.Component {
  render() {
    return (
    <View style={styles.container}>
      <Button style={[styles.button, styles.buttonList]} onPress={Actions.coursesMenu} title="Liste de courses"/>
      <Button style={[styles.button, styles.buttonEvent]} onPress={Actions.test2} title="Event"/>
    </View>
  )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0.1,
    justifyContent: 'space-around'
  },
  button: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20
  },
  buttonList: {
  },
  buttonEvent: {
  },
});

export default MainMenu