# lista-tareas
Conceptos principales de react


# 1. Componentes

Concepto: Son la base de cualquier aplicación React. Un componente puede ser una función o una clase que devuelve JSX (HTML con JavaScript).

Ejemplo:
  ```
  function Saludo() {
    return <h1>Hola, Mundo!</h1>;
  }
  ```
  

# 2. JSX (JavaScript XML)

Concepto: Es una sintaxis que permite escribir HTML dentro de JavaScript.

Ejemplo:
```
const elemento = <h1>¡Hola desde JSX!</h1>;
```

# 3. Props (Propiedades)

Concepto: Son los parámetros que se pasan a los componentes para personalizarlos.

Ejemplo:
```
function Saludo(props) {
  return <h1>Hola, {props.nombre}</h1>;
}

// Uso:
<Saludo nombre="Edwin" />
```

# 4. Estado (useState)

Concepto: El estado permite a los componentes manejar y recordar valores internos.

Ejemplo:
```
import { useState } from 'react';

function Contador() {
  const [contador, setContador] = useState(0);
  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
    </div>
  );
}
```
# 5. Eventos

Concepto: Permiten manejar acciones del usuario, como clics o escritura.

Ejemplo:
```
function Boton() {
  function handleClick() {
    alert('¡Hiciste clic!');
  }

  return <button onClick={handleClick}>Haz clic</button>;
}
```
# 6. useEffect (Efectos secundarios)

Concepto: Se usa para ejecutar código cuando el componente se monta, actualiza o desmonta.

Ejemplo:
```
import { useEffect } from 'react';

function Temporizador() {
  useEffect(() => {
    console.log('Componente montado');
  }, []);

  return <p>Mira la consola</p>;
}
```
# 7. Renderizado condicional

Concepto: Permite mostrar diferentes elementos según ciertas condiciones.

Ejemplo:
```
function Mensaje({ esVisible }) {
  return esVisible ? <p>¡Visible!</p> : <p>Oculto</p>;
}
```
# 8. Listas y keys

Concepto: Se usa .map() para renderizar listas. Las key son necesarias para optimizar el rendimiento.

Ejemplo:
```
function Lista({ nombres }) {
  return (
    <ul>
      {nombres.map((nombre, index) => (
        <li key={index}>{nombre}</li>
      ))}
    </ul>
  );
}
```
# 9. Lifting state up

Concepto: Compartir estado entre componentes hijos moviéndolo al componente padre.

Ejemplo:
```
function Padre() {
  const [valor, setValor] = useState('');

  return (
    <div>
      <Hijo onCambio={setValor} />
      <p>Valor: {valor}</p>
    </div>
  );
}

function Hijo({ onCambio }) {
  return <input onChange={(e) => onCambio(e.target.value)} />;
}
```
# 10. Hooks personalizados

Concepto: Reutilizar lógica de estado o efecto creando funciones con use.

Ejemplo:
```
function useContador() {
  const [contador, setContador] = useState(0);
  const incrementar = () => setContador(c => c + 1);
  return { contador, incrementar };
}

function Componente() {
  const { contador, incrementar } = useContador();
  return (
    <div>
      <p>{contador}</p>
      <button onClick={incrementar}>Sumar</button>
    </div>
  );
}
```
# 11. Crear el proyecto con Vite

    npx create-react-app front-files

    npm create vite@latest lista-tareas-react -- --template react

    Esto creará una carpeta llamada lista-tareas-react con la estructura de un proyecto React.

# 12. Entrar a la carpeta del proyecto

    cd lista-tareas-react

# 13. Instalar las dependencias

    npm install

# 14. Crear las carpetas del proyecto

    mkdir src/components src/hooks

# 15. Ejecutar el servidor de desarrollo

npm run dev

Esto abrirá la app en http://localhost:5173.


---
# ¿Qué conceptos usa este proyecto?


| Concepto            | Dónde se usa                                |
| ------------------- | ------------------------------------------- |
| Componentes         | `App`, `NuevaTarea`, `ListaTareas`, `Tarea` |
| JSX                 | En todos los archivos                       |
| Props               | `NuevaTarea`, `ListaTareas`, `Tarea`        |
| Estado (`useState`) | `NuevaTarea`, `useTareas`                   |
| Eventos             | `onClick`, `onChange`, `onSubmit`           |
| useEffect           | Guardado automático en `localStorage`       |
| Renderizado cond.   | `if (tareas.length === 0)`                  |
| Listas y keys       | `tareas.map` con `key={tarea.id}`           |
| Lifting State Up    | `App` maneja las tareas                     |
| Hook personalizado  | `useTareas()`                               |
