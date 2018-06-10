import React from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import { Actions } from 'react-native-router-flux';



const currentLists = require('../../samples/courses.json');

class CoursesMenu extends React.Component {
  render() {
    return (
    <View style={styles.container}>
      <Text style={styles.grosJambon}>Listes de courses</Text>
      <FlatList style={styles.list} data={currentLists.list}
        renderItem={({item})=><Text style={styles.listItem} onPress={()=>{Actions.coursesList({item: {name: item.name, key: item.key}})}}>{item.name}</Text>} />
      <Button style={[styles.button, styles.buttonList]} title="Nouvelle liste" onPress={Actions.pop}></Button>
      <Button style={[styles.button, styles.buttonList]} title="back" onPress={Actions.pop}></Button>
    </View>
  )
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

export default CoursesMenu