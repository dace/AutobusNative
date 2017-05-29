import React from 'react';
import {
  Image,
  View,
  Text, 
  StyleSheet
} from 'react-native';

const Header = ({ title, img }) => {
  return (
    <View style={styles.wrapper}>
      <Image source={require(`./../../assets/icons/buswhite.png`)} style={{ width: 100, height: 89, marginBottom: 30 }} />
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
    fontFamily: 'Gilroy-Bold',
  }
});

export default Header;
