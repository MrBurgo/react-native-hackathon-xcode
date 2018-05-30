import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import Flower from './Flower'
import flowerImages from './Images'

export default class FlowerBed extends Component {
  constructor(props) {
    super(props)
    this.state = {
      flowers: []
    }
  }
  componentWillMount() {
    this.setState({
      ...this.state,
      flowers: this.randomizeFlowers(10)
    })
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
  // randomLeft() {
  //   let num
  //   for (let i = 0; i < this.state.flowers.length; i++) {
  //     num = Math.floor(((Math.random() * 2) - 1) * 100)
  //     if (!randomArr.includes(num - 5) && !randomArr.includes(num + 5)) {
  //       randomArr[i] = num
  //     } else {
  //       if (num < (100 - 6)) {
  //         randomArr[i] = num + 5
  //       } else {
  //         randomArr[i] = num - 5
  //       }
  //     }
  //   }
  //   return randomArr
  // }
  render() {
    return (
      <View style={styles.container}>
        {
          this.state.flowers.map((flower, index) => {
            return (
              <Flower key={ index } imageKey={ flower } index={ index } flowers={ this.state.flowers } />
            )
          })
        }
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
