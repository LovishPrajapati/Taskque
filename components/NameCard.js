import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function NameCard() {
  return (
    <View>
      <Text style={styles.root}>What's up, Olivia!</Text>
      <Text style={styles.categoryText}>CATEGORIES</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {fontSize: 32, color: 'white', marginVertical: 24, fontWeight: '500'},
  categoryText: {
    color: '#C4C4C4',
    // marginLeft: 24,
    paddingVertical: 13,
    lineHeight: 16.41,
    letterSpacing: 3,
    fontSize: 14,
    fontWeight: '700',
  },
});
