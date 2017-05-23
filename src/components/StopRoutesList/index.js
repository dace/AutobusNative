import React from 'react';
import { View } from 'react-native';
import StopRouteSummary from '../StopRouteSummary';

const StopRoutesList = ({ routes }) => {

  const routeSummaries = routes.map(route => {
    return (
      <StopRouteSummary 
        route={route} 
        key={route.busName}
      />
    );
  });
  
  return (
    <View>
      {routeSummaries}
    </View>
  )
};

export default StopRoutesList;