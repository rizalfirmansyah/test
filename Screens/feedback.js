import React, { Component } from "react";
import { Container, Header, Content, Accordion } from "native-base";
import Icon from 'react-native-ionicons';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const dataArray = [
  { title: "First Element", content: "Lorem ipsum dolor sit amet" },
  { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
  { title: "Third Element", content: "Lorem ipsum dolor sit amet" }
];

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },

  white:{
    color:'black',
    fontSize: 20,
    flex: 1,
  },

});
export default class AccordionExample extends Component {
  render() {
    return (
      <Container>
        <Header style={styles.header}>
        <TouchableOpacity
        onPress={this.props.navigation.openDrawer}>
        <Icon name="ios-menu" size={25} color="#333333"  />
      </TouchableOpacity>
    
      <Text style={styles.white}>Technical Support</Text>

      <TouchableOpacity>
        <Text><Icon name="information-circle-outline" size={25} /></Text>
      </TouchableOpacity>
       </Header>

        <Content padder>
          <Accordion dataArray={dataArray} expanded={0}/>
        </Content>
      </Container>
    );
  }
}