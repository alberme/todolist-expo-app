import { StyleSheet, Platform } from 'react-native'

export const styles = StyleSheet.create({
  inputContainer: {
    padding: 10,
    textAlign: 'right',
    width: Platform.OS === 'web' ? 'calc(80% - 30px)' : '50%',
  },
  icon: {
    paddingRight: 10,
  }
});