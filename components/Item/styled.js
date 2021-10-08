import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 2,
    borderBottomColor: 'lightgray',

    paddingRight: '3%',
  },
  itemText: {
    color: 'gray',
    fontSize: 24,
  }
});