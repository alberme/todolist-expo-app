import PropTypes from 'prop-types';
import React from 'react';
import { View } from 'react-native';
import { Text as RNEText } from 'react-native-elements';

import { styles } from './styled';
 
const Alert = ({ level, children }) => {
  return (
    <View style={[styles.alertContainer, styles[level] ]}>
      <RNEText h4 h4Style={styles.alertText}>{ children }</RNEText>     
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

