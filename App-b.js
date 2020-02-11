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
        <View>
          <View style={{flexDirection: 'row'}}/>

        <Image
          style={{width: 40, height: 25 }}
          source={{uri: 'https://i.pinimg.com/236x/02/c4/7f/02c47fb765758bcf1782f95f32823662.jpg'}}
        />

        <Text style={{fontSize:30, color:'white'}}>AMA Coffee Shop</Text>
        <Text style={{fontSize:25, color:'white'}}>since 2022</Text>
        </View>

        
        <Button View
      title="Let's Go"
      type ='outline'
      color='grey' />
      <View style={{width: 395, height: 50}}>
      <Text style={styles.white}>Imprint . Privacy</Text>
        </View>
      </View>
      

    );
  }
}
