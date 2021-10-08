import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import { Input as RNETextInput } from 'react-native-elements';

import { styles } from './styled';
import Alert from '../Alert';

const InputField = ({ onEnter, status }) => {
  const [itemText, setItemText] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const handleKeyPress = ({ nativeEvent: e }) => {
    // event.key = 'Enter', 'Backspace', ' '
    if (showAlert) {
      setShowAlert(false);
    }

    if (e.key === "Enter") {
      onEnter(itemText);
      setShowAlert(true);
      setItemText('');
    }
  }

  /**
   * render logic for Alert box below InputField
   * @returns <Alert> | null
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
