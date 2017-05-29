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
import BusesHeader from './../../components/BusesHeader';

class Buses extends Component {
  renderStatusIcon(bus) {
    if (bus.stopsAway <= 4) {
      return (
        <Image 
          source={require('./../../assets/icons/dotgreen.png')} 
          style={{ height: 10, width: 10 }} 
        />
      )
    } else if (bus.stopsAway <= 8) {
      return (
        <Image 
          source={require('./../../assets/icons/dotyellow.png')} 
          style={{ height: 10, width: 10 }} 
        />
      )
    } else {
      return (
        <Image 
          source={require('./../../assets/icons/dotred.png')} 
          style={{ height: 10, width: 10 }} 
        />
      )
    }
  }

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
                  {this.renderStatusIcon(nextBus)}
                  <Text style={styles.titleText}>BUS #{index + 1}</Text>
                </View>
                <View style={styles.busDetailRowWrapper}>
                  <View style={styles.busDetailSection}>
                    <Image 
                      source={require('./../../assets/icons/bus.png')} 
                      style={{ height: 35, width: 40, marginBottom: 30 }} 
                    />
                    <Text style={styles.textBusDetails}>{nextBus.distanceAway}</Text>
                    <Text style={styles.textBusDetails}>Miles Away</Text>
                  </View>
                  <View style={styles.busDetailSection}>
                    <Image 
                      source={require('./../../assets/icons/stop.png')} 
                      style={{ height: 40, width: 40, marginBottom: 30 }} 
                    />
                    <Text style={styles.textBusDetails}>{nextBus.stopsAway}</Text> 
                    <Text style={styles.textBusDetails}>Stops Away</Text>
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
        <BusesHeader title="Next Buses" img="buswhite" />
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
  textBusDetails: {
    fontSize: 16,
    color: '#000000',
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
    marginLeft: 15,
  },
  busWrapper: {
    marginBottom: 15,
  },
  busTitleWrapper: {
    padding: 15,
    backgroundColor: '#B3CBDE',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
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
