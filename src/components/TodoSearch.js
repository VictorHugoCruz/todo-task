import React from 'react';
import '../css/TodoSearch.css';
import { TodoContex } from './TodoProvider';

function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContex);

  const onSearchValueChange = (event) => {
    console.log(event.target.value)
    setSearchValue(event.target.value);
  }

  return (
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