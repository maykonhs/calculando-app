import React from 'react';

import {
  View,
  Dimensions,
  StyleSheet
} from 'react-native'

import { createAppContainer, createStackNavigator } from 'react-navigation';

import HomeScreen from './src/screens/HomeScreen'
import GamePlayScreen from './src/screens//GamePlayScreen'

const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    GamePlay: {
      screen: GamePlayScreen,
    },
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

const fullWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: fullWidth,
  }
})

export default class App extends React.Component {
  render() {
    return (
      <AppContainer />
    );
  }
}