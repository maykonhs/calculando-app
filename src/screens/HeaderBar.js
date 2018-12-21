import React, { Component } from 'react'

import {
  View,
  Switch,
  TouchableOpacity,
  StyleSheet,
  Image
} from 'react-native'

export default class HeaderBar extends Component {
  state = {
    switchValue: false,
    backGroundColor: 'white'
  }

  render() {
    return (
      <View style={styles.container}>
        <Switch
          value={this.state.switchValue}
          onValueChange={() => this.setState({ switchValue: !(this.state.switchValue) })} />
        <TouchableOpacity>
          <Image style={styles.nightModeButton} source={require('../assets/images/night-mode-black.png')} />
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  nightModeButton: {
    width: 50,
    height: 50,
  }
})