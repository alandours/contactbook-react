const statsReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case 'SET_STATS':
      return {
        ...state,
        ...payload
      };
    default:
      return state;
  }
};

export default statsReducer;
