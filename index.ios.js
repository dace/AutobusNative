/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class AutobusNative extends Component {
  getLocation() {
    return navigator.geolocation.getCurrentPosition(
      (position) => {
        const initialPosition = position.coords;
        const { longitude } = initialPosition;
        const { latitude } = initialPosition;
        const currentPosition = {
          latitude,
          longitude,
        };
        console.log(currentPosition);
        return currentPosition;
      },
      (error) => JSON.stringify(error),
      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 1000
      }
    );
  }

  render() {
    return (
      <View>
        <Text>
          {this.getLocation()}
        </Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('AutobusNative', () => AutobusNative);
