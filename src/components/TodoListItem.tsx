import React from 'react';

interface TodoListItemProps {
    todo: Todo;
    ToggleComplete: ToggleComplete;
}

export const TodoListItem: React.FC<TodoListItemProps> = ({todo, ToggleComplete}) => {

  return (
    <li  className={todo.complete? "todo-row completed" : "todo-row"} >
        <label>
          <input 
              type="checkbox"
              onChange={() => ToggleComplete(todo)}
              checked={todo.complete} 
          />
        </label>
        {todo.text}
    </li>
  )
}