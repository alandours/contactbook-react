const themeReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case 'SET_THEME':
      return {
        ...state,
        ...payload
      };
    default:
      return state;
  }
};

export default themeReducer;
