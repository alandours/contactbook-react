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

export const setAppData = (data) => ({
  type: 'SET_APP_DATA',
  payload: data
});

export const setContactMessage = (data) => ({
  type: 'SET_CONTACT_MESSAGE',
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

export const getAppData = () => async (dispatch) => {
  const url = '/api/contacts/setup';
  const response = await axios.get(url);
  dispatch(setAppData(response.data));
};

export const updateContact = (id, data) => async (dispatch) => {
  dispatch(setContactLoading());
  const url = `/api/contacts/${id}/update`;
  const response = await axios.post(url, data);
  const { contact, message, type } = response.data || {};
  dispatch(setContact(contact));
  dispatch(setContactMessage({ message, type }));
};

export const addContact = (data) => async (dispatch) => {
  dispatch(setContactLoading());
  const url = '/api/contacts/add';
  const response = await axios.post(url, data);
  const { contact, message, type } = response.data || {};
  dispatch(setContact(contact));
  dispatch(setContactMessage({ message, type }));
};
