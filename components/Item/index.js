import PropTypes from 'prop-types';
import { Alert, Text, View } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { styles } from 'styled.js';

const Item = ({ onCheck, children }) => {

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

  return (
    <View style={styles.itemRow}>
      <CheckBox
        checked={checked}
        onPress={() => handleButtonPressNative(key)}
      />
      <Text style={styles.itemText}>{children}</Text>
    </View>
    
  )
}

Item.propTypes = {
  onCheck: PropTypes.func,
};

export default Item;