import { addCreatorAction, doCreatorAction, deletCreatorAction} from './actionCreator.js';
import { addTodoType, doTodoType, deleteTodoType} from './actionType.js';

// Event Btn

const addTodoBtn = document.querySelector('#addTodoBtn');
const todoInput = document.querySelector('#todoInput');
const todoItemContainer = document.querySelector('.todoItemContainer')


const todoReducer = (state = [] , action) => {
    switch (action.type) {
        case addTodoType : {
           let newState = [...state] 
           let newTodo = {
            id: state.length + 1 ,
            title : action.title ,
            isCompleted : false,
           }
           newState.push(newTodo)
           return newState
        }

        case doTodoType : {
            console.log(action.id)
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

const VerificationInput = () => {
    let todoTitle = todoInput.value
    store.dispatch(addCreatorAction(todoTitle))
    todoInput.value = ''
    console.log(generateTodoElement(todoTitle))
    todoInput.focus()
};

addTodoBtn.addEventListener('click' , () => {
    todoInput.value !=''  && VerificationInput()
});
window.addEventListener('keydown' , (event) => {
    event.key == 'Enter' && todoInput.value != '' && VerificationInput()
});

const completHandler = (id) => {
    store.dispatch(doCreatorAction(id))
}

const generateTodoElement = (id , title) => {
    return `
        <div class="todoItem "
            onClick=completHandler(${id})
        >
            <span class="titleTodo">${title}</span>
            <span id="deleteTodoBtn" class="material-symbols-outlined">
                delete
            </span>
        </div>
    `
}




// -------------
const rednderUI = () => {
    todoItemContainer.innerHTML = ''
    let todos = store.getState()
    todos.map(todo => todoItemContainer.insertAdjacentHTML('beforeend' , generateTodoElement(todo.id , todo.title)))
}

rednderUI()
store.subscribe(rednderUI)

window.addEventListener('load', () => {
    todoInput.focus()
})

window.completHandler = completHandler
