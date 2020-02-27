import React, { Component } from 'react';
import {AppRegistry, Image, View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  white:{
    color:'white',
    fontSize: 15,
  },
  button:{
    backgroundColor: 'grey',
    opacity: 0.5,
    borderRadius: 3,
    marginVertical: 7,
    paddingVertical: 12,
    justifyContent: 'center'
  },
  buttonn:{
    backgroundColor: 'transparent',
    borderRadius: 3,
    marginVertical: 7,
    paddingVertical: 12,
    justifyContent: 'center'
  },
  buttonnText:{
    fontSize: 15,
    color: 'white',
    textAlign: 'auto',

  },
  buttonText:{
    fontSize: 15,
    color: 'white',
    textAlign: 'center',
  }
});

export default class App extends Component {
  onNavigate = () =>{
    this.props.navigation.navigate('EnterScreen')
  }
  
  render() {

    return (
      <View
        style={{
          flex: 1,
        }}>

        <View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}>

          <Image
            style={{
              flex: 1,
            }}
            source={{ uri: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?cs=srgb&dl=close-up-of-coffee-cup-on-table-312418.jpg&fm=jpg' }}/>
        </View>

        <View style={{height: 15}}></View>
        <Text style={{fontSize:30, color:'white'}}>Gain access</Text>
          <View style={{width: 395, height: 50}}>
            <Text style={{color:'white'}}>Benefit from the advantages of,,ClientView" and take your communication to the next level.</Text>  
          </View>

          <View style={{width: 395, height: 50}}>
            <Text style={{color:'white'}}>Request yout PIN easily and conveneniently by email.</Text>  
          </View>
        
          <TouchableOpacity style={styles.button}onPress={this.onNavigate.bind(this)}>
          <Text style ={styles.buttonText}>Request PIN</Text>
          </TouchableOpacity>
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            justifyContent: 'flex-end',
          }}>
            
          <View style={{justifyContent: 'flex-end', flex: 1, alignItems: 'center'}}>
          <Text style={styles.white}>back</Text>
          </View>
        </View>
      </View>
    );
  }
}

AppRegistry.registerComponent('BackgroundImage', () => BackgroundImage);