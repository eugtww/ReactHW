import React, { useState, useRef, useEffect } from 'react';
import Item from './Item';
import './App.css'

const App = () => {
  const initialTodos = ['sleep', 'learn', 'sleep'];
  const [todos, setTodos] = useState(initialTodos);
  const inputRef = useRef<any>(null);
  

  const addTodoHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputRef.current.value) {
      setTodos([...todos, inputRef.current.value]);
      inputRef.current.value = '';
    }
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
    
        {todos.map((el, index) => (
        <Item key={index} el={el} />
      ))}
      {todos.length >= 4 && <div>Всего задач: {todos.length}</div>}
    </div>
    </>
  );
}

export default App
