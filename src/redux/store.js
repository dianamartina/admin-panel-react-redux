import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import { colorReducer } from './reducers/color-reducer';

const rootReducer = combineReducers({
    colorNew: colorReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;