import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Alert, Text, View } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { styles } from './styled';

const Item = ({ id, onConfirmation, children }) => {
  const [checked, setChecked] = useState(false); // we might not need this anymore

  /**
   * this only works on iOS/Android devices :(
   * @param {number} itemId 
   */
  const handleCheckboxPressNative = (itemId) => {
    Alert.alert(
      "Confirm",
      "Are you sure you want to remove this entry?",
      [
        { text: "Yes", onPress: () => onConfirmation(true, itemId), style: "destructive" },
        { text: "NOOO", onPress: () => onConfirmation(false), style: "default" }
      ]
    );
    onConfirmation(true, itemId)
  }

  return (
    <View style={styles.itemRow}>
      <CheckBox
        checked={checked}
        onPress={() => handleCheckboxPressNative(id)}
      />
      <Text style={styles.itemText}>{ children }</Text>
    </View>
  )
}

Item.propTypes = {
  id: PropTypes.number.isRequired,
  onConfirmation: PropTypes.func,
};

export default Item;