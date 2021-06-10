import React, { useContext } from 'react';
import { Chart } from '@adverity/components';
import { FilterContext } from '../Dashboard';
import StyledMetric from './Metric.style';

const Metric = () => {
  const { state } = useContext(FilterContext);
console.log(state.filteredData)
  return (
    <StyledMetric>
      <Chart data={state.filteredData} />
    </StyledMetric>
  );
};

export default Metric;
