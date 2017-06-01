import React from 'react';
import {
  StackNavigator,
} from 'react-navigation';
import Cal from './Apps/Calculator.js';
import Setting from './Apps/Settings.js';

export const HomeStack = StackNavigator({
	sreens_Cal: {
		screen: Cal
	},
	sreens_Setting: {
		screen: Setting
	},
})