import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import { colorReducer } from './reducers/color-reducer';
import {postReducer } from './reducers/post-reducer';
import {userReducer } from './reducers/user-reducer';
import {switchReducer} from './reducers/switch-show-reducer';

const rootReducer = combineReducers({
    colorNew: colorReducer,
    post: postReducer,
    user: userReducer,
    switch: switchReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;