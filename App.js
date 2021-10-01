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
import React, { useState } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import { CheckBox } from 'react-native-elements'

const TodoConfirmation = () => {
  // const [confirmation, setConfirmation] = useState(false);
  const [items, setItems] = useState({1: 'do stuff', 2: 'defy death', 3: 'do it well'});
  const [checked, setChecked] = useState(false);

  const handleButtonPress = (key) => {
    Alert.alert(
      "Confirm",
      "Are you sure you want to remove this entry?",
      [
        {
          text: "Yes",
          onPress: () => handleConfirmation(true, key),
          style: "destructive"
        },
        { text: "NO", onPress: () => handleConfirmation(false), style: "default" }
      ]
    )
  }
  const handleConfirmation = (confirmRemove = false, keyToRemove) => {
    if (confirmRemove) {
    // remove item from object list!
    const newItems = {};
    
    // {1: 'do stuff', 2: 'defy death', 3: 'do it well'}
    for (const [key, value] of Object.entries(items)) {
      if (key !== keyToRemove) {
        newItems[key] = value;
      }
    }
    setItems(newItems);
    } else {
      console.log('user clicked NO!');
    }
    setChecked(false);
  }

  return (
    <View>
      {
        Object.keys().map(key => (
          <View key={key}>
            <Text>{ items[key] }</Text>
            <CheckBox
              checked={checked}
              onPress={() => handleButtonPress(key)}
            ></CheckBox>
          </View>
        )
      )}
    </View>
    
  )
}

export default TodoConfirmation;