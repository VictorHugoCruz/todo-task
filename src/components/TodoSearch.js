import React from 'react';
import '../css/TodoSearch.css';

function TodoSearch({ searchValue, setSearchValue }){

  const onSearchValueChange = (event)=>{
    console.log(event.target.value)
    setSearchValue(event.target.value);
  }

  return(
    <input 
      className='todo-search' 
      placeholder="Buscar TODO"
      onChange={onSearchValueChange}
      value={searchValue}
      >
    </input>
  )
}

export { TodoSearch };