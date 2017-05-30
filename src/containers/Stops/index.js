import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  StatusBar,
  TouchableHighlight,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions } from 'react-native-router-flux';
import PropTypes from 'prop-types';
import StopsHeader from './../../components/StopsHeader';
import StopNameHeader from './../../components/StopNameHeader';
import StopCard from './../../components/StopCard';
import StopCardList from './../../components/StopCardList';
import fetchCoordinates from './../../actions/fetch-coordinates';
import fetchStops from './../../actions/fetch-stops';
import fetchBuses from './../../actions/fetch-buses';

class Stops extends Component {
  componentWillMount() {
    this.props.fetchCoordinates();
  }

  renderStops() {
    if (this.props.stopsList) {
      return <StopCardList stops={this.props.stopsList} />
    } else {
      return (
        <View>
          <Text>'LOADING...'</Text>
        </View>
      )
    }
  }

  render() {
    return (
      <View>
        <View style={{ backgroundColor: '#11446D', height: 22 }}>
          <StatusBar barStyle="light-content" />
        </View>
        <ScrollView style={styles.wrapper}>
          <StopsHeader/>
          <View style={styles.contentWrapper}>
            {this.props.fetchStops()}
            {this.renderStops()}
          </View>
        </ScrollView>
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

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#F6F9FA',
  },
  contentWrapper: {
    padding: 15,
  }
});

Stops.propTypes = {
  stopsList: PropTypes.object,
  currentPosition: PropTypes.object,
  fetchCoordinates: PropTypes.func,
  fetchStops: PropTypes.func,
  fetchBuses: PropTypes.func,  
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Stops);
