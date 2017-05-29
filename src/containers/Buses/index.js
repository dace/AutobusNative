import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  ScrollView,
  Text,
  StyleSheet,
  View,
} from 'react-native';
import Header from './../../components/Header';

class Buses extends Component {
  renderBusDetails() {
    if (!this.props.buses) {
      return (
        <Text>Loading Bus Details...</Text>
      )
    } else if (this.props.buses.busList.length === 0) {
      return (
        <Text>Sorry, but there are no buses currently on this route.</Text>
      )
    } else {
      const liveBuses = this.props.buses.busList.map(bus => {
        return Object.keys(bus).map(route => {
          const routeName = route;
          const destination = bus[route].destination;
          const approachingBuses = bus[route].nextBuses.map(nextBus => {
            return (
              <View>
                <Text>Distance Away: {nextBus.distanceAway}</Text>
                <Text>Stops Away: {nextBus.stopsAway}</Text> 
              </View>
            )
          });
          return (
            <View>
              <Text>{routeName}</Text>
              <Text>{destination}</Text>
              {approachingBuses}
            </View>
          )  
        });
      });

      return (
        <View>{liveBuses}</View>
      )
    }
  }

  render() {
    return (
      <ScrollView style={styles.listWrapper}>
        <Header title="Next Buses" />
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
    marginTop: 60,
  },
});

Buses.propTypes = {
  buses: PropTypes.object,
};

export default connect(mapStateToProps)(Buses);
