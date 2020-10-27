import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { contactReducer, contactListReducer, appDataReducer, statsReducer, themeReducer } from './reducers';

const reducer = combineReducers({
  contact: contactReducer,
  contactList: contactListReducer,
  appData: appDataReducer,
  stats: statsReducer,
  theme: themeReducer
});

export const initialState = {
  contactList: null,
  contact: {
    loading: true
  },
  appData: {},
  stats: {},
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
