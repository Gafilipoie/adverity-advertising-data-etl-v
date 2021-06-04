import * as R from 'ramda';
import { isBlank } from '@adverity/utils';

export const transformDataSources = (data) =>
  R.compose(
    R.uniq,
    R.reduce((acc, item) => {
      acc.push(item.Datasource);
      return acc;
    }, [])
  )(data);

export const transformCampaigns = (data) =>
  R.compose(
    R.uniq,
    R.reduce((acc, item) => {
      acc.push(item.Campaign);
      return acc;
    }, [])
  )(data);

const transformDataSourcesByCampaign = (campaign, data) =>
  R.reduce(
    (acc, item) => {
      if (item.Campaign === campaign.value) {
        acc.push(item.Datasource);
      }
      return acc;
    },
    [],
    data
  );

const transformCampaignsByDataSource = (dataSource, data) =>
  R.reduce(
    (acc, item) => {
      if (item.Datasource === dataSource.value) {
        acc.push(item.Campaign);
      }
      return acc;
    },
    [],
    data
  );

export const filterDataSources = (selectedCampaigns, data) => {
  if (isBlank(selectedCampaigns)) return transformDataSources(data);
  let dataSources = [];
  R.forEach((campaign) => {
    const filteredDataSources = transformDataSourcesByCampaign(campaign, data);
    dataSources = R.concat(dataSources, filteredDataSources);
  }, selectedCampaigns);
  return R.uniq(dataSources);
};

export const filterCampaigns = (selectedDataSources, data) => {
  if (isBlank(selectedDataSources)) return transformCampaigns(data);
  let campaigns = [];
  R.forEach((dataSource) => {
    const filteredCampaigns = transformCampaignsByDataSource(dataSource, data);
    campaigns = R.concat(campaigns, filteredCampaigns);
  }, selectedDataSources);
  return R.uniq(campaigns);
};

export const filterData = (selectedDataSources, selectedCampaigns, allData) => {
  if (isBlank(selectedDataSources) && isBlank(selectedCampaigns)) return allData;
  let filteredDataSourceData = [];
  let filteredAllData = [];
  if (!isBlank(selectedDataSources)) {
    R.forEach((dataSource) => {
      const filtered = R.filter((item) => item.Datasource === dataSource.value, allData);
      filteredDataSourceData = R.concat(filteredDataSourceData, filtered);
    }, selectedDataSources);
  }
  if (!isBlank(selectedCampaigns)) {
    R.forEach((campaign) => {
      const filtered = R.filter(
        (item) => item.Campaign === campaign.value,
        isBlank(filteredDataSourceData) ? allData : filteredDataSourceData
      );
      filteredAllData = R.concat(filteredAllData, filtered);
    }, selectedCampaigns);
  }
  return isBlank(filteredAllData) ? filteredDataSourceData : filteredAllData;
};
