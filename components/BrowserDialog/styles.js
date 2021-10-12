import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    flex: 1,
    opacity: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: '45%',
    paddingVertical: '20%',
    zIndex: 9999,
    elevation: 9999,
  },
  dialogContainer : {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  dialog: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#000',
    margin: '0 auto',
    borderRadius: 5,
    padding: 30,
    backgroundColor: '#FFF',
  },
  buttonActions : {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 30,
  },
  responseValue: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#000',
    padding: 20,
    borderRadius: 5,
    marginTop: 30,
  },
});