import React, { useState } from 'react';
import { View } from 'react-native';
import { styles } from 'styled.js'
import Item from '../Item';
/**
 * container for todo list screen
 */
const TodoList = () => {
  const [items, setItems] = useState([
    { id: 1, todo: 'code this app'} ,
    { id: 2, todo: 'write a good user story' },
    { id: 3, todo: 'make cool stuff' },
    { id: 4, todo: 'do it well' },
  ]);
  const [checked, setChecked] = useState(false);
  
  // best practice - use unique id as key (ex: nanoid)
  // last resort - use index as key
  return (
    <View style={styles.container}>
    {
      items.map((item, i)=> (
        <Item key={i} id={i++}>item.todo</Item>
      )
    )}
    </View>
  );
}