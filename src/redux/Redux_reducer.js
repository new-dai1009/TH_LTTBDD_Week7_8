import {ADD_TODO, SET_INITIAL_TODOS } from "./Redux_actions";


//Khởi tạo giá trị ban đầu 
const initialState = {
    todos: []
}


const  todoReducer = (state = initialState, action)  => {
    switch (action.type){
        case SET_INITIAL_TODOS:
            return{
                ...state,
                todos: action.payload
            };

        case ADD_TODO:
        return{
            ...state,
            todos: [...state.todos, action.payload],
        };
        default:
            return state;
    }
}
export default todoReducer;