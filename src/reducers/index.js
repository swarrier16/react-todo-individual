import {combineReducers} from 'redux';

const taskReducer = (state=[], action)=>{
    switch(action.type) {
        case 'ADD_TASK':
            state = state.concat(action.payload);
            break;
        case 'DELETE_TASK':
            state = state.slice();
            state.splice(action.payload, 1);
            break;
        case 'EDIT_TASK':
            state = state.update(action.payload);
            break;
    }
    return state;
 },

reducers = combineReducers({
    tasks: taskReducer
});

export default reducers;
