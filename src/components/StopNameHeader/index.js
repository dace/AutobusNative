import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import StopIconRow from './../../containers/StopIconRow';

const StopNameHeader = ({ details, name }) => {
  const wrapper = {
    padding: 30,
    marginBottom: 15,
    backgroundColor: '#9DB1C8',
  };

  const stopName = {
    fontSize: 25,
    color: '#ffffff',
    fontFamily: 'Gilroy-Bold',
  }

  return (
    <View style={wrapper}>
      <Text style={stopName}>{name}</Text>
      <StopIconRow stopDetails={details} />
    </View>
  )
};

export default StopNameHeader;