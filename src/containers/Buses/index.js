import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Image,
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
          const approachingBuses = bus[route].nextBuses.map((nextBus, index) => {
            return (
              <View style={styles.busWrapper}>
                <View style={styles.busTitleWrapper}>
                  <Text style={styles.titleText}>BUS #{index + 1}</Text>
                </View>
                <View style={styles.busDetailRowWrapper}>
                  <View style={styles.busDetailSection}>
                    <Text>{nextBus.distanceAway}</Text>
                    <Text>Miles Away</Text>
                  </View>
                  <View style={styles.busDetailSection}>
                    <Text>{nextBus.stopsAway}</Text> 
                    <Text>Stops Away</Text>
                  </View>
                </View>
              </View>
            )
          });
          return (
            <View>
              <View style={styles.routeWrapper}>
                <Text style={styles.routeName}>
                  {routeName}
                  <Image 
                    source={require('./../../assets/icons/bus.png')}
                    style={{ height: 45, width: 50, marginLeft: 15, }}
                  />
                </Text>
                <Text style={styles.textStyle1}>FINAL DESTINATION: </Text>
                <Text style={styles.textStyle2}>{destination.toUpperCase()}</Text>
              </View>
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
        <Header title="Next Buses" img="buswhite" />
        <View style={styles.contentWrapper}>
          {this.renderBusDetails()}
        </View>
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
    backgroundColor: '#F6F8F9',
  },
  contentWrapper: {
    padding: 30,
  },
  routeWrapper: {
    backgroundColor: '#ffffff',
    padding: 30,
    marginBottom: 30,
  },
  routeName: {
    fontSize: 60,
    marginBottom: 15,
    fontFamily: 'Gilroy-Bold',
  },
  textStyle1: {
    fontSize: 16,
    color: '#000000',
    marginBottom: 15,
    fontFamily: 'Avenir-Book',
  },
  textStyle2: {
    fontSize: 16,
    color: '#919191',
    marginBottom: 15,
    fontFamily: 'Avenir-Book',
  },
  titleText: {
    color: '#ffffff',
  },
  busWrapper: {
    marginBottom: 15,
  },
  busTitleWrapper: {
    padding: 15,
    backgroundColor: '#B3CBDE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  busDetailRowWrapper: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    padding: 15,
    marginBottom: 30,
  },
  busDetailSection: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 15,
  },
});

Buses.propTypes = {
  buses: PropTypes.object,
};

export default connect(mapStateToProps)(Buses);
