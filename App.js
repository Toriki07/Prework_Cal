import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {HomeStack} from './Router.js'

export default class App extends Component {
  render() {
    return (
     <HomeStack />

    );
  }
}