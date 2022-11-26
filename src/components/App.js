import React from 'react';
import { AppUI } from './AppUI';

const useLocalStorage = (itemName, initialValue) => {
  const localStorageItem = localStorage.getItem(itemName);

  let parsedItem;
  if (!localStorageItem) {
    localStorage.setItem('itemName', JSON.stringify(initialValue));
    parsedItem = initialValue;
  } else {
    parsedItem = JSON.parse(localStorage.getItem(itemName));
  }
  const [item, setItem] = React.useState(parsedItem);

  const updateTodos = (newItem) => {
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem);
    setItem(newItem);
  }

  return [
    item,
    updateTodos
  ]
}

function App() {


  const [todos, setTodos] = useLocalStorage('TODOS_V1', []);
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

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    todos[todoIndex].completed = true;
    const newTodos = [...todos];
    setTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    todos.splice(todoIndex, 1);
    const newTodos = [...todos];
    setTodos(newTodos);
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
