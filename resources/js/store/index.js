import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { contactReducer, contactListReducer, appDataReducer, themeReducer } from './reducers';

const reducer = combineReducers({
  contact: contactReducer,
  contactList: contactListReducer,
  appData: appDataReducer,
  theme: themeReducer
});

export const initialState = {
  contactList: null,
  contact: {
    loading: true
  },
  appData: {},
  theme: 'light'
};

const store = createStore(
  reducer,
  initialState,
  applyMiddleware(
    thunk,
    createLogger()
  )
);

export default store;
