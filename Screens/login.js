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
    this.props.navigation.navigate('GainScreen')
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
        <Image
          style={{width: 30, height: 20 }}
          source={{uri: 'https://i.pinimg.com/236x/02/c4/7f/02c47fb765758bcf1782f95f32823662.jpg'}}></Image>
        <Text style={{fontSize:30, color:'white', left:5}}>WebAkte</Text>
        <Text style={{fontSize:25, color:'white', left:5}}>ClientView</Text>
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            justifyContent: 'flex-end',
          }}
          
        >
          <TouchableOpacity style={styles.button} onPress={this.onNavigate.bind(this)}>
          <Text style ={styles.buttonText}>Let's Go</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonn}>
          <Text style ={styles.buttonnText}>Imprint.Privacy.</Text>
        </TouchableOpacity>

        </View>
      </View>
    );
  }
}

AppRegistry.registerComponent('BackgroundImage', () => BackgroundImage);