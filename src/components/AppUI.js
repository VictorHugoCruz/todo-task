import { TodoCounter } from '../components/TodoCounter';
import { TodoList } from '../components/TodoList';
import { TodoItem }  from '../components/TodoItem';
import { TodoSearch } from '../components/TodoSearch';
import { CreateTodoButton } from '../components/CreateTodoButton';

function AppUI({
  totalTodos,
  completedTodos,
  searchValue,
  setSearchValue,
  todosFiltered,
  completeTodo,
  deleteTodo,
}) {
  return ( 
    <div className="app-container">
    <TodoCounter 
      totalTodos={totalTodos}
      completedTodos={completedTodos}
    />
    <TodoSearch 
      searchValue={searchValue}
      setSearchValue={setSearchValue}
    />
    <TodoList>
      {todosFiltered.map(todo => (
        <TodoItem 
          key={todo.text}
          text={todo.text}
          completed={todo.completed}
          onComplete={()=>completeTodo(todo.text)}
          onDelete={()=>deleteTodo(todo.text)}
        />
      ))}
    </TodoList>
    <CreateTodoButton />
  </div>  
  );
}

export { AppUI };