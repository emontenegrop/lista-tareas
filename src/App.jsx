import ListaTareas from './components/ListaTareas';
import NuevaTarea from './components/NuevaTarea';
import useTareas from './hooks/useTareas';

function App() {
  const { tareas, agregarTarea, toggleTarea } = useTareas();

  return (
    <div className="p-4">
      <h1>📝 Lista de Tareas</h1>
      <NuevaTarea onAgregar={agregarTarea} />
      <ListaTareas tareas={tareas} onToggle={toggleTarea} />
    </div>
  );
}

export default App;
