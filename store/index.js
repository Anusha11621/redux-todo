import { createStore } from "redux"

const ADD_TODO = 'ADD_TODO'
const DELETE_TODO = 'DELETE_TODO'
const TOGGLE_TODO = 'TOGGLE_TODO'
const INPUT_VALUE = 'INPUT_VALUE'
const SEARCH =' '

export function inputValue(value){
    return{
        type: INPUT_VALUE,
        payload : value
    }
}

let id = 0
export function addTodo(task){
    return{
        type: ADD_TODO,
        payload : {
            todoId : ++id,
            status : 'active',
            task: task,
            searchvalue:true
        }
    }
}

export function deleteTodo(id){
    return{
        type: DELETE_TODO,
        payload : id
    }
}

export function toggleTodo(id){
    return{
        type: TOGGLE_TODO,
        payload : id
    }
}

export function searchTodo(value){
    return {
        type : SEARCH,
        payload : value
    }
}

function reducer(state = {
    input : '',
    todos : []
},action){
    switch(action.type){
        case INPUT_VALUE:
            return{
                ...state,
                input:action.payload
            }
        case ADD_TODO:
            return{
                ...state,
                todos:[
                    ...state.todos,
                    action.payload 
                ]
            }
        case DELETE_TODO:
            console.log('its happening')
            const deleteTodoElement = state.todos.filter((element)=>{
                return Number(element.todoId) !== Number(action.payload)
            })
            return{
                ...state,
                todos:deleteTodoElement
            }
        case TOGGLE_TODO:
            const strike = state.todos.map((ele)=>{
                if(ele.todoId == action.payload){
                    if(ele.status == 'active'){
                        ele.status = 'completed'
                    }
                    else{
                        ele.status = 'active'
                    }
                }
                return ele
            })
            return {
                ...state,
                todos : strike
            }
        case SEARCH:
            let search = state.todos.map((data)=>{
                if(data.task.toLowerCase().includes(action.payload.toLowerCase())){
                    data.searchvalue = true
                }
                else {
                    data.searchvalue = false
                }
                return data
            })
            return {
                ...state,
                todos : search
            }
        default:
            return state
    }
}

const store = createStore(reducer)
store.subscribe(() => console.log(store.getState()))
export default store
