import axios from 'axios';

export const setContact = (data) => ({
  type: 'SET_CONTACT',
  payload: data
});

export const resetContact = () => ({
  type: 'RESET_CONTACT'
});

export const setContactLoading = () => ({
  type: 'SET_CONTACT_LOADING'
});

export const setContactList = (data) => ({
  type: 'SET_CONTACT_LIST',
  payload: data
});

export const setYearFilter = (data) => ({
  type: 'SET_YEAR_FILTER',
  payload: data
});

export const toggleContactList = () => ({
  type: 'TOGGLE_CONTACT_LIST'
});

export const setAppData = (data) => ({
  type: 'SET_APP_DATA',
  payload: data
});

export const setStats = (data) => ({
  type: 'SET_STATS',
  payload: data
});

export const setContactMessage = (data) => ({
  type: 'SET_CONTACT_MESSAGE',
  payload: data
});

export const setContactPalette = (data) => ({
  type: 'SET_CONTACT_PALETTE',
  payload: data
});

export const setTheme = (data) => ({
  type: 'SET_THEME',
  payload: data
});

export const setMainColor = (data) => ({
  type: 'SET_MAIN_COLOR',
  payload: data
});

export const getContact = (id) => async (dispatch) => {
  dispatch(setContactLoading());
  const url = `/api/contacts/${id}`;
  const response = await axios.get(url);
  dispatch(setContact(response.data));
};

export const getContactList = (search) => async (dispatch) => {
  const url = search ? `/api/contacts/search/${search}` : '/api/contacts/list';
  const response = await axios.get(url);
  dispatch(setContactList(response.data));
};

export const getContactListByYear = (year) => async (dispatch) => {
  const url = `/api/contacts/listByYear/${year}`;
  const response = await axios.get(url);
  dispatch(setContactList(response.data));
  dispatch(setYearFilter(year));
};

export const getAppData = () => async (dispatch) => {
  const url = '/api/contacts/setup';
  const response = await axios.get(url);
  dispatch(setAppData(response.data));
};

export const getStats = () => async (dispatch) => {
  const url = '/api/contacts/stats';
  const response = await axios.get(url);
  dispatch(setStats(response.data));
};

export const addContact = (data) => async (dispatch) => {
  dispatch(setContactLoading());
  const url = '/api/contacts/add';
  const response = await axios.post(url, data);
  const { contact, message, type } = response.data || {};
  dispatch(setContact(contact));
  dispatch(setContactMessage({ message, type }));
  dispatch(getContactList());
  return {
    success: type === 'success',
    newContactId: contact.id
  };
};

export const updateContact = (id, data) => async (dispatch) => {
  dispatch(setContactLoading());
  const url = `/api/contacts/${id}/update`;
  const response = await axios.post(url, data);
  const { contact, message, type } = response.data || {};
  dispatch(setContact(contact));
  dispatch(setContactMessage({ message, type }));
  dispatch(getContactList());
  return {
    success: type === 'success'
  };
};

export const deleteContact = (id) => async (dispatch) => {
  dispatch(setContactLoading());
  const url = `/api/contacts/${id}/delete`;
  const response = await axios.delete(url);
  const { contact, message, type } = response.data || {};
  if (contact)
    dispatch(setContact(contact));
  else
    dispatch(resetContact());
  dispatch(setContactMessage({ message, type }));
};

export const toggleFavorite = (id, value) => async (dispatch) => {
  const url = `/api/contacts/${id}/favorite`;
  const response = await axios.post(url, { value });
  const { data: contact } = response || {};
  if (contact) {
    dispatch(setContactLoading());
    dispatch(setContact(contact));
    dispatch(getContactList());
  }
};
