import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import Checkbox from './Checkbox';

export default class List extends Component {

  renderItem = (item, i) => {
    const {onItemCompleted, onRemoveItem} = this.props
    const itemStyle = item.completed ? [styles.item, styles.completed] : styles.item
    return (
      <View key={i} style={itemStyle}>
        <Text> {item.label} </Text>
        <View style={styles.rightSection}>
        <Checkbox
            isChecked={item.completed}
            onToggle={() => onItemCompleted(i)}/>
          <TouchableOpacity onPress={() => onRemoveItem(i)}>
            <Text style={styles.remove}> &times; </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

    render() { 
      return (
        <ScrollView style={styles.container}>
           {this.props.items.map(this.renderItem)}
         </ScrollView>
      );
    }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'whitesmoke',
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  remove: {
    marginLeft: 10,
    marginBottom: 2,
    color: '#CD5C5C',
    fontSize: 26,
  },
  completed: {
    backgroundColor: 'whitesmoke',
  },
});