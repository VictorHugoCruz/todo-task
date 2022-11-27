import React from 'react'
import { useLocalStorage } from '../utils/useLocalStorage';

const TodoContex = React.createContext();

function TodoProvider(props) {
  const { item: todos,
    updateTodos: setTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');
  const [openModal, setOpenModal] = React.useState(false);

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

  const addTodo = (text) => {
    if (text !== '') {
      todos.push({
        completed: false,
        text,
      });
      const newTodos = [...todos];
      setTodos(newTodos);
    }
  }

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    todos.splice(todoIndex, 1);
    const newTodos = [...todos];
    setTodos(newTodos);
  }

  return (
    <TodoContex.Provider value={{
      loading,
      error,
      totalTodos,
      completedTodos,
      searchValue,
      setSearchValue,
      todosFiltered,
      completeTodo,
      deleteTodo,
      addTodo,
      openModal,
      setOpenModal,
    }}>
      {props.children}
    </TodoContex.Provider>
  );
}

export { TodoProvider, TodoContex };
