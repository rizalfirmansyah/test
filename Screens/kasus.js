import React, {Component} from 'react'
import {Container, Header, Tab, Tabs, View} from 'native-base'
import Tab1 from './messages'
import Tab2 from './Documents'
import Tab3 from './favorites'
import {createDrawerNavigator} from 'react-navigation'
import {StyleSheet, Text, TouchableOpacity} from 'react-native'
import Icon from 'react-native-ionicons'
import Feedback from './feedback'
import UserScreen from './user'

class App extends Component {
  onNavigate = () =>{
    this.props.navigation.navigate('InfoScreen')
}
  render() {
    
    return (
      
      <Container>
        <View style={{flex: 1}}>
          <Header style={styles.header}>
            <TouchableOpacity
              onPress={this.props.navigation.openDrawer}>
              <Icon name="ios-menu" size={25} color="#333333" />
            </TouchableOpacity>
          
            <Text>Psikis kasus effect</Text>

            <TouchableOpacity
            onPress={this.onNavigate.bind(this)}>
              <Text style={styles.instructions}><Icon name="information-circle-outline" size={25} /></Text>
            </TouchableOpacity>
            
          </Header>
          <Tabs>
            <Tab heading="Messages">
              <Tab1 />
            </Tab>
            <Tab heading="Documents">
              <Tab2 />
            </Tab>
            <Tab heading="Favorites">
              <Tab3 />
            </Tab>
          </Tabs>
        </View>
      </Container>
    );
  }
}

const DrawerNavigator = createDrawerNavigator(
  {
    KasusPsikisEffect: App,
    Feedback: Feedback,
    UserSettings: UserScreen,
  },
  {
    drawerBackgroundColor: 'grey',
    contentOptions: {
      activeTintColor: 'grey',
      activeBackgroundColor: 'white',
    },
  }
);

export default DrawerNavigator;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
 
  },
});
