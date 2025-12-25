import { createContext ,useContext } from "react";

export const TodoContext = createContext({
    todos:[
        {
            id:123,
            todo:"todoMsg",
            completed: false
        }
        

    ]  ,
    addTodo: (todo) => {},
    updateTodo: (todo,id) => {},
    deleteTodo:(todo) => {},
    toggleComplete:(id) => {}
})

export const useTodo =()=>{
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider