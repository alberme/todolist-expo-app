import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    opacity: 1,
    alignItems: 'center',
    top: '50%',
    left: '50%',
    width: '100%',
    height: '100%',
    transform: 'translate(-50%, -50%)',
    zIndex: 9999,
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
    justifyContent: 'space-around',
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