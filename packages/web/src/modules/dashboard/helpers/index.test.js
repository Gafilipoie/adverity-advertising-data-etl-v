import { assert } from 'chai';
import {
  CAMPAIGN_LIKE_ADS,
  DATASOURCE_FACEBOOK_ADS,
  CAMPAIGN_OFFER_CAMPAIGNS_CONVERSIONS,
  DATASOURCE_GOOGLE_ADWORDS,
  mockDataSorucesFacebookAds,
  mockDataSourcesGoogleAdwords,
  mockData,
  mockDataSources,
  mockCampains,
} from '../__fixtures__';
import {
  transformDataSources,
  transformCampaigns,
  transformDataSourcesByCampaign,
  transformCampaignsByDataSource,
  filterDataSources,
  filterCampaigns,
  filterData,
} from '.';

describe('Dashboard helpers', () => {
  describe('transformDataSources()', () => {
    it('should call transformDataSources()', () => {
      assert.deepEqual(
        transformDataSources(mockData),
        mockDataSources,
        'Expecting to return array of unique data sources'
      );
    });
  });

  describe('transformCampaigns()', () => {
    it('should call transformCampaigns()', () => {
      assert.deepEqual(
        transformCampaigns(mockData),
        mockCampains,
        'Expecting to return array of unique campaigns'
      );
    });
  });

  describe('transformDataSourcesByCampaign()', () => {
    it('should call transformDataSourcesByCampaign()', () => {
      assert.deepEqual(
        transformDataSourcesByCampaign({ value: CAMPAIGN_LIKE_ADS }, mockData),
        [
          DATASOURCE_FACEBOOK_ADS,
          DATASOURCE_FACEBOOK_ADS,
          DATASOURCE_FACEBOOK_ADS,
          DATASOURCE_FACEBOOK_ADS,
          DATASOURCE_FACEBOOK_ADS,
        ],
        'Expecting to return array of same data sources'
      );
    });
  });

  describe('transformCampaignsByDataSource()', () => {
    it('should call transformCampaignsByDataSource()', () => {
      assert.deepEqual(
        transformCampaignsByDataSource({ value: DATASOURCE_FACEBOOK_ADS }, mockData),
        [
          CAMPAIGN_LIKE_ADS,
          CAMPAIGN_LIKE_ADS,
          CAMPAIGN_LIKE_ADS,
          CAMPAIGN_LIKE_ADS,
          CAMPAIGN_LIKE_ADS,
        ],
        'Expecting to return array of same campaigns'
      );
    });
  });

  describe('filterDataSources()', () => {
    it('should call filterDataSources()', () => {
      assert.deepEqual(
        filterDataSources([{ value: CAMPAIGN_LIKE_ADS }], mockData),
        [DATASOURCE_FACEBOOK_ADS],
        'Expecting to return array of filtered unique data sources by campaigns'
      );
    });
  });

  describe('filterCampaigns()', () => {
    it('should call filterCampaigns()', () => {
      assert.deepEqual(
        filterCampaigns([{ value: DATASOURCE_FACEBOOK_ADS }], mockData),
        [CAMPAIGN_LIKE_ADS],
        'Expecting to return array of filtered unique campaigns by data source'
      );
    });
  });

  describe('filterData()', () => {
    it('should call filterData() and return all data', () => {
      assert.deepEqual(filterData([], [], mockData), mockData, 'Expecting to return all data');
    });

    it('should call filterData() and return filtered array by data sources', () => {
      assert.deepEqual(
        filterData([{ value: DATASOURCE_FACEBOOK_ADS }], [], mockData),
        mockDataSorucesFacebookAds,
        'Expecting to return filtered array by data sources'
      );
    });

    it('should call filterData() and return filtered array by campaigns', () => {
      assert.deepEqual(
        filterData([], [{ value: CAMPAIGN_LIKE_ADS }], mockData),
        mockDataSorucesFacebookAds,
        'Expecting to return filtered array by campaigns'
      );
    });
    it('should call filterData() and return filtered array by data sources and campaigns', () => {
      assert.deepEqual(
        filterData([{ value: DATASOURCE_GOOGLE_ADWORDS }], [{ value: CAMPAIGN_OFFER_CAMPAIGNS_CONVERSIONS }], mockData),
        mockDataSourcesGoogleAdwords,
        'Expecting to return filtered array by data sources and campaigns'
      );
    });
  });
});
