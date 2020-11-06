import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { getTheme, getMainColor } from '@utils/color';
import { contactReducer, contactListReducer, appDataReducer, statsReducer, themeReducer } from './reducers';

const reducer = combineReducers({
  contact: contactReducer,
  contactList: contactListReducer,
  appData: appDataReducer,
  stats: statsReducer,
  themeData: themeReducer
});

export const initialState = {
  contactList: null,
  contact: {
    loading: true
  },
  appData: {},
  stats: {},
  themeData: {
    theme: getTheme(),
    mainColor: getMainColor()
  }
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
