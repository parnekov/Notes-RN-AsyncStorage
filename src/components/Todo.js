import React, { Component } from 'react';
import { StyleSheet, View, AppState } from 'react-native';
import { connect } from 'react-redux';
import { addNote, removeItem, itemCompleted, removeCompleted, updateAsyncStorage, getDataFromStorage } from '../actions';

import List from './List'
import Input from './Input';
import Footer from './Footer';
import Header from './Header';

const mapToProps = (state) => {  
  return {
    items: state
  }
}

class Todo extends Component {

  state = {
    appState: AppState.currentState,
  };

  componentWillMount (){
      this.onGetDataFromStorage();
  }

  componentDidMount() {
    AppState.addEventListener('change', this._handleAppStateChange);
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this._handleAppStateChange);
  }

  _handleAppStateChange = (nextAppState) => {
    if (nextAppState === 'background') {
       this.onUpdateAsyncStorage(this.props.items.items);
    }
    this.setState({appState: nextAppState});
  };

  onGetDataFromStorage = () => {
    const { dispatch } = this.props; 
    dispatch(getDataFromStorage());
  }

  onUpdateAsyncStorage = (array) => {
    const { dispatch } = this.props; 
    dispatch(updateAsyncStorage(array));
  }

  onAddTodo = (item) => {
    const { dispatch } = this.props; 
    dispatch(addNote(item));
    }

  onRemoveTodo = (index) => {
    const { dispatch } = this.props; 
    dispatch(removeItem(index));
    }

  onTodoCompleted = (index) => {
    const { dispatch } = this.props; 
    dispatch(itemCompleted(index));
    }

  onRemoveCompleted = () => {
    const { dispatch } = this.props; 
    dispatch(removeCompleted());
    }

  render() {        
    return (
      <View style={styles.container}>
        <Header />
        <Input placeholder={'Type a todo, then hit enter!'} onSubmitEditing={this.onAddTodo} />
        <List items={this.props.items.items} onItemCompleted={this.onTodoCompleted} onRemoveItem={this.onRemoveTodo}/>
        <Footer onDeleteCompleted={this.onRemoveCompleted} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});

export default connect(mapToProps)(Todo);
