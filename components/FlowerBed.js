import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native';
import Flower from './Flower'
import flowerImages from './Images'

class FlowerBed extends Component {
  constructor(props) {
    super(props)
    this.state = { flowers: [] }
  }
  componentWillMount() {
    this.setState({
      ...this.state,
      flowers: this.randomizeFlowers(10)
    })
  }
  componentWillReceiveProps(newProps) {
    this.componentWillMount()
  }
  pickFlower() {
    const keys = Object.keys(flowerImages)
    return keys[Math.floor(Math.random() * keys.length)]
  }
  randomizeFlowers(total) {
    const flowerArray = []
    for (let i = 0; i < total; i++) {
      flowerArray.push(this.pickFlower())
    }
    return flowerArray
  }
  renderFlower(flower, index) {
    return (
      <Flower key={ index } imageKey={ flower } />
    )
  }
  render() {
    return (
      <View style={styles.container}>
        { this.state.flowers.map(this.renderFlower) }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#F5FCFF',
  }
})

export default FlowerBed
