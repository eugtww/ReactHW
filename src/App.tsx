import React, { useState, useRef, useEffect } from 'react';
import Item from './Item';
import './App.css'
import { Todo } from './types';

const App = () => {
  const initialTodos: Todo[] = [
    { id: '1', title: 'sleep' },
    { id: '2', title: 'learn' },
    { id: '3', title: 'sleep' },
  ];
  const [todos, setTodos] = useState<Todo[]>(JSON.parse(localStorage.getItem('todos') || JSON.stringify(initialTodos)));
  const inputRef = useRef<HTMLInputElement>(null);
  

  const addTodoHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputRef.current) {
      const newTodo: Todo = {
        id: Date.now(),
        title: inputRef.current.value,
      };
      setTodos((prevTodos) => [...prevTodos, newTodo]);
      inputRef.current.value = '';
    }
  };

  const deleteTodoHandler = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter(todo => todo.id !== id));
  };

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <div>
        <form>
        <input type="text" placeholder="Ввести задачу" ref={inputRef} />
        <button type="submit" onClick={addTodoHandler}>Добавить</button>
        </form>
    
        {todos.map((el) => (
        <Item key={el.id} el={el} onDelete={deleteTodoHandler} />
      ))}
    </div>
    </>
  );
}

export default App
