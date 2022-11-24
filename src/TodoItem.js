import './TodoItem.css'


function TodoItem(props) {
  return(
    <li className="todo-item">
      <span className={`item__icon item__icon--check ${props.completed && 'item__icon--check-active'}`}>C</span>
      <p className={`todo-item__p ${props.completed && 'todo-item__p--completed'}`}>{props.text}</p>
      <span className='item__icon item__icon--delete'>X</span>
    </li>
  )
}

export { TodoItem };