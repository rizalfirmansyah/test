import React, { Component } from "react";
import { Container, Header, Content, Icon, Accordion, Text, View , StyleSheet} from "native-base";
import Contact from './contact';
import ContactForm from './contactForm'
import TeamViewer from './teamviewer';
import { TouchableOpacity } from "react-native";


const dataArray = [
  { title: "First Element", content: "Lorem ipsum dolor sit amet" },
  { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
  { title: "Third Element", content: "Lorem ipsum dolor sit amet" }
];



export default class AccordionCustomHeaderContent extends Component {

  constructor(props){
    super(props)
    this.state = {
      ContactFormState: false,
      ContactState: false,
      TeamViewerState: false
     
    }
  }

  select = (item) => {
    if(this.state.ContactFormState == false){
      this.setState({ ContactFormState: true })
    }
    if(this.state.ContactFormState == true){
      this.setState({ ContactFormState: false })
    }
    
   
  }

  select1 = (item) => {
    if(this.state.ContactState == false){
      this.setState({ ContactState: true })
    }
    if(this.state.ContactState == true){
      this.setState({ ContactState: false })
    }
    
   
  }

  select2 = (item) => {
    if(this.state.TeamViewerState == false){
      this.setState({ TeamViewerState: true })
    }
    if(this.state.TeamViewerState == true){
      this.setState({ TeamViewerState: false })
    }
    
   
  }
  


  ContactFormView = () => {
    if(this.state.ContactFormState == true){
      return <ContactForm />
    }
    
  }
  ContactView = () => {
    if(this.state.ContactState == true){
      return <Contact />
    }
    
  }
TeamViewerView = () =>
{
  if(this.state.TeamViewerState == true){
    return <TeamViewer />
  }
}

 
  render() {
    return (
      <Container>
        <Header />
        <Content padder style={{ backgroundColor: "white" }}>
        
          <TouchableOpacity onPress={this.select.bind(this)}>
              <Text>Contact form </Text>
            
            
          </TouchableOpacity>
          {this.ContactFormView()}
          <TouchableOpacity onPress={this.select1.bind(this)}>
            <Text> Contact</Text>
           
          </TouchableOpacity>
          {this.ContactView()}
          <TouchableOpacity onPress={this.select2.bind(this)}> 
            <Text>TeamViewer</Text>
          </TouchableOpacity>
          {this.TeamViewerView()}
        </Content>
      </Container>
    );
  }
}

