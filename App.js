/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';

type Props = {};
export default class App extends Component<Props> {

  constructor() {
    super()
    this.state = {}
  }


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.calculation}>
        <Text style={styles.calculationText}>14*14</Text>
        </View>
        <View style={styles.result}>
        <Text style={styles.resultText}>196</Text>
        
        </View>
        <View style={styles.button}>

          <View style={styles.number}>
            <View style={styles.numberRow}>
              <Button title={"0"} />
              <Button title={"0"} />
              <Button title={"0"} />
            </View>
            <View style={styles.numberRow}>
              <Button title={"0"} />
              <Button title={"0"} />
              <Button title={"0"} />
            </View>
            <View style={styles.numberRow}>
              <Button title={"0"} />
              <Button title={"0"} />
              <Button title={"0"} />
            </View>
            <View style={styles.numberRow}>
              <Button title={"0"} />
              <Button title={"0"} />
              <Button title={"0"} />
            </View>
          </View>

          <View style={styles.operation}>
            <Button title={"+"} />
            <Button title={"+"} />
            <Button title={"+"} />
            <Button title={"+"} />
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
    backgroundColor: 'cyan',
    justifyContent: 'space-around',
    alignItems:'center'
  },
  numberRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  }

});
