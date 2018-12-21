import { createStackNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from './screens/HomeScreen'
import GamePlayScreen from './screens/GamePlayScreen'

const StackNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    GamePlay: GamePlayScreen
  }
);

const AppContainer = createAppContainer(StackNavigator);

/* 
const TabNavigator = createMaterialTopTabNavigator(
  {
    GamePlay: StockScreen,
    Tecidos: FabricScreen
  },
  {
    tabBarOptions: {
      activeTintColor: '#FFF',
      inactiveTintColor: '#CCC',
      tabStyle: {
        backgroundColor: '#000080'
      },
      labelStyle: {
        fontSize: 30,
        fontFamily: 'Caviar Dreams',
      }
    }
  });

const DrawerNavigator = createDrawerNavigator(
  {
    GamePlay: StockScreen,
    Tecidos: FabricScreen
  }
); */

export default AppContainer;
