const contactReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case 'SET_CONTACT':
      return {
        ...state,
        ...payload,
        loading: false
      };
    case 'SET_CONTACT_LOADING':
      return {
        ...state,
        loading: true
      };
    case 'SET_CONTACT_MESSAGE':
      return {
        ...state,
        message: payload
      };
    case 'RESET_CONTACT':
      return {
        photo: 'contact.jpg',
        loading: true,
        message: null
      };
    default:
      return state;
  }
};

export default contactReducer;
