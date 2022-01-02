import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {FAB} from 'react-native-paper';

function AddTaskFAB() {
  return <FAB style={styles.root} icon="plus"></FAB>;
}

const styles = StyleSheet.create({
  root: {
    position: 'absolute',
    right: 20,
    bottom: 40,
    backgroundColor: '#F907FE',
  },
});

export default AddTaskFAB;
