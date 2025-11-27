import React from 'react'

export default function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className="todo-item">
      <label className="todo-label">
        <input
          type="checkbox"
          checked={todo.done}
          onChange={() => onToggle(todo.id)}
        />
        <span className={todo.done ? 'done' : ''}>{todo.text}</span>
      </label>
      <button className="delete" onClick={() => onDelete(todo.id)}>Delete</button>
    </li>
  )
}
