import React, { Component } from 'react';
import {
  Image,
  View, 
  Text,
  Linking,
  TouchableOpacity,
} from 'react-native';

class StopRouteSummary extends Component {
  handleScheduleLink(url) {
    Linking.openURL(url)
      .catch(err => console.log('an error occurred.'));
  }
  
  renderScheduleIcon(url) {
    if (url) {
      return (
        <TouchableOpacity onPress={() => this.handleScheduleLink(url)}>
          <Image 
            style={{ height: 60, width: 60, }}
            source={require('./../../assets/icons/schedule.png')}
          />
        </TouchableOpacity>
      )
    }
  }

  render () {
    const wrapper = {
      marginBottom: 15,
      padding: 0,
      backgroundColor: '#ffffff',
    };

    const primaryText = {
      fontSize: 16,
      marginBottom: 4,
    }

    const secondaryText = {
      fontSize: 16,
      color: '#919191',
      marginBottom: 28,
    }

    const innerWrapper = {
      borderStyle: 'solid',
      paddingTop: 30,
      paddingRight: 30,
      paddingBottom: 10,
      paddingLeft: 26,
      borderLeftWidth: 4,
      borderColor: `#${this.props.route.color}`,    
    }

    const titleWrapper = { 
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 28,
    }

    const routeName = {
      fontSize: 60,
      marginRight: 15,
      color: `#${this.props.route.color}`,
    };
    return (
      <View style={wrapper} key={this.props.route.busName}>
        <View style={innerWrapper}>
          <View style={titleWrapper}>
          <Text style={routeName}>{this.props.route.busName}</Text>
          {this.renderScheduleIcon(this.props.route.schedule)}
          </View>
          <Text style={primaryText}>START & END:</Text>
          <Text style={secondaryText}>{this.props.route.longName.toUpperCase()}</Text>
          <Text style={primaryText}>ROUTE:</Text>
          <Text style={secondaryText}>{this.props.route.description.toUpperCase()}</Text>
        </View>
      </View>
    )
  }
};

export default StopRouteSummary;
