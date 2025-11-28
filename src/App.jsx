import React, { useState, useEffect } from 'react'
import TodoList from './components/TodoList'

function AddTodo({ onAdd }) {
  const [value, setValue] = useState('')
  function submit(e) {
    e.preventDefault()
    if (!value.trim()) return
    onAdd(value.trim())
    setValue('')
  }
  return (
    <form className="add-form" onSubmit={submit}>
      <input
        className="input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="What needs to be done?"
      />
      <button className="btn" type="submit">Add</button>
    </form>
  )
}

export default function App() {
  const [todos, setTodos] = useState(() => {
    try {
      const raw = localStorage.getItem('todos')
      return raw ? JSON.parse(raw) : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  function addTodo(text) {
    setTodos((t) => [{ id: Date.now(), text, done: false }, ...t])
  }

  function toggleTodo(id) {
    setTodos((t) => t.map((it) => (it.id === id ? { ...it, done: !it.done } : it)))
  }

  function deleteTodo(id) {
    setTodos((t) => t.filter((it) => it.id !== id))
  }

  return (
    <div className="app">
      <div className="container">
        <h3>Charansovan@gmail.com</h3>
        <h5>Charan sovan test</h5>
        <h1 className="title">Simple Todo</h1>
        <AddTodo onAdd={addTodo} />
        <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
      </div>
    </div>
  )
}
