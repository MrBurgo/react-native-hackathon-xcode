import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import FlowerBed from './components/FlowerBed'
import ClearButton from './components/ClearButton'

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = {
      hideAll: true
    }
  }

  clearFlowers = () => {
    this.setState({
      ...this.state,
      hideAll: true
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <FlowerBed hideAll={this.state.hideAll}/>
        <ClearButton clearFlowers={this.clearFlowers} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
