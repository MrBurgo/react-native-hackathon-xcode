import React, { Component } from 'react'
import { Stylesheet, Text, View, TouchableHighlight } from 'react-native'

export default class ClearButton extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight style={styles.button} onPress={this.props.increment}>
          <Text style={styles.buttonText}>Clear</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
    marginBottom: 20,
    marginRight: -10
  },
  button: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#00aff0',
    borderRadius: 7,
    width: 100
  },
  buttonText: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  }
}
