import React from 'react';
import {StyleSheet, View, StatusBar, Platform} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

function Header() {
  return (
    <>
      <View style={styles.root}>
        <FontAwesomeIcon name="bars" size={20} color="white" />
        <View style={styles.innerIcons}>
          <FontAwesomeIcon
            style={styles.searchIcon}
            name="search"
            size={20}
            color="white"
          />
          <FontAwesomeIcon name="bell" size={20} color="white" />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: Platform.OS === 'ios' ? StatusBar.currentHeight + 35 : 0,
  },
  innerIcons: {
    display: 'flex',
    flexDirection: 'row',
  },
  searchIcon: {
    marginHorizontal: 16,
  },
});

export default Header;
