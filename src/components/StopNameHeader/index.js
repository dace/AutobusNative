import React from 'react';
import {
  Text,
  View,
} from 'react-native';

const StopNameHeader = ({ name }) => {
  const wrapper = {
    padding: 30,
    marginBottom: 15,
    backgroundColor: '#9DB1C8',
  };

  const stopName = {
    fontSize: 25,
    color: '#ffffff',
  }

  return (
    <View style={wrapper}>
      <Text style={stopName}>{name}</Text>
    </View>
  )
};

export default StopNameHeader;