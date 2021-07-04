import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    width: 25,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#d1d1d1',
    backgroundColor: '#c2c2c2',
    margin: 5,
  },
  buttonText: {
    fontSize: 18,
  },
  quantity: {
    paddingHorizontal: 5,
    color: '#007eb9',
  },
});

export default styles;
