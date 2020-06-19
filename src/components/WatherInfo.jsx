import React from 'react';
import Loader from './Loader';
import { TYPES } from '../reducer';
import { getCelsius } from '../utils'

const WatherInfo = (props) => {
  const { data, search, dispatch } = props;

  const addToFavorite = () => {
    dispatch({ type: TYPES.ADD_FAVORITE, payload: data })
  }

  if (!search) return null

  if (search && !data) {
    return <Loader />
  } else {
    return (
      <div className='wather'>
        <div className='wather-info'>
          <div className="wather-info___wather-header">
            <span className='wather-header__title'>{data.name}</span>
            <span className='wather-header__add' onClick={addToFavorite}>&hearts;</span>
          </div>
          <span>Температура: {getCelsius(data.main.temp_min)} - {getCelsius(data.main.temp_max)}°C</span>
          <span>Ощущается как: {getCelsius(data.main.feels_like)}°C</span>
          <span></span>
        </div>
      </div>
    );
  }


};

export default WatherInfo;