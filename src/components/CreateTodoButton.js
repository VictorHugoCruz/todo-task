import '../css/CreateTodoButton.css';
import React from 'react'
import { TodoContex } from './TodoProvider';

function CreateTodoButton() {
  const { setOpenModal } = React.useContext(TodoContex);
  const clickOpenModal = () => {
    setOpenModal(prevState => !prevState);
  }

  return (
    <button
      className='create-todo-button'
      onClick={clickOpenModal}
    >
      +
    </button>
  )
}

export { CreateTodoButton };