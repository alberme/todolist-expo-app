import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import { Input as RNETextInput } from 'react-native-elements';

import { styles } from './styled';
import Alert from '../Alert';

const InputField = ({ onEnter, status }) => {
  const [itemText, setItemText] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  /**
   * handler for user submit in InputField
   * @listens onKeyPress InputField
   * @param {NativeEvent} e 
   */
  const handleKeyPress = ({ nativeEvent: e }) => {
    // hide visible Alert box when user types
    if (showAlert) {
      setShowAlert(false);
    }
    
    // e.key = 'Enter', 'Backspace', ' '
    if (e.key === "Enter") {
      onEnter(itemText);
      setShowAlert(true);
      setItemText('');
    }
  }

  /**
   * render logic for Alert box above InputField
   * @returns {Alert | null}
   */
  const renderAlert = () => {
    if (status && Object.keys(status).length > 0) {
      const alertLevel = status.success ? 'success' : 'error';

      return (
        <Alert level={alertLevel} >{ status[alertLevel] }</Alert>
      );
    } else {
      return null;
    }
  }

  return (
    <View>
      { showAlert && renderAlert() }
      <RNETextInput
        placeholder="enter here!"
        leftIcon={{ type: 'font-awesome', name: 'angle-double-right' }}
        leftIconContainerStyle={styles.icon}
        inputStyle={styles.inputContainer}
        onChangeText={(text) => setItemText(text)}
        onKeyPress={handleKeyPress}
        value={itemText}
      />
    </View>
  )
}

InputField.propTypes = {
  onEnter: PropTypes.func.isRequired,
  status: PropTypes.shape({
    success: PropTypes.string,
    error: PropTypes.string,
  }),
};

export default InputField;
