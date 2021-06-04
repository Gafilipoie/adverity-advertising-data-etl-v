import { csvParse } from 'd3';
import { GET, adverityDataEndpoint } from '../../../config/http';

const modulePrefix = 'DASHBOARD_';

export const actionTypes = {
  LOAD_DATA: `${modulePrefix}LOAD_DATA`,
  SELECT_DATA_SOURCE: `${modulePrefix}SELECT_DATA_SOURCE`,
  SELECT_CAMPAIGN: `${modulePrefix}SELECT_CAMPAIGN`,
  FILTER_DATA: `${modulePrefix}FILTER_DATA`,
};

export const loadData = (dispatch) => {
  GET(adverityDataEndpoint).then(({ data }) => {
    dispatch({
      type: actionTypes.LOAD_DATA,
      payload: csvParse(data),
    });
  });
};

export const handleDataSourceChange = (values, state, dispatch) => {
  const { allData } = state;
  dispatch({
    type: actionTypes.SELECT_DATA_SOURCE,
    payload: {
      allData,
      selectedDataSources: values,
    },
  });
};

export const handleCampaignChange = (values, state, dispatch) => {
  const { allData } = state;
  dispatch({
    type: actionTypes.SELECT_CAMPAIGN,
    payload: {
      allData,
      selectedCampaigns: values,
    },
  });
};

export const handleFilterData = (state, dispatch) => {
  const { allData, selectedDataSources, selectedCampaigns } = state;
  dispatch({
    type: actionTypes.FILTER_DATA,
    payload: {
      allData,
      selectedDataSources,
      selectedCampaigns,
    },
  });
};
