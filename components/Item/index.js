import PropTypes from 'prop-types';
import { Alert, Text, View } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { styles } from './styled';

const Item = ({ id, onCheck, onConfirmation, children }) => {

  /**
   * this only works on iOS/Android devices :(
   * @param {number} itemId 
   */
  const handleButtonPressNative = (itemId) => {
    Alert.alert(
      "Confirm",
      "Are you sure you want to remove this entry?",
      [
        { text: "Yes", onPress: () => onConfirmation(true, itemId), style: "destructive" },
        { text: "NOOO", onPress: () => onConfirmation(false), style: "default" }
      ]
    )
  }

  return (
    <View style={styles.itemRow}>
      <CheckBox
        checked={checked}
        onPress={() => handleButtonPressNative(id)}
      />
      <Text style={styles.itemText}>{children}</Text>
    </View>
  )
}

Item.propTypes = {
  id: PropTypes.number.isRequired,
  onCheck: PropTypes.func,
  onConfirmation: PropTypes.func,
};

export default Item;