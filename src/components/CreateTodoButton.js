import '../css/CreateTodoButton.css';
import React from 'react'

function CreateTodoButton({ setOpenModal }) {
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