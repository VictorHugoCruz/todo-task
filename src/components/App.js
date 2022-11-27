import { AppUI } from './AppUI';
import { TodoProvider } from './TodoProvider';



function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
