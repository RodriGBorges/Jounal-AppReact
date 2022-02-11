import {createStore, combineReducers} from 'redux';
//

const reducers = combineReducers({
    auth: authReducer
})


export const store = createStore(
    reducers
)