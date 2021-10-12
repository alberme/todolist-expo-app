import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  alertContainer: {
    marginVertical: 5,
    padding: 5,
    borderWidth: 2,
    borderRadius: 5,
  },
  alertText: {
    fontSize: 16,
    textAlign: 'center',
  },
  error: {
    backgroundColor: '#ff9494',
    borderColor: 'red',
  },
  success: {
    backgroundColor: '#e8ffe8',
    borderColor: 'green',
  },
});