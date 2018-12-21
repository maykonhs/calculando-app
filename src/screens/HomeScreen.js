import { createStackNavigator, createAppContainer } from 'react-navigation';

import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions
} from 'react-native';

class HomeScreen extends Component {

  state = {
    switchValue: false,
    switchText: 'pt-BR'
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('GamePlay')}>
            <Text style={styles.btnPlay}>JOGAR</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footerHome}>
          <TouchableOpacity>
            <Image style={styles.footerButtons} source={require('../assets/images/ranking.png')} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={styles.footerButtons} source={require('../assets/images/cart.png')} />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const fullWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: fullWidth,
    backgroundColor: '#FFFAFA'
  },
  btnPlay: {
    fontWeight: 'bold',
    fontSize: 50,
    textShadowColor: 'black',
    textShadowOffset: { width: 2, height: 2 },
    marginBottom: 50,
    color: '#DAA520'
  },
  footerHome: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 70
  },
  footerButtons: {
    width: 70,
    height: 70,
    margin: 30,
  },
})

HomeScreen.navigationOptions = {
  header: null
}

export default HomeScreen;
