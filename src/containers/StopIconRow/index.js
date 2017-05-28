import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { bindActionCreators } from 'redux';
import { 
  Image, 
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

  render() {
    return (
      <View style={styles.wrapper}>
        <Image
          style={styles.icon} 
          source={require('./../../assets/icons/circlemap.png')} 
        />
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
