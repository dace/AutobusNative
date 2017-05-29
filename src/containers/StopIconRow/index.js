import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { bindActionCreators } from 'redux';
import { 
  Image, 
  Linking,
  StyleSheet, 
  Text,
  TouchableOpacity, 
  View, 
} from 'react-native';
import selectStop from './../../actions/select-stop';
import fetchBuses from './../../actions/fetch-buses';

class StopIconRow extends Component {
  handleSelectStop(code) {
    this.props.fetchBuses(code)
    this.props.selectStop(code);
    Actions.buses();
  }

  handleMapLink(url) {
    Linking.openURL(url)
      .catch(err => console.log('an error occurred.'));
  }

  renderGoogleMapsIcon(coords) {
    const googleMapsUrl = `https://www.google.com/maps/place/${coords.latitude},${coords.longitude}`;
    if (coords) {
      return (
        <TouchableOpacity onPress={() => this.handleMapLink(googleMapsUrl)}>
          <Image
            style={styles.icon} 
            source={require('./../../assets/icons/circlemap.png')} 
          />
        </TouchableOpacity>
      )
    }
  }

  render() {
    return (
      <View style={styles.wrapper}>
        {this.renderGoogleMapsIcon(this.props.stopDetails.coordinates)}
        <TouchableOpacity 
          onPress={() => this.handleSelectStop(this.props.stopDetails.stopCode)}
        >
          <Image
            style={styles.icon} 
            source={require('./../../assets/icons/circlebus.png')} 
          />
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  icon: { 
    height: 60, 
    width: 60, 
    marginRight: 15, 
  },
  wrapper: { 
    flexDirection: 'row', 
    marginTop: 15, 
  },
});

const mapDispatchToProps = dispatch => {
  return {
    selectStop: bindActionCreators(selectStop, dispatch),
    fetchBuses: bindActionCreators(fetchBuses, dispatch),
  }
};

const mapStateToProps = state => {
  return {
    allBusesAtStop: state.stops.nearbyStops,
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StopIconRow);
