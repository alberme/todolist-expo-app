import PropTypes from 'prop-types';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View, Button } from 'react-native';

import { styles } from './styles';

/**
 * courtesy of our amazing lead Juan Lucero
 */
const BrowserDialog = ({ message, onResponse }) => {
  const displayDialog = () => (
    <View style={styles.dialogContainer}>
      <View style={styles.dialog}>
        <Text>{ message || 'Dialog Message: tap ok or cancel.' }</Text>
        <View style={styles.buttonActions}>
          <Button
            title="Cancel"
            onPress={() => onResponse(false)}
          />
          <Button
            title="OK"
            onPress={() => onResponse(true)}
          />
        </View>
      </View>
    </View>
  )

  return (
    <View style={styles.container}>
      { displayDialog() }  
      <StatusBar style="auto" />
    </View>
  );
}

BrowserDialog.propTypes = {
  message: PropTypes.string,
  onResponse: PropTypes.func,
}

export default BrowserDialog;