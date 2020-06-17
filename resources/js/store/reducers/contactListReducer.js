const contactListReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case 'SET_CONTACT_LIST':
      return payload;
    default:
      return state;
  }
};

export default contactListReducer;
