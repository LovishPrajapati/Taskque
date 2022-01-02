import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {ProgressBar, Colors} from 'react-native-paper';

function CategoryCard() {
  return (
    <View style={styles.root}>
      <View style={styles.cardContent}>
        <Text style={styles.taskNumber}>40 Tasks</Text>
        <Text style={styles.taskCategory}>Business</Text>
        <View style={styles.progressBar}>
          <ProgressBar progress={0.5} color={Colors.pink200} />
        </View>
      </View>
    </View>
  );
}

const pWidth = '88%';

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: '#041A55',
    borderRadius: 27,
    width: 234,
    height: 132,
    marginRight: 24,
    // TODO:- Box shadow is not working fix this
    // shadowOffset: '0px 2px',
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  taskNumber: {
    color: '#C4C4C4',
    fontWeight: 'bold',
  },
  taskCategory: {
    fontWeight: '700',
    color: 'white',
    fontSize: 24,
  },
  cardContent: {
    marginLeft: 25,
  },
  progressBar: {
    marginTop: 10,
    width: pWidth,
  },
});

export default CategoryCard;
