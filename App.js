/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

type Props = {};
export default class App extends Component<Props> {

  constructor() {
    super()
    this.state = {
      value: ""
    }
    this.buttonPress = this.buttonPress.bind(this)

  }

  buttonPress() {
    console.log(this.state.username, this.state.password)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Username</Text>
        <TextInput
          defaultValue={this.state.value}
          onChangeText={text => this.setState({ username: text })}
        />
        <Text>Password</Text>
        <TextInput
          defaultValue={this.state.value}
          onChangeText={text => this.setState({ password: text })}
        />

        <Button title={"Login"} onPress={this.buttonPress} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20
  }

});
