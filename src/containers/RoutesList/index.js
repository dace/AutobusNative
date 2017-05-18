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

  render() {
    return (
      <View>
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
