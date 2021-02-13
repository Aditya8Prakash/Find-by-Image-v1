import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './screens/login';

export default class App extends Component {
  render(){
    return (
      <LoginScreen/>
    );
  }
}
