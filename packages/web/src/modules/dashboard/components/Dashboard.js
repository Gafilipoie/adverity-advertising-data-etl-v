import React, { useEffect, useReducer } from 'react';
import { loadData } from '../actions';
import reducer, { initialState } from '../reducer';
import Filter from './filter';
import StyleDashboard from './Dashboard.style';

export const FilterContext = React.createContext();

const Dashboard = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    loadData(dispatch);
  }, []);
console.log(state)
  return (
    <FilterContext.Provider value={{ state, dispatch }}>
      <StyleDashboard>
        <Filter />
        <main className="main-panel">main</main>
      </StyleDashboard>
    </FilterContext.Provider>
  );
};

export default Dashboard;
