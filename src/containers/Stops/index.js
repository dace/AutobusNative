import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableHighlight,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions } from 'react-native-router-flux';
import fetchCoordinates from './../../actions/fetch-coordinates';
import fetchStops from './../../actions/fetch-stops';
import selectStop from './../../actions/select-stop';
import fetchBuses from './../../actions/fetch-buses';

class Stops extends Component {
  componentWillMount() {
    this.props.fetchCoordinates();
  }

  handleSelectStop(code) {
    this.props.selectStop(code);
    this.props.fetchBuses(code)
    Actions.buses();
  }

  renderRoutes(stop) {
    const routesAtStop = stop.routes.map(route => {
      const routeStyles = {
        borderStyle: 'solid',
        borderLeftWidth: 8,
        borderColor: `#${route.color}`,
        paddingLeft: 10,
        marginTop: 20,
      }
      return (
        <View style={routeStyles} key={route.busName}>
          <Text >
            {route.busName}
          </Text>
          <Text>
            Start & End: {route.longName}
          </Text>
          <Text>
            Route: {route.description}
          </Text>
        </View>
      )
    });
    return routesAtStop;
  }

  renderStops() {
    if (!this.props.stopsList) {
        return (
        <View>
          <Text>'LOADING...'</Text>
        </View>
      )
    } else {
      const allStops = this.props.stopsList.nearbyStops.map(stop => {
        return (
          <TouchableHighlight key={stop.stopCode} onPress={() => this.handleSelectStop(stop.stopCode)}>
            <View style={styles.listItem}>
              <Text style={styles.stopName}>
                {stop.crossStreets} - {stop.direction}
              </Text>
              {this.renderRoutes(stop)}
            </View>
          </TouchableHighlight>
        )
      })
      return allStops;
    }
  }

  render() {
    return (
      <ScrollView style={styles.listWrapper}>
        {this.props.fetchStops()}
        {this.renderStops()}
      </ScrollView>
    )
  }
};

const mapStateToProps = state => {
  return {
    currentPosition: state.currentPosition,
    stopsList: state.stops,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCoordinates: bindActionCreators(fetchCoordinates, dispatch),
    fetchStops: bindActionCreators(fetchStops, dispatch),
    selectStop: bindActionCreators(selectStop, dispatch),
    fetchBuses: bindActionCreators(fetchBuses, dispatch),
  }
}

const styles = StyleSheet.create({
  listItem: {
    padding: 50,
    borderColor: '#000000',
    borderBottomWidth: 1,
    borderStyle: 'solid',
  },
  listWrapper: {
    marginTop: 60,  
  },
  stopName: {
    fontSize: 25,
    marginBottom: 20,
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Stops);
