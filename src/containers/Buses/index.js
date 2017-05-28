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
        <Text>Sorry, but there are no buses currently on this route</Text>
      )
    } else {
      

      // return Object.keys(routes).map(e => {
      //   const routeName = routes[e];
      //   const routeDestination = routes[e].destination;
      //   const incomingBuses = routes[e].nextBuses.map(bus => {
      //     return (
      //       <View>
      //         <Text>Distance Away: {bus.distanceAway}</Text>
      //         <Text>Stops Away: {bus.stopsAway}</Text> 
      //       </View>
      //     )
      //   });
        return (
          <View>
            <Text>hi</Text>
          </View>
        )
      // });
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
