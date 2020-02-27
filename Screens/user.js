import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import Icon from 'react-native-ionicons';
import {Container, Header} from 'native-base';

const styles = StyleSheet.create({
  black:{
    color:'black',
    fontSize: 15,
  },
  grey:{
    color: 'grey',
    fontSize: 30,
  },
  greyy:{
    color: 'grey',
    fontSize: 20,
  },
  alternativeLayoutButtonContainer: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: 'white',
      justifyContent: 'space-between',
    },
    white:{
      color:'grey',
      fontSize: 20,
      flex: 1,
      left: 10
    },
});

export default class App extends Component {
  _onPressButton() {
    alert('You tapped the button!')
  }

  onNavigate = () =>{
    this.props.navigation.navigate('InfoScreen')
  }
    
  render() {
     return (
      <Container>
        <Header style={styles.header}>
          <TouchableOpacity
          onPress={this.props.navigation.openDrawer}>
            <Icon name="ios-menu" size={25} color="#333333"  />
          </TouchableOpacity>
    
            <Text style={styles.white}>User settings</Text>

            <TouchableOpacity
            onPress={this.onNavigate.bind(this)}>
              <Text><Icon name="information-circle-outline" size={25} /></Text>
            </TouchableOpacity>
        </Header>

      <View style={{ flex: 1, backgroundColor: 'white', flexDirection: 'column', left: 5 }}>
        <View style={{width: 395, height: 150}}>
          <Text style={styles.black}>The security settings are defining 
          the security level of you software access. The level 'low' is 
          securing the information access by PIN code. The setting 'high' 
          allows you to work with username and password in order to secure your account.</Text>  
        </View>

        <View style={{width: 395, height: 50}}>
          <Text style={styles.greyy}>Security level</Text>  
        </View>

        <View style={{width: 395, height: 50}}>
          <Text style={styles.black}>Your current security level : low (PIN only)</Text>  
        </View>

        <View style={styles.container}>
          <View style={styles.alternativeLayoutButtonContainer}>
            <Button
              onPress={this._onPressButton}
              title="Raise security level"
              type ='outline'
              color='grey'
            />
          </View>
        </View> 
      </View>
    </Container>
  )};
}
  
