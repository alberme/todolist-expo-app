import React, { useState } from 'react';
import { View } from 'react-native';
import { styles } from './styled'
import Item from '../Item';

/**
 * container for todo list screen
 */
const TodoList = () => {
  const [items, setItems] = useState([
    { todo: 'code this app' },
    { todo: 'write a good user story' },
    { todo: 'make cool stuff' },
    { todo: 'do it well' },
  ]);

  /**
  * handler for Alert box onPress
  * @param {boolean} confirmRemove 
  * @param {number} idToRemove 
  */
  const handleConfirmation = (confirmRemove = false, idToRemove) => {
    if (confirmRemove) {
      // remove item from list!
      const updatedTodoList = items.filter( (item, id)=> id !== idToRemove );
      setItems(updatedTodoList);
    }

    console.log(`user pressed ${confirmRemove ? 'YES' : 'NO'}`);
  }

  // best practice - use unique id as key (ex: nanoid)
  // last resort - use index as key
  return (
    <View style={styles.container}>
      {
        items.map((item, i) => (
          <Item
            key={i}
            id={i}
            onConfirmation={handleConfirmation}
          >
            {item.todo}
          </Item>
        )
        )}
    </View>
  );
}

export default TodoList;