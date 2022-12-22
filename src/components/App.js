import React from 'react'
import { TodoCounter } from '../components/TodoCounter';
import { TodoList } from '../components/TodoList';
import { TodoItem } from '../components/TodoItem';
import { TodoSearch } from '../components/TodoSearch';
import { CreateTodoButton } from '../components/CreateTodoButton';
import { TodoForm } from './TodoForm';
import '../css/App.css';
import { Modal } from './Modal';
import { useTodos } from './useTodos';
import { TodosError } from './TodosError';
import { TodosLoading } from './TodosLoading';
import { EmptyTodos } from './EmptyTodos';


function App() {
  const {
    error,
    loading,
    todosFiltered,
    completeTodo,
    deleteTodo,
    openModal,
    addTodo,
    setOpenModal,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue
  } = useTodos();
  return (
    <React.Fragment>
      <TodoCounter
        totalTodos={totalTodos}
        completedTodos={completedTodos}
      />
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}

      />

      <TodoList
        error={error}
        loading={loading}
        todosFiltered={todosFiltered}
        onError={() => <TodosError />}
        onLoading={() => <TodosLoading />}
        onEmptyTodos={() => <EmptyTodos />}
        render={todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )}
      />
      {/* <TodoList>
        {error && <TodosError />}
        {!loading && <TodosLoading />}
        {(!todosFiltered.length && loading) && <EmptyTodos />}

        {todosFiltered.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList> */}
      {openModal && (
        <Modal>
          <TodoForm
            addTodo={addTodo}
            setOpenModal={setOpenModal}
          />
        </Modal>
      )}
      <CreateTodoButton
        setOpenModal={setOpenModal}
      />
    </React.Fragment>
  );
}

export default App;
