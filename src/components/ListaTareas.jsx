import Tarea from './Tarea';

function ListaTareas({ tareas, onToggle }) {
  if (tareas.length === 0) {
    return <p>No hay tareas aún. 🎉</p>;
  }

  return (
    <ul>
      {tareas.map((tarea) => (
        <Tarea
          key={tarea.id}
          tarea={tarea}
          onToggle={() => onToggle(tarea.id)}
        />
      ))}
    </ul>
  );
}

export default ListaTareas;
