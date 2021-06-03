import axios from 'axios';

export const adverityDataEndpoint =
  'http://adverity-challenge.s3-website-eu-west-1.amazonaws.com/DAMKBAoDBwoDBAkOBAYFCw.csv';

const RequestFactory = (method, url, headers = {}, data, responseType, options) =>
  axios({
    method,
    url,
    data,
    headers,
    crossDomain: true,
    responseType,
    ...options,
  }).catch((error) => console.log(error));

export const GET = (url, headers = {}, ...options) =>
  RequestFactory('get', url, headers, null, null, ...options);
