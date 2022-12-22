import '../css/TodoList.css'


function TodoList(props) {
  return (
    <section className="todo-list-container">
      {props.error && props.onError()}
      {props.loading && props.onLoading()}

      {(!props.loading && !props.todosFiltered.length) && props.onEmptyTodos()}

      <ul>
        {props.todosFiltered.map(props.render)}
      </ul>
    </section>
  );
}


export { TodoList };