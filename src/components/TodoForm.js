import React from 'react'
import { TodoContex } from './TodoProvider'
import '../css/TodoForm.css'

function TodoForm() {
  const { addTodo, setOpenModal } = React.useContext(TodoContex);
  const [newTextTodo, setNewTextTodo] = React.useState('');
  const onCancel = () => {
    setOpenModal(false);
  }

  const onChange = (event) => {
    setNewTextTodo(event.target.value);
  }
  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTextTodo);
    setOpenModal(false);
    setNewTextTodo('');
  }
  return (
    <form onSubmit={onSubmit}>
      <label className='form__title'>Describe tu nuevo Todo</label>
      <textarea className='form__textarea'
        value={newTextTodo}
        onChange={onChange}
        placeholder='Escribe aqui...'
      />
      <div
        className='form__button-container'
      >
        <button
          className='modal-button'
          type="button"
          onClick={onCancel}
        >Cancelar</button>

        <button
          className='modal-button modal-button--enviar'
          type="submit"
        >Añadir</button>
      </div>
    </form>
  )
}

export { TodoForm }
