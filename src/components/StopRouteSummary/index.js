import React from 'react';
import {
  Text, 
  View, 
} from 'react-native';

const StopRouteSummary = ({ route }) => {
  const wrapper = {
    borderColor: '#E3E3E3',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    padding: 0,
    backgroundColor: '#ffffff',
  };

  const innerWrapper = {
    borderStyle: 'solid',
    paddingTop: 30,
    paddingRight: 30,
    paddingBottom: 30,
    paddingLeft: 26,
    borderLeftWidth: 4,
    borderColor: `#${route.color}`,    
  }

  const routeName = {
    fontSize: 35,
    marginBottom: 10,
    color: `#${route.color}`,
  };

  return (
    <View style={wrapper} key={route.busName}>
      <View style={innerWrapper}>
        <Text style={routeName}>{route.busName}</Text>
        <Text>Start & End: {route.longName}</Text>
        <Text>Route: {route.description}</Text>
      </View>
    </View>
  )
};

export default StopRouteSummary;