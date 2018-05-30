import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import FlowerBed from './components/FlowerBed'
import ClearButton from './components/ClearButton'
import FlowerBed from './components/FlowerBed'

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
      buttonShow: false
    }
  }

  increment = () => {
    let count = this.state.count
    count++
    this.setState({
      ...this.state,
      count
    })
    console.log(this.state.count)
  }

  render() {
    return (
      <View style={styles.container}>
        <FlowerBed />
        <ClearButton increment={this.increment} />
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
