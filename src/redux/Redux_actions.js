

export const ADD_TODO = "ADD_TODO";
export const SET_INITIAL_TODOS = "SET_INITIAL_TODOS";


export const setInitialTodos = (todos) =>({
    type: SET_INITIAL_TODOS,
    payload: todos
});

export const addTodo = (text) => ({
    type: ADD_TODO,
    payload: {
        id: Date.now(),
        text,
        completed: false
    }

})
