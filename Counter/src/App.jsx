// src/App.jsx
import { useState } from 'react';

function App() {
  // Exemple d'état simple (facultatif)
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h1>Mon premier projet React 🚀</h1>
      <p>Ça fonctionne !</p>

      <hr style={{ width: '50%', margin: '2rem auto' }} />

      <h2>Compteur simple :</h2>
      <p>Vous avez cliqué {count} fois</p>
      <button 
        onClick={() => setCount(count + 1)}
        style={{ padding: '0.5rem 1rem', fontSize: '1rem', cursor: 'pointer' }}
      >
        Cliquez-moi
      </button>
    </div>
  );
}

export default App;