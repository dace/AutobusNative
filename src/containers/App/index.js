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
import Buses from './../../containers/Buses';
import reducers from './../../reducers';

const store = createStore(reducers, devToolsEnhancer(), applyMiddleware(thunk));

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Scene key="root">
            <Scene key="stops" component={Stops} hideNavBar title="Routes" initial={true} />
            <Scene key="buses" component={Buses} title="Buses" />
          </Scene>
        </Router>
      </Provider>
    );
  }
}
