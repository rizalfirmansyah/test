import React from 'react';
import { createStackNavigator } from 'react-navigation'; // Version can be specified in package.json
import LoginScreen from './Screens/login'
import GainScreen from './Screens/gain'
import EnterScreen from './Screens/enter'
import DrawerNavigator from './Screens/drawers'
import KasusScreen from './Screens/kasus'

// class HomeScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Home Screen</Text>
//         <Button
//           title="Go to Details"
//           onPress={() => this.props.navigation.navigate('Details')}
//         />
//       </View>
//     );
//   }
// }

// class DetailsScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Details Screen</Text>
//       </View>
//     );
//   }
// }

const RootStack = createStackNavigator(
  {
    LoginScreen: LoginScreen,
    GainScreen: GainScreen,
    EnterScreen: EnterScreen,
    DrawerNavigator: DrawerNavigator,
    KasusScreen: KasusScreen,
  },
  {
    initialRouteName: 'LoginScreen',

  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
