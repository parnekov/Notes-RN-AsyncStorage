import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class Header extends Component {
  render() {
    return (
        <View style={styles.header}>
            <Text style={styles.content}>Notes Redux + AsyncStorage</Text>
        </View>
    )
  }
}

const styles = StyleSheet.create({
    header: {
      height: 50,
      backgroundColor: 'red'
    },
    content:{
      textAlign: 'center',
      paddingTop: 10,
      fontSize: 24,  
      color: 'white'
    }
  })