import { LOAD_ITEMS, ADD_ITEMS, REMOVE_ITEMS, EDIT_ITEMS } from '../actions/itemAction';
import { ITodo } from '../interfaces/Todo';

export const loadItems = (): ItemsActionType => {
    return {
        type: LOAD_ITEMS
    }
}

export const addItems = (ITodo: ITodo): ItemsActionType => {
    return {
        type: ADD_ITEMS,
        ITodo
    }
}

export const removeItems = (id: number): ItemsActionType => {
    return {
        type: REMOVE_ITEMS,
        id
    }
}

export const editItems = (ITodo: ITodo): ItemsActionType => {
    return {
        type: EDIT_ITEMS,
        ITodo
    }
}


export interface ActionTypeBase {
    type: string;
}

export interface ItemsActionType extends ActionTypeBase {
    id? : number;
    ITodo?: ITodo;
}