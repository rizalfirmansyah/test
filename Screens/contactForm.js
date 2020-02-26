import React, {Component} from 'react';
import {AppRegistry, TextInput, StyleSheet, Text, View} from 'react-native';
import { Button } from 'react-native-elements';

export default class ContactForm extends Component {
  state = {
    subject: '',
    request: '',
    /*buntton: '',*/
  };
  subject = text => {
    this.setState({subject: text});
  };
  request = text => {
    this.setState({request: text});
  };
 /* buntton = Button => {
      this.setState({buntton: Button});
  }*/
  render() {
    return (
      <View>
        <Text>Subject</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => this.setState({text})}
        placeholder='e.q."My Suppor request"'
        value={this.state.text}
        underlineColorAndroid="transparent"
        onChangeText={this.subject}/>

      <Text> Your requst </Text>

      <TextInput 
        style={styles.input2}
        onChangeText={text => this.setState({text})}
        placeholder='enter your concern here'
        value={this.state.text}
        underlineColorAndroid="transparent"
        onChangeText={this.request}/>

     <View style={styles.container}>
          <View style={styles.alternativeLayoutButtonContainer}>
            <Button
              onPress={this._onPressButton}
              title="Send"
              type ='outline'
              color="grey"/>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 23,
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: 'grey',
    borderWidth: 1,
  },
  input2: {
    margin: 15,
    height: 100,
    borderColor: 'grey',
    borderWidth: 1,
  },

  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  alternativeLayoutButtonContainer: {
    margin: 18,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    color: 'grey',
    
    
    
    
    
  },
});
