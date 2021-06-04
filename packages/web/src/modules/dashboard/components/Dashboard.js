import React, { useEffect, useReducer } from 'react';
import { loadData } from '../actions';
import reducer, { initialState } from '../reducer';
import Filter from './filter';
import Metric from './metric';
import StyleDashboard from './Dashboard.style';

export const FilterContext = React.createContext();

const Dashboard = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    loadData(dispatch);
  }, []);

  return (
    <FilterContext.Provider value={{ state, dispatch }}>
      <StyleDashboard>
        <Filter />
        <Metric />
      </StyleDashboard>
    </FilterContext.Provider>
  );
};

export default Dashboard;
