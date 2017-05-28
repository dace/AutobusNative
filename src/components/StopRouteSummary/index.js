import React from 'react';
import {
  Image,
  View, 
  Text, 
} from 'react-native';

const StopRouteSummary = ({ route }) => {
  const wrapper = {
    marginBottom: 15,
    padding: 0,
    backgroundColor: '#ffffff',
  };

  const primaryText = {
    fontSize: 16,
    marginBottom: 4,
  }

  const secondaryText = {
    fontSize: 16,
    color: '#919191',
    marginBottom: 28,
  }

  const innerWrapper = {
    borderStyle: 'solid',
    paddingTop: 30,
    paddingRight: 30,
    paddingBottom: 10,
    paddingLeft: 26,
    borderLeftWidth: 4,
    borderColor: `#${route.color}`,    
  }

  const titleWrapper = { 
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 28,
  }

  const routeName = {
    fontSize: 60,
    marginRight: 15,
    color: `#${route.color}`,
  };

  return (
    <View style={wrapper} key={route.busName}>
      <View style={innerWrapper}>
        <View style={titleWrapper}>
        <Text style={routeName}>{route.busName}</Text>
          <Image 
            style={{ height: 60, width: 60, }}
            source={require('./../../assets/icons/schedule.png')}
          />
         </View>
        <Text style={primaryText}>START & END:</Text>
        <Text style={secondaryText}>{route.longName.toUpperCase()}</Text>
        <Text style={primaryText}>ROUTE:</Text>
        <Text style={secondaryText}>{route.description.toUpperCase()}</Text>
      </View>
    </View>
  )
};

export default StopRouteSummary;
