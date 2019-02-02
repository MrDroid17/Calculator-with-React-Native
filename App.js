/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import { StyleSheet, Text, TextInput, View} from 'react-native';

type Props = {};
export default class App extends Component<Props> {

  constructor(){
    super()
    this.state = {
      value: "Edit me"
    }
    this.handleTextChange = this.handleTextChange.bind(this)

  }

  handleTextChange(text){
    this.setState({
      value: text
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          defaultValue={this.state.value}
          onChangeText={this.handleTextChange}
          />
          <Text>You are writing {this.state.value}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }

});
