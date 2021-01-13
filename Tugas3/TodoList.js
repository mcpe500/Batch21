import * as React from 'react';
import { useState } from 'react'
import { Text, View, StyleSheet, Image, ImageBackground, TextInput, TouchableOpacity, FlatList } from 'react-native';
import Constants from 'expo-constants';
import Circle from './Circle.jpg'
// You can import from local files
import AssetExample from './components/AssetExample';
import TodoItem from './components/todoitem'
import AddTodo from './components/addtodo'
// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
import { Icon } from 'react-native-vector-icons'
const App = () => {
  const [todo,setTodo] = useState([
    {text:'membuat login screen',key:'1'},
    {text:'membuat homepage',key:'2'},
  ])
  const pressHandler = (key) => {
    setTodo((prevTodos)=>{
      return prevTodos.filter(todo => todo.key != key);
    });
  }

  const submitHandler = (text) => {
    setTodo((prevTodos)=>{
      return [
        { text: text, key: Math.random().toString()},
        ...prevTodos
      ];
    })
  }

  return (
    <View>
    <View style={{flex: 1,alignItems: 'flex-start',flexDirection: 'row',height:80,paddingTop:38,backgroundColor:'coral'}} >
      <Text style={styles.textStyle}>Masukan Todolist</Text>
    </View>
    <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
      <AddTodo submitHandler={submitHandler} />
      
    </View>
    <View style={styles.list}>
    <FlatList 
      data={todo}
      renderItem={({ item }) => (
        <TodoItem item={item} pressHandler={pressHandler}/>
      )}
    />
    </View>


    

    </View>
  );
}




export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textStyle:{
    fontSize: 20,
    textAlign: 'left',
    fontWeight: 'bold'
  },
  list:{
    padding:40,
    marginTop:10,
  },

});
