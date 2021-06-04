import {
  filterData,
  filterCampaigns,
  filterDataSources,
  transformDataSources,
  transformCampaigns,
} from '../helpers';
import { actionTypes } from '../actions';
import initialState from './initialState';

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.LOAD_DATA:
      return {
        ...state,
        allData: action.payload,
        dataSources: transformDataSources(action.payload),
        campaigns: transformCampaigns(action.payload),
        filteredData: action.payload,
      };
    case actionTypes.SELECT_DATA_SOURCE: {
      const { allData, selectedDataSources } = action.payload;
      return {
        ...state,
        campaigns: filterCampaigns(selectedDataSources, allData),
        selectedDataSources
      };
    }
    case actionTypes.SELECT_CAMPAIGN: {
      const { allData, selectedCampaigns } = action.payload;
      return {
        ...state,
        dataSources: filterDataSources(selectedCampaigns, allData),
        selectedCampaigns
      };
    }
    case actionTypes.FILTER_DATA: {
      const { allData, selectedDataSources, selectedCampaigns } = action.payload;
      return {
        ...state,
        filteredData: filterData(selectedDataSources, selectedCampaigns, allData),
      };
    }
    default:
      return state;
  }
};

export { initialState };
export default reducer;
