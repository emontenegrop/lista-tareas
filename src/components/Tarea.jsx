function Tarea({ tarea, onToggle }) {
  return (
    <li
      onClick={onToggle}
      style={{
        textDecoration: tarea.completada ? 'line-through' : 'none',
        cursor: 'pointer'
      }}
    >
      ✅ {tarea.texto}
    </li>
  );
}

export default Tarea;
