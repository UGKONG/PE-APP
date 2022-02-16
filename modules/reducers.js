const loginInfo = (state = null, { type, payload }) => {
  switch (type) {
    case 'setLoginInfo':
      return state = payload ?? state;
    default:
      return state;
  }
}

export default {
  loginInfo,
}