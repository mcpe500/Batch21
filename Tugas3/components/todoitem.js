import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

export default function TodoItem({ item }) {

  return (
    <TouchableOpacity>
      <Text style={styles.item}>{item.text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  item:{
    padding: 16,
    marginTop: 16,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 10,
  }
})