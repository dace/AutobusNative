import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchCoordinates from './../../actions/fetch-coordinates';
import fetchStops from './../../actions/fetch-stops';

class RoutesList extends Component {
  componentWillMount() {
    this.props.fetchCoordinates();
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
          <Text key={stop.stopCode}>{stop.crossStreets}</Text>
        )
      })
      return allStops;
    }
  }
  render() {
  
    return (
      <View>
        {this.props.fetchStops()}
        {this.renderStops()}
      </View>
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
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RoutesList);
