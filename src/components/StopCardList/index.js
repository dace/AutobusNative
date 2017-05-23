import React from 'react';
import { View } from 'react-native';
import StopCard from '../StopCard';

const StopCardList = ({ stops }) => {
  const allStops = stops.nearbyStops.map(stop => {
    return (
      <StopCard
        details={stop}
        key={stop.stopCode}
      />
    )
  });

  return (
    <View>
      {allStops}
    </View>
  )
};

export default StopCardList;
