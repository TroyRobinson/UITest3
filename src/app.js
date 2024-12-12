import * as React from 'react'
import { useState } from 'react'
import '../public/globals.css'
import { Grommet, Box, Button, Form, FormField, TextInput } from 'grommet'

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
    <Grommet>
      <Box
        width="medium"
        pad="medium"
        background="light-1"
        align="center"
        justify="center"
      >
        <Form
          onSubmit={({ value }) => addTodo(value.todo)}
        >
          <FormField name="todo" htmlFor="todo" label="Todo">
            <TextInput id="todo" name="todo" placeholder="Add a new todo" />
          </FormField>
          <Box direction="row" gap="medium" justify="between">
            <Button type="submit" primary label="Add Todo" />
          </Box>
        </Form>
        <Box as="ul" pad="none" margin={{ top: 'medium' }}>
          {todos.map((todo, index) => (
            <Box
              as="li"
              key={index}
              direction="row"
              align="center"
              justify="between"
              pad="small"
              background="light-2"
              margin={{ bottom: 'small' }}
              round="small"
            >
              {todo}
              <Button
                label="Remove"
                onClick={() => removeTodo(index)}
                color="status-critical"
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Grommet>
  )
}
