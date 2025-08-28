// src/components/ListaTareas.jsx
import Tarea from './Tarea';

function ListaTareas({ tareas, onToggle }) {
  if (tareas.length === 0) {
    return (
      <div className="text-center py-10">
        <div className="text-5xl mb-4">✨</div>
        <p className="text-gray-400 text-lg font-medium">Tu lista está vacía</p>
        <p className="text-gray-500 text-sm mt-1">Agrega una tarea para comenzar.</p>
      </div>
    );
  }

  return (
    <div className="mt-2 max-h-80 overflow-y-auto pr-1 custom-scrollbar">
      <ul className="space-y-2">
        {tareas.map((tarea) => (
          <li key={tarea.id} className="transform transition-all duration-200 hover:scale-[1.01]">
            <Tarea tarea={tarea} onToggle={() => onToggle(tarea.id)} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaTareas;