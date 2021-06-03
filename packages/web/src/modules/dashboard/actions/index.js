import { csvParse } from 'd3';
import { GET, adverityDataEndpoint } from '../../../config/http';

const modulePrefix = 'DASHBOARD_';

export const actionTypes = {
  LOAD_DATA: `${modulePrefix}LOAD_DATA`,
  SELECT_DATA_SOURCE: `${modulePrefix}SELECT_DATA_SOURCE`,
  SELECT_CAMPAIGN: `${modulePrefix}SELECT_CAMPAIGN`,
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
  dispatch({
    type: actionTypes.SELECT_DATA_SOURCE,
    payload: {
      allData: state.allData,
      selectedDataSources: values,
    },
  });
};

export const handleCampaignChange = (values, state, dispatch) => {
  dispatch({
    type: actionTypes.SELECT_CAMPAIGN,
    payload: {
      allData: state.allData,
      selectedCampaigns: values,
    },
  });
};
