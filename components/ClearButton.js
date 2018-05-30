import React, { Component } from 'react'
import { Stylesheet, Text, View } from 'react-native'

const styles = {
  button: {
    flex: 1,
    color: '#ffffff',
    backgroundColor: '#00aff0',
    justifyContent: 'center',
    alignItems: 'center'
  }
}

export default class ClearButton extends Component {
  render() {
    return (
      <View>
        <Text style={styles.button}>Clear</Text>
      </View>
    )
  }
}
