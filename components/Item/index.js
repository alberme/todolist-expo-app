import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Alert, Text, View } from 'react-native';
import { CheckBox, Text as RNEText } from 'react-native-elements';
import { styles } from './styled';

const Item = ({ id, onCheckboxPress, children }) => {
  const [checked, setChecked] = useState(false); // we might not need this anymore

  return (
    <View style={styles.itemRow}>
      <CheckBox
        containerStyle={styles.checkboxContainer}
        checked={checked}
        onPress={() => onCheckboxPress(id)}
      />
      <RNEText h4 h4Style={styles.itemText}>{ children }</RNEText>
    </View>
  )
}

Item.propTypes = {
  id: PropTypes.number.isRequired,
  onCheckboxPress: PropTypes.func.isRequired,
};

export default Item;