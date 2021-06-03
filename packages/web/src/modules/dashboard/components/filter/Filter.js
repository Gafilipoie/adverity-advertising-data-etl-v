import React, { Component, useContext } from 'react';
import { Select } from '@adverity/components';
import { handleDataSourceChange, handleCampaignChange } from '../../actions';
import { filterDataSources, filterCampaigns } from '../../helpers';
import { FilterContext } from '../Dashboard';

const Filter = () => {
  const { state, dispatch } = useContext(FilterContext);

  return (
    <div className="control-panel">
      <div>
        <h3>DataSource</h3>
        <Select
          label="ceva"
          placeholder="All"
          options={state.dataSources}
          onChange={(values) => handleDataSourceChange(values, state, dispatch)}
        />
      </div>
      <div>
        <h3>Campaign</h3>
        <Select
          placeholder="All"
          options={state.campaigns}
          onChange={(values) => handleCampaignChange(values, state, dispatch)}
        />
      </div>
    </div>
  );
};

export default Filter;
