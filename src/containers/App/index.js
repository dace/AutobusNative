/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import devToolsEnhancer from 'remote-redux-devtools';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {
  createStore,
  applyMiddleware,
} from 'redux';
import {
  Router,
  Scene,
} from 'react-native-router-flux';
import Stops from './../../containers/Stops';
import reducers from './../../reducers';

const store = createStore(reducers, devToolsEnhancer(), applyMiddleware(thunk));

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Scene key="root">
            <Scene key="routeList" component={RouteList} title="Routes" initial={true} />
          </Scene>
        </Router>
      </Provider>
    );
  }
}
