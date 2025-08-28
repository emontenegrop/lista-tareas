// src/components/Tarea.jsx
function Tarea({ tarea, onToggle }) {
  return (
    <div
      onClick={onToggle}
      className={`flex items-center gap-4 p-4 rounded-2xl transition-all duration-200 cursor-pointer group
        ${tarea.completada ? 'bg-gray-800/50 text-gray-500' : 'bg-gray-800/60 hover:bg-gray-700/70'}
      `}
    >
      <div className={`
        flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-full
        border-2 transition-all duration-200
        ${tarea.completada 
          ? 'bg-green-500/20 border-green-400' 
          : 'border-gray-500 group-hover:border-blue-400'
        }
      `}>
        {tarea.completada ? (
          <span className="text-green-400 text-sm">✔️</span>
        ) : (
          <span className="text-gray-600 text-sm">○</span>
        )}
      </div>
      <span
        className={`flex-1 text-sm font-medium transition-all duration-200
          ${tarea.completada ? 'line-through opacity-70' : 'text-white'}
        `}
      >
        {tarea.texto}
      </span>
    </div>
  );
}

export default Tarea;