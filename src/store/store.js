import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import combined from '../reducers/index';

const store = createStore(combined, devToolsEnhancer());

export default store;
