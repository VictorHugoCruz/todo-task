/* eslint-disable no-lone-blocks */
import React from 'react'
import { TodoCounter } from '../components/TodoCounter';
import { TodoContex } from '../components/TodoProvider';
import { TodoList } from '../components/TodoList';
import { TodoItem } from '../components/TodoItem';
import { TodoSearch } from '../components/TodoSearch';
import { CreateTodoButton } from '../components/CreateTodoButton';
import { TodoForm } from './TodoForm';
import '../css/App.css';
import { Modal } from './Modal';

function AppUI() {
  const {
    error,
    loading,
    todosFiltered,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContex)
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {error && <p>Ha ocurrido un error, por favor recarga la pagina</p>}
        {!loading && <p></p>}
        {(!todosFiltered.length && loading) && <p>crea tu primer TODO</p>}

        {todosFiltered.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
      <CreateTodoButton
        setOpenModal={setOpenModal}
      />
    </React.Fragment>
  );
}

export { AppUI };