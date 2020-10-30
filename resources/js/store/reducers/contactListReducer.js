import { sortContacts, addFullNames } from '@utils/contacts';

const contactListReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case 'SET_CONTACT_LIST':
      sortContacts(payload);
      return {
        ...state,
        list: addFullNames(payload)
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
