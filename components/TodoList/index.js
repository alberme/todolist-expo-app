import React, { useState } from 'react';
import { View, Platform } from 'react-native';
import { Text as RNEText } from 'react-native-elements';

import { styles } from './styled'
import Item from '../Item';
import InputField from '../InputField';
import BrowserDialog from '../BrowserDialog';

const TodoList = () => {
  const [items, setItems] = useState([
    { todo: 'code this app' },
    { todo: 'write a good user story' },
    { todo: 'make cool stuff' },
    { todo: 'do it well' },
  ]);
  const [inputFieldStatus, setInputFieldStatus] = useState({});
  const [showDialog, setShowDialog] = useState(false);
  const [selectedId, setSelectedId] = useState(-1);

 /* @todo: expand this predicate to trim() extra whitespaces
  check empty string, single/double quotes,
  illegal characters to prevent database injection, etc.
  */
  const checkInputFieldText = (inputFieldText) => {
    return items.every(item => item.todo.toLowerCase() !== inputFieldText.toLowerCase())
  }

 /**
  * handler for Alert box onPress
  * @param {boolean} confirmRemove 
  * @param {number} idToRemove 
  */
  const handleDialogResponse = (confirmRemove) => {
    if (confirmRemove) {
      console.log(`selectedId is ${selectedId}`);

      // remove item from list!
      const updatedTodoList = items.filter( (item, id)=> id !== selectedId );
      setItems(updatedTodoList);
    }
    setShowDialog(false);
    setSelectedId(-1);

    console.log(`user pressed ${confirmRemove ? 'YES' : 'NO'}`);
  }

 /**
  * handles checkbox press on item in todo list
  * @param {number} itemId 
  */
  const handleCheckboxPress = (itemId) => {
    setSelectedId(itemId);
    
    if (Platform.OS === 'web') {
      // setShowDialog here to render a web dialog
      setShowDialog(true);
    } else {
      Alert.alert(
        "Confirm",
        "Remove this entry?",
        [
          { text: "Yes", onPress: () => handleDialogResponse(true), style: "destructive" },
          { text: "NOOO", onPress: () => handleDialogResponse(false), style: "default" },
        ]
      );
    }
  }

  /**
   * handler for input field onEnter
   * @param {string} newTodo
   */
  const handleInputOnEnter = (newTodo) => {
    const itemTextIsValid = checkInputFieldText(newTodo);

    if (itemTextIsValid) {
      const newTodoList = [ ...items, {todo: newTodo} ];
      setItems(newTodoList);
    }

    setInputFieldStatus(
      itemTextIsValid
        ? { success: 'Item added to your todo list ✅' }
        : { error: 'That todo list item is a duplicate 🚫' }
    );
  }

  // best practice - use unique id as key (ex: nanoid)
  // last resort - use index as key
  return (
    <View style={styles.container}>
      {
        showDialog
          ? <BrowserDialog
              onResponse={handleDialogResponse}
              message={ `Remove this entry?\n\n${items[selectedId].todo}` }
            />
          : null
      }
      <RNEText
        h3
        h3Style={styles.title}
      >
        My Todo List
      </RNEText>
      {
        items.map((item, i) => (
          <Item
            key={i}
            id={i}
            onCheckboxPress={handleCheckboxPress}
          >
            {item.todo}
          </Item>
        ))
      }
      <InputField
        onEnter={handleInputOnEnter}
        status={inputFieldStatus}
      />
    </View>
  );
}

export default TodoList;