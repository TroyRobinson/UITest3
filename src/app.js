import * as React from 'react'
import { useState } from 'react'
import '../public/globals.css'
import { FlexCol } from './utils'

export var App = () => {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos([...todos, todo])
  }

  const removeTodo = (index) => {
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }

  return (
    <FlexCol
      style={{
        width: '100%',
        height: '100%',
        background: 'white',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div className="w-full max-w-xs">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="todo">
              Todo
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="todo"
              type="text"
              placeholder="Add a new todo"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={() => addTodo(document.getElementById('todo').value)}
            >
              Add Todo
            </button>
          </div>
        </form>
        <ul>
          {todos.map((todo, index) => (
            <li key={index} className="flex items-center justify-between bg-gray-100 p-2 my-2 rounded">
              {todo}
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                onClick={() => removeTodo(index)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </FlexCol>
  )
}
