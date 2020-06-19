import React, { useReducer, useContext, createContext } from 'react';
import Header from './components/Header';
import Search from './components/Search.jsx';
import Table from './components/Table';
import {reducer, initState} from './reducer'


export const AppContext = React.createContext();

const App = () => {
  const [state, dispatch] = useReducer(reducer,initState);
  
  return (
    <div className='app'>
        <AppContext.Provider value={{state, dispatch}}>
          <Header/>
          <Search/>
          <Table/>
        </AppContext.Provider>
    </div>
  );
}

export default App;
