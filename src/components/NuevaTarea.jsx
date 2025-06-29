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
    <form onSubmit={handleSubmit}>
      <input
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Escribe una tarea"
      />
      <button type="submit">Agregar</button>
    </form>
  );
}

export default NuevaTarea;