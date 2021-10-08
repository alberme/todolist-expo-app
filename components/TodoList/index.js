import React, { useState } from 'react';
import { View, Platform, ScrollView } from 'react-native';
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

 /**
  * @todo: expand this predicate to trim() extra whitespaces in between words,
  * check empty string, single/double quotes,
  * illegal characters to prevent database injection, etc.
  * @param {string} inputFieldText
  */
  const checkInputFieldText = (inputFieldText) => {
    // trim blank spaces around, convert to lowercase
    let cleanedText = inputFieldText.trim().toLowerCase();
    // checks for illegal characters
    if ( !(/^[a-zA-Z0-9- ]*$/.test(cleanedText)) ) {
      return { error: 'Only letters and numbers are allowed 🚫' };
    }
    // checks if string length is 0
    if (cleanedText.length === 0) {
      return { error: 'That input is blank! 🚫' };
    }
    // checks each todo list item for duplicates
    const isNotDuplicate = items.every(item => item.todo.toLowerCase() !== cleanedText)
    return isNotDuplicate
      ? { success: 'Item added to your todo list ✅' }
      : { error: 'That todo list item is a duplicate 🚫' };
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
    const itemTextStatus = checkInputFieldText(newTodo);

    if (itemTextStatus.success) {
      const newTodoList = [ ...items, {todo: newTodo} ];
      setItems(newTodoList);
    }

    setInputFieldStatus(itemTextStatus);
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
      <ScrollView style={styles.scroll}>
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
      </ScrollView>
      <InputField
        onEnter={handleInputOnEnter}
        status={inputFieldStatus}
      />
    </View>
  );
}

export default TodoList;