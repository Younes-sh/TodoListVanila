import { addTodoType, doTodoType, deleteTodoType} from './actionType.js';

export const addCreatorAction = (title) => {
    return {
        type : addTodoType,
        title 
    }
}

export const doCreatorAction = (id) => {
    return {
        type : doTodoType,
        id
    }
}

export const deletCreatorAction = (id) => {
    return {
        type : deleteTodoType,
        id
    }
}