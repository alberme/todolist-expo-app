import React, { useState } from 'react';
import { View } from 'react-native';
import { styles } from './styled'
import Item from '../Item';

/**
 * container for todo list screen
 */
const TodoList = () => {
  const [items, setItems] = useState([
    { todo: 'code this app'} ,
    { todo: 'write a good user story' },
    { todo: 'make cool stuff' },
    { todo: 'do it well' },
  ]);
  // const [checked, setChecked] = useState(false);

      /**
   * handler for Alert box onPress
   * @param {boolean} confirmRemove 
   * @param {number} idToRemove 
   */
  const handleConfirmation = (confirmRemove = false, idToRemove) => {
    if (confirmRemove) {
    // remove item from object list!
      const newItems = {};
      // places all entries except for the entry the user wants to remove in a new object
      for (const [key, value] of Object.entries(items)) {
        if (key !== idToRemove) {
          newItems[key] = value;
        }
      }
      // setItems(newItems);
    }

    console.log(`user pressed ${confirmRemove ? 'YES' : 'NO'}`);
    // setChecked(false);
  }
  
  // best practice - use unique id as key (ex: nanoid)
  // last resort - use index as key
  return (
    <View style={styles.container}>
    {
      items.map((item, i)=> (
        <Item key={i} id={i}>{ item.todo }</Item>
      )
    )}
    </View>
  );
}