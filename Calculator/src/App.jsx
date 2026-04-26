import { useState } from 'react'

function App () {
  
  const [result, setResult] = useState(0);
  const [value, setValue] = useState("");

  const handleAdd = () => {
    setResult(result + Number(value));
    setValue("");
  }

  const handleSubstract = () => {
    setResult(result - Number(value));
    setValue("");
  }

  const handleMultiply = () => {
    setResult(result * Number(value));
    setValue("");
  }

  const handleDivide = () => {
    setResult(result / Number(value));
    setValue("");
  }

  return (
    <div>  
      <h1>Simplest working calculator</h1>
      <p>Résultat : {result}</p>
      
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Entrez un nombre"
      />
      
      <div>  
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleSubstract}>Substract</button>
        <button onClick={handleMultiply}>Multiply</button>
        <button onClick={handleDivide}>Divide</button>
      </div>
    </div>
  )

}

export default App;