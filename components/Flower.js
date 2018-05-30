import React, { Component } from 'react'
import { View, StyleSheet, Image, TouchableHighlight } from 'react-native';
import flowerImages from './Images'

export default class Flower extends Component {
  constructor(props) {
    super(props)
    this.state = { show: false }
  }
  onClick = (event) => {
    event.preventDefault()
    console.log('onClick')
    this.setState({
      ...this.state,
      show: !this.state.show
    })
  }
  render() {
    console.log(this.props.imageKey)
    return (
      <View>
        <TouchableHighlight onPress={this.onClick}>
          {
            this.state.show ?
            <Image style={styles.show} source={flowerImages[this.props.imageKey]}/> :
            <Image style={styles.hide} source={flowerImages[this.props.imageKey]}/>
          }
        </TouchableHighlight>
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
