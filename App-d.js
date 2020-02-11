import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground, Button } from 'react-native';
import {Image } from 'react-native';

const styles = StyleSheet.create({
  white:{
    color:'white',
    fontSize: 15,
  },
});
export default class App extends Component {
  render() {
    return (
     <View>
        <ImageBackground
          style={{width: 400, height: 1000, flex: 1}}
          source={{uri: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?cs=srgb&dl=close-up-of-coffee-cup-on-table-312418.jpg&fm=jpg'}}/> 

      <View style={{height: 15}}></View>
        <Text style={{fontSize:30, color:'white', left: 5}}>Enter PIN</Text>
          <View style={{width: 395, height: 50, left: 5}}>
            <Text style={{color:'white'}}>Please enter the 4-digit PIN received by email or SMS message</Text>  
          </View>

        
<View style={{width: 395, height: 500}}>
          <Text style={styles.white}></Text>
        </View>
        <View style={{width: 500, height: 150, paddingStart:130}}>
          <Text style={styles.white}>Request a new PIN</Text>
        </View>
        
      </View>
      

    );
    
  }
}
