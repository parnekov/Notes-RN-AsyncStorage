import React, { Component } from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

export default class Footer extends Component {
  render() {
    const { onDeleteCompleted } = this.props;
    return (
      <TouchableOpacity style={styles.footer} onPress={()=>(onDeleteCompleted())}>
        <Text style={styles.remove}>Remove completed items</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
    footer: {
      paddingVertical: 15,
      alignItems: 'center',
    },
    remove: {
      color: '#CD5C5C',
    },
  })