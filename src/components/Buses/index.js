import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  ScrollView,
  Text,
  StyleSheet,
  View,
} from 'react-native';

class Buses extends Component {
  renderBusDetails() {
    if (!this.props.buses) {
      return (
        <Text>Loading Bus Details...</Text>
      )
    } else if (this.props.buses.busList.length === 0) {
      return (
        <Text>Sorry, but there are no buses currently on this route</Text>
      )
    } else {
      return (
        this.props.buses.busList.map(bus => {
          return (
            <View key={bus.stopsAway} style={styles.listWrapper}>
              <Text>Route: {bus.busRoute}</Text>
              <Text>Destination: {bus.destination}</Text>
              <Text>Distance Away: {bus.distanceAway}</Text>            
            </View>
          )
        })
      )
    }
  }

  render() {
  console.log(this.props);
    return (
      <ScrollView style={styles.listWrapper}>
        {this.renderBusDetails()}
      </ScrollView>
    )
  }
};

const mapStateToProps = state => {
  return {
    buses: state.busesAtStop,
  }
};

const styles = StyleSheet.create({
  listWrapper: {
    marginTop: 100,
    padding: 20,
  },
});

export default connect(mapStateToProps)(Buses);
