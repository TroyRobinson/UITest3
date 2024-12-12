import * as React from 'react'
import { useState } from 'react'
import '../public/globals.css'
import { Box, Button, Flex, Input, Label } from 'rebass'

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
    <Flex
      width={[1, 1 / 2, 1 / 3]}
      p={3}
      bg="lightgray"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <Box as="form" onSubmit={(e) => {
        e.preventDefault()
        const form = e.target
        const input = form.elements.todo
        addTodo(input.value)
        form.reset()
      }}>
        <Label htmlFor="todo">Todo</Label>
        <Input id="todo" name="todo" placeholder="Add a new todo" />
        <Button type="submit" mt={2}>Add Todo</Button>
      </Box>
      <Box as="ul" p={0} mt={3} width="100%">
        {todos.map((todo, index) => (
          <Flex
            as="li"
            key={index}
            alignItems="center"
            justifyContent="space-between"
            p={2}
            bg="lightgray"
            mb={2}
            sx={{ borderRadius: 4 }}
          >
            {todo}
            <Button onClick={() => removeTodo(index)} bg="red">
              Remove
            </Button>
          </Flex>
        ))}
      </Box>
    </Flex>
  )
}
