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
      flowers: this.randomizeFlowers()
    })
  }
  pickFlower() {
    return flowerImages[Math.floor(Math.random() * flowerImages.length)]
  }
  randomizeFlowers(total) {
    // const flowerArray = []
    // for (let i = 0; i < total; i++) {
    //   flowerArray.push(this.pickFlower())
    // }
    // return flowerArray
    return Object.keys(flowerImages)
  }
  renderFlower(flower, index) {
    return (
      <Flower key={ index } imageKey={ flower } />
    )
  }
  render() {
    return (
      <View >
        { this.state.flowers.map(this.renderFlower) }
      </View>
    )
  }
}

export default FlowerBed
