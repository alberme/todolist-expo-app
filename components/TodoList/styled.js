import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#f2fcff',
    marginHorizontal: '3%',
    marginTop: '10%',
    padding: '5%',
    borderWidth: 2,
    borderRadius: 10,
    borderColor: 'lightgray',
    height: '100%',
  },
  title: {
    paddingBottom: '5%',
  },
  scroll: {
    flexGrow: 1,
    height: 100,
  }
});