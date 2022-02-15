import { StyleSheet } from 'react-native';

export const color = {
  main: '#00ada9',
  active: '#008a87',
  background: '#f1f9f8',
}

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f1f9f8'
  },
  h1: {
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    paddingBottom: 20
  },
  h1Text: {
    fontSize: 16,
    fontWeight: '700',
    color: color.active,
    width: '100%',
    textAlign: 'left',
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 8,
    borderRadius: 3,
    fontSize: 14,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(33, 150, 243)',
  },
  buttonText: {
    color: '#fff',
  }
});