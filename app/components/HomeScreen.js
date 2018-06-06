import React from 'react';
import { StyleSheet, View } from 'react-native';
import MainTitle from './MainTitle';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MainTitle />
      </View>
      )
  }
};