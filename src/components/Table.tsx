import React, { useReducer, useContext } from 'react';
import { reducer } from '../reducer';
import { AppContext } from '../App.jsx';
import WatherInfo from './WatherInfo';
import CardsWather from './CardsWather';

const Table = (props: any) => {
    const {state, dispatch} = useContext(AppContext);    
    
    return (
        <div className='info'>
            <CardsWather favorires={state.favorires}/>
            <WatherInfo data={state.data} search={state.search} dispatch={dispatch}/>
        </div>
    );
};

export default Table;