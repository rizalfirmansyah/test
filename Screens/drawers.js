import React,{Component} from 'react'
import { createDrawerNavigator } from 'react-navigation'
import KasusScreen from './kasus'

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