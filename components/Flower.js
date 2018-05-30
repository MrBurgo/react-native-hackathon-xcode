import React, { Component } from 'react'
import { View, StyleSheet, Image } from 'react-native';

export default class Flower extends Component {
  constructor(props) {
    super(props)
    this.state = { show: false }
  }
  onClick = (event) => {
    event.preventDefault()
    this.setState({
      ...this.state,
      show: !this.state.show
    })
  }
  render() {
    return (
      <View>
        {
          !this.state.show ?
          <Image style={styles.show} source={{uri: `/assets/${this.props.imageFile}`}}/> :
          <Image style={styles.hide} source={{uri: `/assets/${this.props.imageFile}`}}/>
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  show: {
    backgroundColor: "transparent",
    height: 60,
    width: 60,
    opacity: 1.0
  },
  hide: {
    backgroundColor: "transparent",
    height: 60,
    width: 60,
    opacity: 0
  }
});
