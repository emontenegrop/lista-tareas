// src/components/NuevaTarea.jsx
import { useState } from 'react';

function NuevaTarea({ onAgregar }) {
  const [texto, setTexto] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (texto.trim()) {
      onAgregar(texto);
      setTexto('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 my-4">
      <input
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Añade una nueva tarea..."
        className="input-mac"
        autoFocus
      />
      <button
        type="submit"
        className="btn-mac text-white"
        aria-label="Agregar tarea"
      >
        ➕
      </button>
    </form>
  );
}

export default NuevaTarea;