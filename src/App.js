import './App.css';
import { TodoCounter } from './TodoCounter';
import { TodoList } from './TodoList';
import { TodoItem }  from './TodoItem';
import { TodoSearch } from './TodoSearch';
import { CreateTodoButton } from './CreateTodoButton'

const todos = [
  { text: 'dar estilos a nuestra app de todos', completed: false},
  { text: 'terminar el curso de react', completed: false},
  { text: 'tomar el curso de postgres', completed: false},
  { text: 'tomar el curso de mongodb', completed: true},
  { text: 'tomar el curso de firebase', completed: true},
  { text: 'tomar el curso de JavaScrip', completed: true},

]

function App() {
  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {todos.map(todo => (
          <TodoItem 
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            />
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}

export default App;
