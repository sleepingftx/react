import * as React from 'react';
import { ITodo } from '../interfaces/Todo';


type TodoListProps = {
    todos: ITodo[]
    //onEdit(id:number,date:string,distance:string):void
    onEdit: (id:number)=>void
    onRemove: (id:number) => void
}


export const TodoList:React.FC<TodoListProps> = ({todos, onEdit, onRemove}) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Дата</th>
                    <th>Дистанция</th>
                </tr>
            </thead>
            <tbody>
            {todos.map(todo =>{
                return (
                    <tr key={todo.id}>
                        <td>
                            Friday
                           {todo.date}
                        </td>
                        <td>
                            {todo.distance}
                        </td>
                        <td>
                            <i onClick={()=> onEdit(todo.id)}>Edit</i>
                            <i onClick={()=> onRemove(todo.id)}>Delete</i>
                        </td>
                    </tr>
                )
            })}

            </tbody>
        </table>
    )
}