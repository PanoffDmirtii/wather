import React, { useContext } from 'react';
import { getWather } from '../api/axios';
import { AppContext } from '../App';
import { TYPES } from '../reducer';

const Search = (props) => {
  const { state, dispatch } = useContext(AppContext)

  const handleSearch = (event) => {
    dispatch({ type: TYPES.SET_SEARCH, payload: event.target.value })
    const res = getWather(event.target.value)
    res.then(d => dispatch({ type: TYPES.SET_DATA, payload: d }))
  }

  return (
    <div className='search'>
      <div className='search-form'>
        <input className='search-form__input' type="text" placeholder='Search city...' onChange={handleSearch} />
      </div>
    </div>
  );
};

export default Search;