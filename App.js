/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { StyleSheet, View, Button, Text, TouchableOpacity } from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  
  constructor() {
    super()
    this.state = {
      calculationText: ''
    }
    this.operations = ['D', '+', '-', '*', '/'];
  }

  result() {
    const text = this.state.calculationText
  }

  onButtonPresses(text) {
    console.log(text);

    // when = is pressed dont print the symbol instead perform corresponding operation
    if (text == '=') {
      return this.result();
    }
    this.setState({
      calculationText: this.state.calculationText + text
    })
  }

  operate(operation) {
    switch (operation) {
      case 'D':
        console.log(this.state.calculationText);
        let text = this.state.calculationText.split('');
        text.pop()
        this.setState({
          calculationText: text.join('')
        })
        break;
      case '+':
      case '-':
      case '*':
      case '/':

      const lastCharacter = this.state.calculationText.split('').pop();

      if(this.operations.indexOf(lastCharacter) > 0) return

      if(this.state.text == '') return

      this.setState({
        calculationText: this.state.calculationText + operation
      })

    }
  }


  render() {

    /**
     * Common number pad button design 
     * for one button
     */
    let rows = [];
    let elements = [[1, 2, 3], [4, 5, 6], [7, 8, 9], ['.', 0, '=']]
    for (let i = 0; i < 4; i++) {
      let row = [];
      for (let j = 0; j < 3; j++) {
        row.push(
          <TouchableOpacity onPress={() => this.onButtonPresses(elements[i][j])} style={styles.btn}>
            <Text style={styles.btnText}>{elements[i][j]}</Text>
          </TouchableOpacity>
        )
      }
      rows.push(
        <View style={styles.numberRow}>{row}</View>
      )
    }
    /**
     * Common operation button design
     */
    let actions = []
    for (let i = 0; i < 5; i++) {
      actions.push(
        <TouchableOpacity style={styles.btn} onPress={() => this.operate(this.operations[i])}>
          <Text style={[styles.btnText, styles.textWhite]}>
            {this.operations[i]}
          </Text>
        </TouchableOpacity>
      )
    }


    return (
      <View style={styles.container}>
        <View style={styles.calculation}>
          <Text style={styles.calculationText}>{this.state.calculationText}</Text>
        </View>
        <View style={styles.result}>
          <Text style={styles.resultText}>196</Text>
        </View>
        <View style={styles.button}>

          <View style={styles.number}>
            {rows}
          </View>

          <View style={styles.operation}>
            {actions}
          </View>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  calculation: {
    flex: 2,
    backgroundColor: 'red',
    justifyContent: "space-around",
    alignItems: "flex-end",
  },
  result: {
    flex: 1,
    backgroundColor: 'orange',
    justifyContent: "space-around",
    alignItems: "flex-end",
  },
  calculationText: {
    fontSize: 28,
    color: 'white',
    marginRight: 10
  },
  resultText: {
    fontSize: 20,
    color: 'white',
    marginRight: 10
  },
  button: {
    flex: 6,
    flexDirection: 'row'
  },
  number: {
    flex: 3,
    backgroundColor: 'yellow'
  },
  operation: {
    flex: 1,
    backgroundColor: 'gray',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  numberRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  btn: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'space-around'

  },
  btnText: {
    fontSize: 28
  },
  textWhite: {
    color: 'white'
  }

});
