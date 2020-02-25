import React, {Component} from 'react';
import {AppRegistry, TextInput, StyleSheet, 
    Text, View, Header, Content} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Button } from 'react-native-elements';
import {Container} from 'native-base';

export default class TeamViewer extends Component {
  
  render() {
    return (
        <View > 
       <Text>You are establishing an online sesion with of the support team member from e-ConsultAG
              Please note that this service is only available during our office hours and with appoitment 
              schedule made by our service and support team,*
        </Text>
        <Text></Text>
        <Text></Text>
        <Text>
            *by downloading the TeamViewer software you are agreeing the Term of Remote
            maintenance and support service.
        </Text>
      
       </View>
    );
  }
}


