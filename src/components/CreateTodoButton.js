import '../css/CreateTodoButton.css';

function CreateTodoButton(props){

  const clickOpenModal = (msg)=>{
    alert(msg)
  }
  
  return(
    <button 
      className='create-todo-button'
      onClick={()=>clickOpenModal('parametro de la funcion')}
    >
    +
    </button>
  )
}

export { CreateTodoButton };