import React, { useContext } from 'react';
import { AppContext } from '../App.jsx';
import CardsWather from './CardsWather';
import WatherInfo from './WatherInfo';

const Table = (props: any) => {
  const { state, dispatch } = useContext(AppContext);

  return (
    <div className='info'>
      <CardsWather favorires={state.favorires} />
      <WatherInfo data={state.data} search={state.search} dispatch={dispatch} />
    </div>
  );
};

export default Table;