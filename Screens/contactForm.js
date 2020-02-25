import React, {Component} from 'react';
import {AppRegistry, TextInput, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
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
        <Text>subject</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => this.setState({text})}
        placeholder='e.q."My Suppor request"'
        value={this.state.text}
        underlineColorAndroid="transparent"
        onChangeText={this.subject}
      />
      <Text> your requst </Text>
      <TextInput 
        style={styles.input2}
        onChangeText={text => this.setState({text})}
        placeholder='enter your concern here'
        value={this.state.text}
        underlineColorAndroid="transparent"
        onChangeText={this.request}
      />
     <View>
     <Button
  title="Send"
  type="outline"
/>

     </View>
      </View>
    );
  }
}

AppRegistry.registerComponent('aplikasi-belajar', () => ContactForm);

const styles = StyleSheet.create({
  container: {
    paddingTop: 23,
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: '#7a42f4',
    borderWidth: 1,
  },
  input2: {
    margin: 15,
    height: 100,
    borderColor: '#7a42f4',
    borderWidth: 1,
  },
  submitButton: {
    backgroundColor: 'white',
    padding: 10,
    margin: 15,
    height: 40,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  submitButtonText: {
    color: 'white',
  },
});
