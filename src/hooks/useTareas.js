import { useState, useEffect } from 'react';

function useTareas() {
  const [tareas, setTareas] = useState(() => {
    const guardadas = localStorage.getItem('tareas');
    return guardadas ? JSON.parse(guardadas) : [];
  });

  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tareas));
  }, [tareas]);

  const agregarTarea = (texto) => {
    const nueva = {
      id: Date.now(),
      texto,
      completada: false
    };
    setTareas([...tareas, nueva]);
  };

  const toggleTarea = (id) => {
    setTareas(tareas.map(t =>
      t.id === id ? { ...t, completada: !t.completada } : t
    ));
  };

  return { tareas, agregarTarea, toggleTarea };
}

export default useTareas;
