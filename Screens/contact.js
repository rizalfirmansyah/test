import React, {Component} from 'react';
import {AppRegistry, TextInput, StyleSheet, 
    Text, View, Header, Content} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Button } from 'react-native-elements';
import {Container} from 'native-base';

export default class Contact extends Component {
  
  render() {
    return (
        <View > 
       <Text>Are there question or do you want to give us some feedback</Text>
       <Text></Text>
       <Text></Text>
       <Text>Our service and support team is availbale from monday to friday 9 am until 5 pm CET</Text>
       <Text></Text>
       <Text></Text>
       <Text>phone : 0681 950 82 877</Text>
       <Text></Text>
       <Text></Text>
       <Text> Email: support@e-consult.de</Text>
       <Text></Text>
      
       <Text>Address:</Text>
       <Text>e-Consult Aktiengesellschaft</Text>
       <Text>Neugrabenweg1</Text>
       <Text>66123 Saarbrucken
       </Text>
      
       </View>
    );
  }
}


