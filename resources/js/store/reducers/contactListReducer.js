const contactListReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case 'SET_CONTACT_LIST':
      return {
        ...state,
        list: payload
      };
    case 'SET_YEAR_FILTER':
      return {
        ...state,
        filter: payload
      };
    default:
      return state;
  }
};

export default contactListReducer;
