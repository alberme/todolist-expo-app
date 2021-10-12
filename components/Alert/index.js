import PropTypes from 'prop-types';
import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styled';
 
const Alert = ({ level, children }) => {
  return (
    <View style={[ styles.alertContainer, styles[level] ]}>
      <Text style={styles.alertText}>{ children }</Text>     
    </View>
  )
}

Alert.propTypes = {
  level: PropTypes.oneOf([
    'success',
    'error'
  ])
}

export default Alert;

