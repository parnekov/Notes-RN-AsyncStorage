import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import Checkbox from './Checkbox';
import PushNotification from 'react-native-push-notification';

export default class List extends Component {

  pushNotify = (text) => {
    const txt = `You choose - "${text}" note`;
    PushNotification.localNotificationSchedule({
      message: txt, // (required)
      date: new Date(Date.now()),
    });
  }

  renderItem = (item, i) => {
    const {onItemCompleted, onRemoveItem} = this.props
    const itemStyle = item.completed ? [styles.item, styles.completed] : styles.item
    return (
      <TouchableOpacity key={i} style={itemStyle} onPress={()=>this.pushNotify(item.label)}>
        <Text> {item.label} </Text>
        <View style={styles.rightSection}>
        <Checkbox
            isChecked={item.completed}
            onToggle={() => onItemCompleted(i)}/>
          <TouchableOpacity onPress={() => onRemoveItem(i, item.label)}>
            <Text style={styles.remove}> &times; </Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
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