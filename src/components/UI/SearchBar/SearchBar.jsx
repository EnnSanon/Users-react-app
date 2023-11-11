import React from 'react'
import './SearchBar.css';

const SearchBar = ({onChangeInputNumber, number}) => {
   

  return (
    <form>
        <label htmlFor='user'>Numero de Usarios: </label>
        <input type='text' id='user' onChange={onChangeInputNumber} value={number} />
    </form>
  )
}

export default SearchBar