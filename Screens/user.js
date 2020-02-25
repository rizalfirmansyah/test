import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground, Button } from 'react-native';
import {Image } from 'react-native';

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
    }
  });


  export default class App extends Component {
    _onPressButton() {
      alert('You tapped the button!')
    }
  
    render() {
      return (
        <View style={{ flex: 1, backgroundColor: 'white', flexDirection: 'column', left: 5 }}>
        <Text style={styles.grey}>User settings</Text>
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
    )};
      
  }
  
