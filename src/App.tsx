//import React from 'react'
import * as React from 'react';
import { useState } from 'react';
import { Bar } from "./components/Bar"
import { Form } from "./components/Form"
import { EditForm } from "./components/EditForm"
import { TodoList } from "./components/TodoList"
import { ITodo } from "./interfaces/Todo"


const App: React.FC = () => {
const [todos,setTodos] = useState<ITodo[]>([]);

const addHandler = (date:string,distance:string) =>{
    console.log('Добавлен новый элемент' , date, ' & ', distance);
    const newTodo:ITodo = {
        id:0,
        date:date,
        distance:distance
    }
    setTodos(prev => [...todos,newTodo])
}

const toggleEdit = (id:number) =>{
    console.log('Добавлен новый элемент' , id);
}

const editHandler = () =>{
    console.log('Сохраняем  элемент');
//     setTodos(prev => prev.map(todo => {
//         if (todo.id=== id) {
//             todo.date=date;
//         }
//         return todo
//     })
}

const removeHandler = (id:number) =>{
    console.log('Добавлен новый элемент' , id);
//     const newTodo:ITodo = {
//         id:0,
//         date:date,
//         distance:distance
//     }
//     setTodos(prev => [...todos,newTodo])
}


  return (
        <>
                       <Bar/>
                       <div className="container">
                               <TodoList
                                    todos={todos}
                                    onEdit={toggleEdit}
                                    onRemove={removeHandler}
                                    />
                               <Form
                                onAdd = {addHandler}
                               />
                               <EditForm
                                onEdit = {editHandler}
                               />
                       </div>
               </>
        );
}

export default App;
