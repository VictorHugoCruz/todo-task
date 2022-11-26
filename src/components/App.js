import React from 'react';
import { AppUI } from './AppUI';

// const defaultTodos = [
//   { text: 'dar estilos a nuestra app de todos', completed: false},
//   { text: 'terminar el curso de react', completed: false},
//   { text: 'Nunca pares de aprender', completed: false},
//   { text: 'tomar el curso de mongodb', completed: true},
//   { text: 'tomar el curso de firebase', completed: true},
//   { text: 'tomar el curso de JavaScrip', completed: true},

// ]

function App() {
  const localStorageTodos = localStorage.getItem('TODOS_V1');

  let parsedTodos;
  if (!localStorageTodos) {
    localStorage.setItem('TODOS_V1', JSON.stringify([]));
    parsedTodos = [];
  } else {
    parsedTodos = JSON.parse(localStorage.getItem('TODOS_V1'));
  }

  const [todos, setTodos] = React.useState(parsedTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let todosFiltered = [];
  if (!searchValue.length >= 1) {
    todosFiltered = todos;
  } else {
    todosFiltered = todos.filter(todo => {
      const todoText = todo.text.toLocaleLowerCase();
      const searchvalueText = searchValue.toLocaleLowerCase();
      return todoText.includes(searchvalueText);

    })
  }


  const updateTodos = (newTodos) => {
    const stringifiedTodos = JSON.stringify(newTodos);
    localStorage.setItem('TODOS_V1', stringifiedTodos);
    setTodos(newTodos);
  }
  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    todos[todoIndex].completed = true;
    const newTodos = [...todos];
    updateTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    todos.splice(todoIndex, 1);
    const newTodos = [...todos];
    updateTodos(newTodos);
  }

  return (
    <AppUI
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      todosFiltered={todosFiltered}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
