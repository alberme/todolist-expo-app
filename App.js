/**
* 
Extra: when checked, remove item from list/object (SME: Sam, Darla | Dev:  Albert, Myles)

Interaction: After a user checks the box, they will be presented with a dialog to confirm they wish to delete it.
If they confirm it, then the item will be removed. 
 
Assets: An alert or some sort of dialogue for confirmation when the box is checked.
Alert needs to have a button or other input for the user to confirm with. 
Functionality to remove the item from the object upon confirmation (grab key/id from object, remove item from object, update state object).
In prop splice object and modify state

Expected Outcome: The user will easily be able to interact with the app to delete notes once they are no longer necessary,
with a method to confirm their intention to delete.
* 
*/

/**
 * solution for this error when running on iOS
 * Invariant Violation: Tried to register two views with the same name RNCSafeAreaProvider
 * https://github.com/th3rdwave/react-native-safe-area-context/issues/110#issuecomment-668864576
 */

import React, { useState } from 'react';
import { View, Text, Button, Alert, StyleSheet } from 'react-native';
import { CheckBox, } from 'react-native-elements'

const App = () => {
  const [items, setItems] = useState({1: 'do stuff', 2: 'defy death', 3: 'do it well'});
  const [checked, setChecked] = useState(false);

  /**
   * this only works on iOS/Android devices :(
   * @param {number} key 
   */
  const handleButtonPressNative = (key) => {
    Alert.alert(
      "Confirm",
      "Are you sure you want to remove this entry?",
      [
        { text: "Yes", onPress: () => handleConfirmation(true, key), style: "destructive" },
        { text: "NOOO", onPress: () => handleConfirmation(false), style: "default" }
      ]
    )
  }
  
  // const handleButtonPressWeb = (key) => {}

  /**
   * handler for Alert box onPress
   * @param {boolean} confirmRemove 
   * @param {number} keyToRemove 
   */
  const handleConfirmation = (confirmRemove = false, keyToRemove) => {
    if (confirmRemove) {
    // remove item from object list!
      const newItems = {};
      // places all entries except for the entry the user wants to remove in a new object
      for (const [key, value] of Object.entries(items)) {
        if (key !== keyToRemove) {
          newItems[key] = value;
        }
      }
      setItems(newItems);
    }

    console.log(`user pressed ${confirmRemove ? 'YES' : 'NO'}`);
    setChecked(false);
  }

  return (
    <View style={styles.container}>
      {
        Object.keys(items).map(key => (
          <View style={styles.todoRow} key={key} >
            <Text style={styles.todoText}>{ items[key] }</Text>
            <CheckBox
              checked={checked}
              onPress={() => handleButtonPressNative(key)}
            ></CheckBox>
          </View>
        )
      )}
    </View>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f2fcff',
    marginHorizontal: '3%',
    marginTop: '10%',
    borderWidth: 2,
    borderRadius: 10,
    borderColor: 'lightgray',
  },
  todoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderBottomWidth: 2,
    borderBottomColor: 'lightgray',
  },
  todoText: {
    fontSize: 16,
  }
})

export default App;