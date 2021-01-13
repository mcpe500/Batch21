import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Button, View, TouchableOpacity, Image} from 'react-native';

export default function AddTodo({ submitHandler }){
  const [text,setText] = useState('');

  const changeHandler = (val) => {
    setText(val);
  }

  return (
    <View style={{flex:1,flexDirection:'row'}}>
      <TextInput 
        placeholder='Input Here'
        onChangeText={changeHandler}
        style={styles.input}
      />
      <TouchableOpacity style={{width:50,height:50}} onPress={()=>submitHandler(text)} >
        <Image source={{uri:'https://i.ibb.co/bzw1x1H/Plus-Button.png'}} style={{width:50,height:50}} />
      </TouchableOpacity>
    </View>
  )

}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,width:250,height:50
  }
})