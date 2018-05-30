import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native';
import Flower from './Flower'

const flowerImages = [
  'apple_tree_flower.jpg', 'gerbera.jpg', 'lilac.jpeg', 'pansy.jpg',
  'white_flower.png', 'daffadil.jpeg', 'orchid.jpeg', 'red_rose.jpg',
  'white_daisy.png', 'yellow_rose.jpeg']

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
  pickFlower() {
    return flowerImages[Math.floor(Math.random() * flowerImages.length)]
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
      <Flower key={ index } imageFile={ flower } />
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
