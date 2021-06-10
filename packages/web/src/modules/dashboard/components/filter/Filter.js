import React, { useContext } from 'react';
import { Button, Select } from '@adverity/components';
import { handleDataSourceChange, handleCampaignChange, handleFilterData } from '../../actions';
import { FilterContext } from '../Dashboard';
import StyledFilter from './Filter.style';

const Filter = () => {
  const { state, dispatch } = useContext(FilterContext);
  return (
    <StyledFilter>
      <div className="dataSources">
        <h3>DataSource</h3>
        <Select
          placeholder="All"
          options={state.dataSources}
          onChange={(values) => handleDataSourceChange(values, state, dispatch)}
        />
      </div>
      <div className="campaigns">
        <h3>Campaign</h3>
        <Select
          placeholder="All"
          options={state.campaigns}
          onChange={(values) => handleCampaignChange(values, state, dispatch)}
        />
      </div>
      <div className="apply-wrapper">
        <Button action={() => handleFilterData(state, dispatch)}>Apply</Button>
      </div>
    </StyledFilter>
  );
};

export default Filter;
