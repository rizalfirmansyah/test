import React, {Component} from 'react';
import {AppRegistry, TextInput, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class messages extends Component {
  state = {
    messages: '',
  };
  messages = text => {
    this.setState({message: text});
  };
  render() {
    return (
      <View>
        <TextInput
          style={styles.input}
          onChangeText={text => this.setState({text})}
          placeholder="Write a message.."
          value={this.state.text}
          underlineColorAndroid="transparent"
          onChangeText={this.messages}
        />
        <Text style={styles.input}>HASIL INPUT </Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => messages);

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
  submitButton: {
    backgroundColor: '#7a42f4',
    padding: 10,
    margin: 15,
    height: 40,
  },
  submitButtonText: {
    color: 'white',
  },
});
