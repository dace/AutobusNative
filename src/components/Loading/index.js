import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const Loading = ({ text }) => {
  return (
    <View style={{ flex: 1 }}>
      <Text>{text}</Text>
    </View>
  )
};

export default Loading;