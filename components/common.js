import { StyleSheet } from 'react-native';

const color = {
  main: '#00ada9',
  active: '#008a87',
}

export default StyleSheet.create({
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
  }
});