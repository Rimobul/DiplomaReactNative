/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Button,
  Text,
  View
} from 'react-native';

export default class HelloComponent extends Component {
  constructor(props){
    super(props);

    this.state = {display: true}
  }

  render() {
    return (
      <View>
        <Text>
          {this.state.display ? "Hello world!" : ""}
        </Text>
        <Button
          onPress={() => this.setState({display: !this.state.display})}
          title="Press me!" />
      </View>
    );
  }
}
