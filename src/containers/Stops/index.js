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
            <Text style={styles.listItem}>
              {stop.crossStreets} - {stop.direction}
            </Text>
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
    padding: 30,
  },
  listWrapper: {
    marginTop: 60,
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Stops);
