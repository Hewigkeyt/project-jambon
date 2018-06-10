import React from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import { Actions } from 'react-native-router-flux';



const currentLists = require('../../samples/courses.json');

class CoursesList extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.grosJambon}>{this.props.item.name}</Text>
        <Text>id: {this.props.item.key}</Text>
      </View>
    )
  }
  componentDidMount() {
    Actions.refresh({title: this.props.item.name})
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  grosJambon: {
    fontSize: 50,
    textAlign: 'center'
  },
  button: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20
  },
  list: {
    width: 400,
  },
  listItem: {
    fontSize: 30
  }
});

export default CoursesList