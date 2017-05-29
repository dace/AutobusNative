import React, { Component } from 'react';
import {
  Image,
  View,
  Text, 
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

class StopsHeader extends Component {
  refreshScene() {
    Actions.refresh();
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <Image source={require(`./../../assets/icons/stopwhite.png`)} style={{ width: 100, height: 100, marginBottom: 30 }} />
        <Text style={styles.title}>NEARBY STOPS</Text>
      </View>
    )
  }  
}

const styles = StyleSheet.create({
  wrapper: {
    height: 300,
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

export default StopsHeader;
