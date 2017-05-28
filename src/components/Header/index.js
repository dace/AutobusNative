import React from 'react';
import {
  View,
  Text, 
  StyleSheet
} from 'react-native';

const Header = ({ title, img }) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>{title.toUpperCase()}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  wrapper: {
    height: 320,
    backgroundColor: '#11446D',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 7,
    borderStyle: 'solid',
    borderColor: 'red',
    marginBottom: 30,
  },
  title: {
    color: '#ffffff',
    fontSize: 26,
  }
});

export default Header;
