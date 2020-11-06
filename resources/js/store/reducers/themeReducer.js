const themeReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case 'SET_THEME':
      return {
        ...state,
        theme: payload
      };
    case 'SET_MAIN_COLOR':
      return {
        ...state,
        mainColor: payload
      };
    default:
      return state;
  }
};

export default themeReducer;
