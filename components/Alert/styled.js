import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  alertContainer: {
    flex: 1,
    justifyContent: 'center',
    margin: '1%',
    padding: '1%',
    paddingHorizontal: '2%',
    borderWidth: 2,
    borderRadius: 10,
  },
  alertText: {
    fontSize: 16
  },
  error: {
    backgroundColor: '#ff9494',
    borderColor: 'red'
  },
  success: {
    backgroundColor: '#e8ffe8',
    borderColor: 'green'
  },
});