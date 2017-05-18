import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchCoordinates from './../../actions/fetch-coordinates';

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
      </View>
    )
  }
};

const mapStateToProps = state => {
  return {
    currentPosition: state.currentPosition,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCoordinates: bindActionCreators(fetchCoordinates, dispatch),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RoutesList);