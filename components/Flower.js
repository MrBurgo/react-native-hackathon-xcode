import React, { Component } from 'react'
import { View, StyleSheet, Image, TouchableHighlight } from 'react-native';
import flowerImages from './Images'

export default class Flower extends Component {
  constructor(props) {
    super(props)
    this.state = { show: false }
  }
  randomLeft(index) {
    let num = Math.floor(((Math.random() * 2) - 1.5) * 200)
    console.log(num)
    return num
  }
  randomTop(index) {
    let num = Math.floor(Math.random() * 650)
    console.log(num)
    return num
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
    return (
      <View>
        <TouchableHighlight onPress={this.onClick}>
          {
            !this.state.show ?
            <Image style={[styles.show, { position: 'absolute', left: this.randomLeft(this.props.index), top: this.randomTop(this.props.index) }]} source={flowerImages[this.props.imageKey]}/> :
            <Image style={[styles.hide, { position: 'absolute', left: this.randomLeft(this.props.index), top: this.randomTop(this.props.index) }]} source={flowerImages[this.props.imageKey]}/>
          }
        </TouchableHighlight>
      </View>
    )
  }
}

let styles = StyleSheet.create({
  show: {
    backgroundColor: "transparent",
    height: 150,
    width: 150,
    opacity: 1.0
  },
  hide: {
    backgroundColor: "transparent",
    height: 150,
    width: 150,
    opacity: 0
  }
});
