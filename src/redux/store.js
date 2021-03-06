import {combineReducers, createStore} from 'redux';
import titleList from '../data/titles.json';

import globalReducer from './globalRedux';
import filtersReducer from './filtersRedux';
import orderReducer from './orderRedux';

// define initial state and shallow-merge initial data
const initialState = {
  titles: titleList,
  allSeries: {},
  authors: {},
  publishers: {},
  genres: {},
  filters: {
    searchPhrase: '',
    genres: [],
    volume: {
      from: 1,
      to: 100,
    },
  },
  order: {
    title: null,
    email: '',
    options: {},
  },
};

// define reducers
const reducers = {
  filters: filtersReducer,
  order: orderReducer,
};

// add blank reducers for initial state properties without reducers
Object.keys(initialState).forEach(item => {
  if (typeof reducers[item] == 'undefined') {
    reducers[item] = (statePart = null) => statePart;
  }
});

// combine reducers
const combinedReducers = combineReducers(reducers);

// merge all reducers with globalReducer
const storeReducer = (state, action) => {
  const modifiedState = globalReducer(state, action);
  return combinedReducers(modifiedState, action);
};

// create store
const store = createStore(
  storeReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
