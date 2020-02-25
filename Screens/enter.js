import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';


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
    this.props.navigation.navigate('KasusScreen')
}
  render() {

    return (
      <View
        style={{
          flex: 1,

        }}
      >
        <View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
        >
          <Image
            style={{
              flex: 1,
             
            }}
            source={{ uri: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?cs=srgb&dl=close-up-of-coffee-cup-on-table-312418.jpg&fm=jpg' }}
          />
        </View>
        <View style={{height: 15}}></View>
        <Text style={{fontSize:30, color:'white', left: 5}}>Enter PIN</Text>
          <View style={{width: 395, height: 50, left: 5}}>
            <Text style={{color:'white'}}>Please enter the 4-digit PIN received by email or SMS message</Text>  
          </View>
          <View style={{width: 395, height: 100}}>
          <Text style={styles.white}></Text>
        </View> 
        
          <TouchableOpacity style={styles.button}onPress={this.onNavigate.bind(this)}>
          <Text style ={styles.buttonText}>PIN</Text>
        </TouchableOpacity>
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            justifyContent: 'flex-end',
          }}
          >

        </View>
      </View>
    );
  }
}

AppRegistry.registerComponent('BackgroundImage', () => BackgroundImage);