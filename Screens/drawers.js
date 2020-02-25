import React,{Component} from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { createDrawerNavigator } from 'react-navigation';
import KasusScreen from './kasus';
import FeedbackScreen from './feedback';

const DrawerNavigator = createDrawerNavigator(
  {
    KasusPsikisEffect: KasusScreen,
  },
);

export default class Drawer extends Component{
  render(){
    return(
      <DrawerNavigator/ >
    );
  }
}