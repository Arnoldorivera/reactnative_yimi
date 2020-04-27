import React,{Component} from 'react';
import { Platform,StyleSheet, Text, View } from 'react-native';
import PickerDemo from './components/demopicker';
import { view, Button } from 'react-native-elements';

export default class App extends Component{
  render() {
    return (
      <PickerDemo></PickerDemo>
    )
  }
}

