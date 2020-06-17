const appDataReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case 'SET_APP_DATA':
      return payload;
    default:
      return state;
  }
};

export default appDataReducer;
