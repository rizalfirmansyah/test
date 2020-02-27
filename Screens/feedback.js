import React, {Component} from 'react'
import {Container, Header, Content, Accordion, Icon} from 'native-base'
import TeamViewer from './teamviewer'
import Contact from './contact'
import ContactForm from './contactForm'
import {View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';

export default class AccordionExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      statepertama: false, 
      statekedua: false,
      stateketiga: false,
    };
  }

  viewContactForm = () => {
    if (this.state.statepertama == true) {
      return <ContactForm />;
    }
  };
  viewTeamViewer = () => {
    if (this.state.statekedua == true) {
      return <TeamViewer />;
    }
  };
  viewContact = () => {
    if (this.state.stateketiga == true) {
      return <Contact />;
    }
  };

  pressMe = () => {
    if (this.state.statepertama == false) {
      this.setState({statepertama: true});
    }
    if (this.state.statepertama == true) {
      this.setState({statepertama: false});
    }
  };

  pressMe1 = () => {
    if (this.state.statekedua == false) {
      this.setState({statekedua: true});
    }
    if (this.state.statekedua == true) {
      this.setState({statekedua: false});
    }
  };

  pressMe2 = () => {
    if (this.state.stateketiga == false) {
      this.setState({stateketiga: true});
    }
    if (this.state.stateketiga == true) {
      this.setState({stateketiga: false});
    }
  };

  onNavigate = () =>{
    this.props.navigation.navigate('InfoScreen')
}
  render() {
   
        // let icon = this.icons['open'];
        // if(this.state.expanded){
        //     icon = this.icons['close'];
        // }
    return (
      // <Container>
      //   <Header />
      //   <Content padder>
      //     <Accordion dataArray={dataArray} expanded={0} />
      //   </Content>
      // </Container>
    
      <View>
        <Header style={styles.header}>
          <TouchableOpacity
          onPress={this.props.navigation.openDrawer}>
            <Icon name="ios-menu" size={25} color="#333333"  />
          </TouchableOpacity>
    
        <Text style={styles.white}>Technical Support</Text>

          <TouchableOpacity
          onPress={this.onNavigate.bind(this)}>
            <Text><Icon name="information-circle-outline" size={25} /></Text>
          </TouchableOpacity>
        </Header>
        
        <View style={{borderWidth: 1, margin: 10, borderColor: 'grey'}}>
          <Button onPress={this.pressMe.bind(this)} title="Contact Form" type ='outline'
              color='darkgrey' >
            {this.state.statepertama}
          </Button>
          {this.viewContactForm()}
        </View>

        <View style={{borderWidth: 1, margin: 10, borderColor: 'grey'}}>
          <Button onPress={this.pressMe1.bind(this)} title="Team Viewer" type ='outline'
              color='darkgrey'>
            {this.state.statekedua}
          </Button>
          {this.viewTeamViewer()}
        </View>

        <View style={{borderWidth: 1, margin: 10, borderColor: 'grey'}}>
          <Button onPress={this.pressMe2.bind(this)} title="Contact" type ='outline'
              color='darkgrey' >
            {this.state.stateketiga}
          </Button>
          {this.viewContact()}
        </View>
      </View>
    );
  }
}

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
    left: 10
  },
});
