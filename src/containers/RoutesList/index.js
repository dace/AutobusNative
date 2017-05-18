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
  
  printCoords() {
    if (!this.props.currentPosition) {
      return (
        <Text>LOADING...</Text>
      )
    } else {
      return (
        <View>
          <Text>{this.props.currentPosition.coordinates.latitude}</Text>
          <Text>{this.props.currentPosition.coordinates.longitude}</Text>
        </View>
      )
    };
  }

  render() {
    return (
      <View>
        <Text>This is where the list of routes will render.</Text>
        <Text>This is where the list of routes will render.</Text>
        <Text>This is where the list of routes will render.</Text>
        <Text>This is where the list of routes will render.</Text>
        <Text>This is where the list of routes will render.</Text>
        <Text>This is where the list of routes will render.</Text>
        <Text>This is where the list of routes will render.</Text>
        <Text>This is where the list of routes will render.</Text>
        <Text>This is where the list of routes will render.</Text>
        <Text>This is where the list of routes will render.</Text>
        {this.printCoords()}
        {this.props.fetchStops()}
      </View>
    )
  }
};

const mapStateToProps = state => {
  console.log(state);
  return {
    currentPosition: state.currentPosition,
    nearbyStops: state.nearbyStops,
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