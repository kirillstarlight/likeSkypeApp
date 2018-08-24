import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import reducer from '../reducers/reducer';
import { contacts } from '../static-data';

const store = createStore(reducer, contacts, devToolsEnhancer());

export default store;
