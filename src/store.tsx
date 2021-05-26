import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer, defaultState } from './reducers';

const store = createStore(rootReducer, defaultState(), applyMiddleware(thunk));

export default store;