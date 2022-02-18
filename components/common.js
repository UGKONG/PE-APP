import { StyleSheet } from 'react-native';

export const text = {
  programName: 'Balance Play',
  backIcon: 'ios-chevron-back',
  menuIcon: 'ios-menu',
}

export const color = {
  main: '#00ada9',
  active: '#008a87',
  sub: '#96E2E0',
  background: '#f1f9f8',
  statusBarColor: '#ddf5f2',
}

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f9f8',
    padding: 10
  },
  h1: {
    width: '100%',
    height: 70,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    paddingHorizontal: 16,
    backgroundColor: color.statusBarColor,
    borderBottomColor: '#cef0ec',
    borderBottomWidth: 1,
  },
  h1Text: {
    fontSize: 18,
    fontWeight: '700',
    color: color.active,
    width: '100%',
    textAlign: 'left',
    alignItems: 'center'
  },
  backButton: {
    marginRight: 14,
  },
  backButtonText: {
    color: color.main
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