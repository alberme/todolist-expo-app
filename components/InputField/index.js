import PropTypes from 'prop-types';
import React, { useState, useRef } from 'react';
import { View, Platform } from 'react-native';
import { Input as RNETextInput } from 'react-native-elements';

import { styles } from './styled';
import Alert from '../Alert';

const InputField = ({ onEnter, status }) => {
  const [itemText, setItemText] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const inputField = useRef(null);

  /**
   * called when a key is pressed
   * @listens onKeyPress InputField
   * @param {SyntheticEvent} nativeEvent
   */
  const handleKeyPress = ({ nativeEvent: { key } }) => {
    // hide visible Alert box when user types
    if (showAlert) {
      setShowAlert(false);
    }
  }

  /**
   * called when the user submits in text input
   * @listens onSubmitEditing InputField
   * @param {SyntheticEvent} nativeEvent
   */
  const handleOnSubmit = ({ nativeEvent: { text } }) => {
    onEnter(itemText);
    setShowAlert(true);
    
    // unfortunately cant get instance methods on web to work
    if (Platform.OS === 'web') {
      setItemText('');
    } else {
      inputField.current.clear();
      inputField.current.focus();
    }
  }

  /**
   * render logic for Alert box above text input
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
        ref={inputField}
        placeholder="enter here!"
        leftIcon={{ type: 'font-awesome', name: 'angle-double-right' }}
        leftIconContainerStyle={styles.icon}
        inputStyle={styles.inputContainer}
        onChangeText={(text) => setItemText(text)}
        onKeyPress={handleKeyPress}
        onSubmitEditing={handleOnSubmit}
        value={itemText}
      />
    </View>
  )
}

InputField.propTypes = {
  onEnter: PropTypes.func,
  status: PropTypes.shape({
    success: PropTypes.string,
    error: PropTypes.string,
  }),
};

export default InputField;
