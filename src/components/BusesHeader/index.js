import React, { Component } from 'react';
import {
  Image,
  View,
  Text, 
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

class BusesHeader extends Component {
  navigateBack() {
    Actions.pop();
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <TouchableOpacity onPress={() => this.navigateBack()}>
          <Image source={require(`./../../assets/icons/arrowwhite.png`)} style={{ width: 50, height: 45 }} />
        </TouchableOpacity>
        <Image source={require(`./../../assets/icons/buswhite.png`)} style={{ width: 100, height: 89, marginBottom: 30 }} />
        <Text style={styles.title}>{this.props.title.toUpperCase()}</Text>
      </View>
    )
  }  
}

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

export default BusesHeader;
