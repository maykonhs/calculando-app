import React, { Component } from 'react'

import {
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  View,
  Text,
  TextInput,
} from 'react-native'

export default class GamePlayScreen extends Component {

  state = {
    operation: '+',
    number: '0',
    total: 0,
    totalResponse: '',
    count: 0,
    msg: '',
    mainText: 'green'
  }

  componentDidMount() {
    const refresh = setInterval(() => {
      let count = this.state.count
      let total = this.state.total
      let newNumber = Math.floor(Math.random() * (10 - 1)) + 1
      newNumber *= Math.floor(Math.random() * 2) == 1 ? 1 : -1
      let randomOperator = ''
      if (newNumber < 0) {
        randomOperator = ''
        this.setState({mainText: 'red'})
      }
      if (newNumber >= 0) {
        randomOperator = '+'
        this.setState({mainText: 'green'})
      }
      this.setState({
        operation: randomOperator,
        number: newNumber,
        total: total + newNumber,
        count: count + 1
      })
      if (count >= 10) {
        stopInterval()
        this.setState({
          operation: '',
          number: '',
          total: total,
          totalResponse: `Resposta: ${total}`,
          userResponse: '',
          msg: 'FIM!'
        })
      }
    }, 2000);
    const stopInterval = () => {
      clearInterval(refresh)
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.msgText}>{`${this.state.msg}`}</Text>
        <Text style={{fontSize: 170, color: `${this.state.mainText}`}}>
          {`${this.state.operation}${this.state.number}`}</Text>
        <Text style={styles.totalText}>{`${this.state.totalResponse}`}</Text>
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
  totalText: {
    fontSize: 50,
    color: 'gray',
  },
  msgText: {
    fontSize: 100,
    color: 'blue',
    textShadowColor: 'black',
    textShadowOffset: { width: 2, height: 2 },
  }
})

GamePlayScreen.navigationOptions = {
  header: null
}
