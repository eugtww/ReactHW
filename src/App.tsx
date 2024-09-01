import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Item from './item.tsx'

function App() {
 
  const initialTodos: string[] = [
    "sleep",
    "learn",
    "sleep",
  ];

  const [todos, setTodos] = useState(JSON.parse(localStrogare.getItem('todos') ?? JSON.stringify(initialTodos)));
  const addTodoHandler = (e) => setTodos([...todos, e.target.value]);

  useEffect(() => {
    localStrogare.setItem ("todos", JSON.stringify(todos));
  }, [todos]);
  const inputRef = useRef<any>(null)
  
  return (

      <div>
       {todos.map((el: string, index) => {
        return <div key={index}><Item />{el}</div>
       })};
        
       <form>
        <input type='text' placeholder='Ввести задачу'/> 
        <button type= 'submit'
        onClick={addTodoHandler} type= 'submit'>
          Добавить
          </button>
        </form>

        {todos.length >= 4 && <p> Всего задач: {todos.length}</p>}
      </div>
  )
}

export default App
