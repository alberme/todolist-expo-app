import React, { useState, useRef } from 'react';
import { View, Platform, ScrollView, KeyboardAvoidingView, Alert } from 'react-native';
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
  const [browserDialog, setBrowserDialog] = useState({ show: false, selectedId: -1 });
  const [inputFieldStatus, setInputFieldStatus] = useState({});
  const scrollView = useRef(null);

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
  * called when user presses a button in popup dialog
  * @listens onPress Alert
  * @listens onResponse BrowserDialog
  * @param {boolean} confirmRemove
  * @param {number} idToRemove
  */
  const handleDialogResponse = (confirmRemove, idToRemove) => {
    if (confirmRemove) {
      // remove item from list!
      const updatedTodoList = items.filter( (item, id)=> id !== idToRemove );
      setItems(updatedTodoList);
    }
    if (Platform.OS === 'web') {
      setBrowserDialog({ show: false, selectedId: -1 });
    }
  }

 /**
  * called when a checkbox on a todo list item is pressed
  * @listens onCheckboxPress Item
  * @param {number} itemId
  */
  const handleCheckboxPress = (itemId) => {
    if (Platform.OS === 'web') {
      // setShowDialog here to render a web dialog
      setBrowserDialog({ show: true, selectedId: itemId });
    } else {
      Alert.alert(
        "Confirm",
        "Remove this entry?",
        [
          { text: "Yes", onPress: () => handleDialogResponse(true, itemId), style: "destructive" },
          { text: "NOOO", onPress: () => handleDialogResponse(false, itemId), style: "default" },
        ]
      );
    }
  }

  /**
   * called when user submits text in input field
   * @listens onEnter InputField
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
        browserDialog.show
          ? <BrowserDialog
              onResponse={response => handleDialogResponse(response, browserDialog.selectedId)}
              message={ `Remove this entry?\n\n${items[ browserDialog.selectedId ].todo}` }
            />
          : null
      }
      <RNEText
        h3
        h3Style={styles.title}
      >
        My Todo List
      </RNEText>
      <KeyboardAvoidingView
        behavior="padding"
        style={styles.todoContainer}
      >
        <ScrollView
          ref={scrollView}
          onContentSizeChange={ () => scrollView.current.scrollToEnd({ animated: true }) }
          keyboardDismissMode={Platform.OS === 'ios' ? 'interactive' : 'on-drag'}
          keyboardShouldPersistTaps="always"
          style={styles.scroll}
        >
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
      </KeyboardAvoidingView>
    </View>
  );
}

export default TodoList;