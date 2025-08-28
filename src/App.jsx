// src/App.jsx
import ListaTareas from './components/ListaTareas';
import NuevaTarea from './components/NuevaTarea';
import useTareas from './hooks/useTareas';

function App() {
  const { tareas, agregarTarea, toggleTarea } = useTareas();

  return (
    <div className="bg-mac flex items-center justify-center min-h-screen p-4">
      <div className="card-mac">
        {/* Header */}
        <div className="p-6 text-center border-b border-gray-700">
          <h1 className="text-2xl font-bold flex items-center justify-center gap-2 text-white">
            <span className="text-xl">📝</span>
            Lista de Tareas
          </h1>
          <p className="text-gray-400 text-sm mt-1">Organiza tu día con estilo</p>
        </div>

        {/* Body */}
        <div className="p-6 pt-4">
          <NuevaTarea onAgregar={agregarTarea} />
          <ListaTareas tareas={tareas} onToggle={toggleTarea} />
        </div>
      </div>
    </div>
  );
}

export default App;