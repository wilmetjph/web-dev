import { useState } from 'react'


function App() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAdd = () => {

    const newTodo = {
      id : Date.now(),
      text: inputValue,
      completed: false
    };
    setTodos(prev => [...prev, newTodo]);
    setInputValue("");
  };

  const resetTodo = () => {
    setTodos([]);
  }

  return (
    <div>
      <h2>To do list</h2>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleAdd}>Ajouter</button>
      <button onClick={resetTodo}>Reset</button>
      
      <table>
        <tbody>
          {todos.map(todo => (
            <tr key={todo.id}>
              <td>
              <input
                type="checkbox"
                value={todo.completed}
                onChange={() => toggleTodo(todo.id)}
              />
              </td>
              <td>{todo.text}</td>
            </tr>
      ))}
        </tbody>
      </table>
    </div>
  )

}

export default App;