import { addCreatorAction, doCreatorAction, deletCreatorAction} from './actionCreator.js';
import { addTodoType, doTodoType, deleteTodoType} from './actionType.js';

// Event Btn

const addTodoBtn = document.querySelector('#addTodoBtn');
const todoInput = document.querySelector('#todoInput');
const deleteTodoBtn = document.querySelector('#deleteTodoBtn');



const todoReducer = (state = [] , action) => {
    switch (action.type) {
        case addTodoType : {
           let newState = [...state] 
           let newTodo = {
            id: state.length + 1 ,
            title : action.title ,
            isCompleted : false
           }
           newState.push(newTodo)
           return newState
        }

        case doTodoType : {
            return state
        }

        case deleteTodoType : {
            return state
        }
        default : {
            return state
        }
    }
}
const store = Redux.createStore(todoReducer);

addTodoBtn.addEventListener('click' , () => {
    let todoTitle = todoInput.value 
    store.dispatch({type : 'ADD_TODO' , title: todoTitle })
    todoInput.value = ''
})



deleteTodoBtn.addEventListener('clcik' , () => {
    store.dispach(deletCreatorAction())
})

store.subscribe(() => {
    console.log(store.getState())
})

console.log('Y')