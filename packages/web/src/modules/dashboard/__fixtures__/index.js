const date = new Date('01.01.2019');

export const CAMPAIGN_LIKE_ADS = 'Like Ads';
export const CAMPAIGN_OFFER_CAMPAIGNS_CONVERSIONS = 'Offer Campaigns - Conversions';
export const DATASOURCE_FACEBOOK_ADS = 'Facebook Ads';
export const DATASOURCE_GOOGLE_ADWORDS = 'Google Adwords';

export const mockDataSorucesFacebookAds = [
  {
    Campaign: CAMPAIGN_LIKE_ADS,
    Clicks: '59.8',
    Datasource: DATASOURCE_FACEBOOK_ADS,
    Date: '01.01.2019',
    Impressions: '897',
  },
  {
    Campaign: CAMPAIGN_LIKE_ADS,
    Clicks: '63.3',
    Datasource: DATASOURCE_FACEBOOK_ADS,
    Date: '01.01.2019',
    Impressions: '943.5',
  },
  {
    Campaign: CAMPAIGN_LIKE_ADS,
    Clicks: '66.6',
    Datasource: DATASOURCE_FACEBOOK_ADS,
    Date: '01.01.2019',
    Impressions: '988',
  },
  {
    Campaign: CAMPAIGN_LIKE_ADS,
    Clicks: '69.5',
    Datasource: DATASOURCE_FACEBOOK_ADS,
    Date: '01.01.2019',
    Impressions: '1025.5',
  },
  {
    Campaign: CAMPAIGN_LIKE_ADS,
    Clicks: '72.2',
    Datasource: DATASOURCE_FACEBOOK_ADS,
    Date: '01.01.2019',
    Impressions: '1061',
  },
];

export const mockDataSourcesGoogleAdwords = [
  {
    Campaign: CAMPAIGN_OFFER_CAMPAIGNS_CONVERSIONS,
    Clicks: '74.7',
    Datasource: DATASOURCE_GOOGLE_ADWORDS,
    Date: '01.01.2019',
    Impressions: '1092.5',
  },
  {
    Campaign: CAMPAIGN_OFFER_CAMPAIGNS_CONVERSIONS,
    Clicks: '76.9',
    Datasource: DATASOURCE_GOOGLE_ADWORDS,
    Date: '01.01.2019',
    Impressions: '1119.5',
  },
  {
    Campaign: CAMPAIGN_OFFER_CAMPAIGNS_CONVERSIONS,
    Clicks: '79',
    Datasource: DATASOURCE_GOOGLE_ADWORDS,
    Date: '01.01.2019',
    Impressions: '1146',
  },
  {
    Campaign: CAMPAIGN_OFFER_CAMPAIGNS_CONVERSIONS,
    Clicks: '80.8',
    Datasource: DATASOURCE_GOOGLE_ADWORDS,
    Date: '01.01.2019',
    Impressions: '1167',
  },
  {
    Campaign: CAMPAIGN_OFFER_CAMPAIGNS_CONVERSIONS,
    Clicks: '82.5',
    Datasource: DATASOURCE_GOOGLE_ADWORDS,
    Date: '01.01.2019',
    Impressions: '1187.5',
  },
  {
    Campaign: CAMPAIGN_OFFER_CAMPAIGNS_CONVERSIONS,
    Clicks: '84.1',
    Datasource: DATASOURCE_GOOGLE_ADWORDS,
    Date: '01.01.2019',
    Impressions: '1205.5',
  },
];

export const mockData = [...mockDataSorucesFacebookAds, ...mockDataSourcesGoogleAdwords];

export const transformedMockData = [
  {
    Campaign: CAMPAIGN_LIKE_ADS,
    Clicks: '59.8',
    Datasource: DATASOURCE_FACEBOOK_ADS,
    Date: date,
    Impressions: '897',
  },
  {
    Campaign: CAMPAIGN_LIKE_ADS,
    Clicks: '63.3',
    Datasource: DATASOURCE_FACEBOOK_ADS,
    Date: date,
    Impressions: '943.5',
  },
  {
    Campaign: CAMPAIGN_LIKE_ADS,
    Clicks: '66.6',
    Datasource: DATASOURCE_FACEBOOK_ADS,
    Date: date,
    Impressions: '988',
  },
  {
    Campaign: CAMPAIGN_LIKE_ADS,
    Clicks: '69.5',
    Datasource: DATASOURCE_FACEBOOK_ADS,
    Date: date,
    Impressions: '1025.5',
  },
  {
    Campaign: CAMPAIGN_LIKE_ADS,
    Clicks: '72.2',
    Datasource: DATASOURCE_FACEBOOK_ADS,
    Date: date,
    Impressions: '1061',
  },
  {
    Campaign: CAMPAIGN_OFFER_CAMPAIGNS_CONVERSIONS,
    Clicks: '74.7',
    Datasource: DATASOURCE_GOOGLE_ADWORDS,
    Date: date,
    Impressions: '1092.5',
  },
  {
    Campaign: CAMPAIGN_OFFER_CAMPAIGNS_CONVERSIONS,
    Clicks: '76.9',
    Datasource: DATASOURCE_GOOGLE_ADWORDS,
    Date: date,
    Impressions: '1119.5',
  },
  {
    Campaign: CAMPAIGN_OFFER_CAMPAIGNS_CONVERSIONS,
    Clicks: '79',
    Datasource: DATASOURCE_GOOGLE_ADWORDS,
    Date: date,
    Impressions: '1146',
  },
  {
    Campaign: CAMPAIGN_OFFER_CAMPAIGNS_CONVERSIONS,
    Clicks: '80.8',
    Datasource: DATASOURCE_GOOGLE_ADWORDS,
    Date: date,
    Impressions: '1167',
  },
  {
    Campaign: CAMPAIGN_OFFER_CAMPAIGNS_CONVERSIONS,
    Clicks: '82.5',
    Datasource: DATASOURCE_GOOGLE_ADWORDS,
    Date: date,
    Impressions: '1187.5',
  },
  {
    Campaign: CAMPAIGN_OFFER_CAMPAIGNS_CONVERSIONS,
    Clicks: '84.1',
    Datasource: DATASOURCE_GOOGLE_ADWORDS,
    Date: date,
    Impressions: '1205.5',
  },
];

export const mockDataSources = [DATASOURCE_FACEBOOK_ADS, DATASOURCE_GOOGLE_ADWORDS];

export const mockCampains = [CAMPAIGN_LIKE_ADS, CAMPAIGN_OFFER_CAMPAIGNS_CONVERSIONS];
