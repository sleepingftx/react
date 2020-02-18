import { StoreStructure } from '../interfaces/StoreStructure';
import { Reducer } from 'redux';
import { ActionTypeBase } from '../actions/itemTypes';
import { LOAD_ITEMS, ADD_ITEMS } from '../actions/itemAction';
const initState: StoreStructure = {
    todos: []
};

export const newReducer: Reducer<any> = (state: StoreStructure, action: ActionTypeBase) => {
    switch(action.type){
        case LOAD_ITEMS:
            console.log('LOAD items (action in reducer');
            break;
        case ADD_ITEMS:
            console.log('ADD items (action in reducer');
            break;
        default:
            return state;
    }
}

export default newReducer;