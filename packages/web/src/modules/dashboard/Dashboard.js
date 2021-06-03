import React, { Component } from 'react';
import * as R from 'ramda';
import { csvParse } from 'd3';
import { Select } from '@adverity/components';
import { GET, adverityDataEndpoint } from '../../config/http';
import {
  filterDataSources,
  filterCampaigns,
  transformDataSources,
  transformCampaigns,
} from './helpers';
import StyleDashboard from './Dashboard.style';

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      allData: [],
      dataSources: [],
      campaigns: [],
    };
  }

  componentDidMount() {
    GET(adverityDataEndpoint).then(({ data }) => {
      const parsedData = csvParse(data);
      this.setState({
        allData: parsedData,
        dataSources: transformDataSources(parsedData),
        campaigns: transformCampaigns(parsedData),
      });
    });
  }

  onChangeDataSource = (selectedDataSources) => {
    const { allData } = this.state;
    this.setState({
      campaigns: filterCampaigns(selectedDataSources, allData),
    });
  };

  onChangeCampaign = (selectedCampaigns) => {
    const { allData } = this.state;
    this.setState({
      dataSources: filterDataSources(selectedCampaigns, allData),
    });
  };

  render() {
    const { dataSources, campaigns } = this.state;
    return (
      <StyleDashboard>
        <aside className="control-panel">
          DataSource
          <Select placeholder="" options={dataSources} onChange={this.onChangeDataSource} />
          Campaign
          <Select placeholder="" options={campaigns} onChange={this.onChangeCampaign} />
        </aside>
        <main className="main-panel">main</main>
      </StyleDashboard>
    );
  }
}

export default Dashboard;
