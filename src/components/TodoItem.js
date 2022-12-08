import '../css/TodoItem.css';
import { FaCheck, FaTrashAlt } from 'react-icons/fa';


function TodoItem(props) {

  return (
    <li className="todo-item">
      <span
        className={`item__icon item__icon--check ${props.completed && 'item__icon--check-active'}`}
        onClick={props.onComplete}
      >
        <FaCheck />
      </span>

      <p className={`todo-item__p ${props.completed && 'todo-item__p--completed'}`}>{props.text}</p>

      <span
        className='item__icon item__icon--delete'
        onClick={props.onDelete}
      >
        <FaTrashAlt />
      </span>
    </li>
  )
}

export { TodoItem };