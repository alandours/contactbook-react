import { sortContacts, addFullNames } from '@utils/contacts';

const contactListReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case 'SET_CONTACT_LIST':
      sortContacts(payload);
      return {
        ...state,
        list: addFullNames(payload),
        filter: null
      };
    case 'SET_YEAR_FILTER':
      return {
        ...state,
        filter: payload
      };
    case 'TOGGLE_CONTACT_LIST':
      return {
        ...state,
        open: !!state && !state.open
      };
    default:
      return state;
  }
};

export default contactListReducer;
