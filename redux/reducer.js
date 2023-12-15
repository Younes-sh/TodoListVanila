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
            let newState =  [...state]
            newState.forEach(todo  => {
                if(todo.id == action.id) {
                    todo.isCompleted = !todo.isCompleted
                }
            })
             
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

const createTodo = () => {
    let todoTitle = todoInput.value
    store.dispatch(addCreatorAction(todoTitle))
    todoInput.value = ''
    todoInput.focus()
};

addTodoBtn.addEventListener('click' , () => {
    todoInput.value !=''  && createTodo()
});
window.addEventListener('keydown' , (event) => {
    event.key == 'Enter' && todoInput.value != '' && createTodo()
});

const doTodoHandler = (id) => {
    store.dispatch(doCreatorAction(id))
}

const generateTodoElement = (id , title, isCompleted) => {
    return `
        <div class="todoItem  ${isCompleted && " completed" }"
            onClick=doTodoHandler(${id})
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
    let todos = store.getState()
    todoItemContainer.innerHTML = ''
    todos.map(todo => 
        todoItemContainer.insertAdjacentHTML(
            'beforeend' ,
             generateTodoElement(todo.id , todo.title, todo.isCompleted)
    ));
}

rednderUI()
store.subscribe(rednderUI)

window.addEventListener('load', () => {
    todoInput.focus()
})

window.doTodoHandler = doTodoHandler
