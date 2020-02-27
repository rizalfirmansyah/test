import React, { Component } from 'react'
import {StyleSheet, View, Image, Text, TextInput,} from 'react-native'

const styles = StyleSheet.create({
  bold: {
    fontWeight: 'bold',
    left: 5,
  },
  normal: {
    fontStyle: 'normal',
  left: 5,
},
  underline: {
    textDecorationLine: 'underline',
    left: 5,
  },
});

export default class App extends Component {
  render(){
    return(
      <View style={{ flex: 1, backgroundColor: 'white', flexDirection: 'column' }}>
          <Text style={styles.underline}>Details of your case</Text>
        <View style={{ flex: 1, backgroundColor: 'white', flexDirection: 'column' }}>
        </View>
        
          <View >
            <Text style={styles.bold}>123456</Text>
              <TextInput  
                style={styles.inputText}
                placeholder='kasus psikis effect'
                placeholderTextColor='grey'
                onChangeText={text => this.setState({email:text})}/> 
            <Text style={styles.normal}>Accustomed by</Text>
          </View>

          <View style={{ height: '100%', fontSize: '30', backgroundColor: 'white',  alignItems: 'baseline' }}>
            <View style={{ flexDirection: 'row', flex:1, margin: 10 }}>
              <View style={{ width: 120, height: 210, backgroundColor: '#C0C0C0', justifyContent: 'flex-start' }} >
                <Text style={{fontSize: 10, textAlign: 'right', color: '#fff'}}> PT. Asclar Indonesia </Text>
                <Image
                  style={{width: 60, height: 20}}
                  source={{uri: 'https://asclar.co.id/themes/asclar/assets/images/logo.png'}}/>
              </View>


          <View style={{ width: 210, height: 210, backgroundColor: '#D3D3D3', justifyContent: 'center'}} >
            <Text style={{fontSize: 10, textAlign: 'right', color: '#fff'}}> Ir. Rizal Firmansyah </Text>
            <Text style={{fontSize: 10, textAlign: 'right', color: '#fff'}}> Phone: </Text>
          </View>
            </View>

              <View style={{flex: 2, justifyContent: 'flex-start' }} >
                <Text style={styles.normal}>Created on</Text>
                <Text style={styles.bold}>2/5/2020</Text>
              </View>

            </View>  
       </View>
    
     
    )
  }
}
