import * as R from 'ramda';
import * as d3 from 'd3';

const trasnformData = (data) => {
  const parseTime = d3.timeParse('%d.%m.%Y');
  return R.reduce(
    (acc, item) => {
      acc.push({
        ...item,
        Date: parseTime(item.Date),
      });
      return acc;
    },
    [],
    R.clone(data)
  );
};

const getConfig = data => {
  const margin = { top: 30, right: 40, bottom: 30, left: 50 };
  const width = 1000 - margin.left - margin.right;
  const height = 470 - margin.top - margin.bottom;

  const x = d3.scaleTime().range([0, width]);
  const y0 = d3.scaleLinear().range([height, 0]);
  const y1 = d3.scaleLinear().range([height, 0]);

  const xAxis = d3.axisBottom(x).ticks(10);
  const yAxisLeft = d3.axisLeft(y0).ticks(5);
  const yAxisRight = d3.axisRight(y1).ticks(5);

  const valueline = d3
    .line()
    .x(d => x(d.Date))
    .y(d => y0(d.Clicks));

  const valueline2 = d3
    .line()
    .x(d => x(d.Date))
    .y(d => y1(d.Impressions));

  x.domain(d3.extent(data, d => d.Date));
  y0.domain([0, d3.max(data, d => Math.max(d.Clicks))]);
  y1.domain([0, d3.max(data, d => Math.max(d.Impressions))]);

  return {
    width,
    height,
    margin,
    valueline,
    valueline2,
    xAxis,
    yAxisLeft,
    yAxisRight,
    x,
  };
};

export const buildGraph = (data, svg) => {
  const newData = trasnformData(data);
  const { width, height, margin, valueline, valueline2, xAxis, yAxisLeft, yAxisRight } = getConfig(
    newData
  );

  svg
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom);

  svg.select('.container').attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

  svg
    .select('.valueLine-1')
    .style('stroke', 'steelblue')
    .style('fill', 'none')
    .attr('d', valueline(newData));

  svg
    .select('.valueLine-2')
    .style('stroke', 'red')
    .style('fill', 'none')
    .attr('d', valueline2(newData));

  svg
    .select('.x-axis')
    .attr('class', 'x axis')
    .attr('transform', 'translate(0,' + height + ')')
    .call(xAxis);

  svg.select('.y-left-axis').call(yAxisLeft);

  svg
    .select('.y-right-axis')
    .attr('transform', 'translate(' + width + ' ,0)')
    .call(yAxisRight);
};

export const mockData = [
  { Date: '01.01.2019', Clicks: '59.8', Impressions: '897' },
  { Date: '01.01.2019', Clicks: '63.3', Impressions: '943.5' },
  { Date: '01.01.2019', Clicks: '66.6', Impressions: '988' },
  { Date: '01.01.2019', Clicks: '69.5', Impressions: '1025.5' },
  { Date: '01.01.2019', Clicks: '72.2', Impressions: '1061' },
  { Date: '01.01.2019', Clicks: '74.7', Impressions: '1092.5' },
  { Date: '01.01.2019', Clicks: '76.9', Impressions: '1119.5' },
  { Date: '01.01.2019', Clicks: '79', Impressions: '1146' },
  { Date: '01.01.2019', Clicks: '80.8', Impressions: '1167' },
  { Date: '01.01.2019', Clicks: '82.5', Impressions: '1187.5' },
  { Date: '01.01.2019', Clicks: '84.1', Impressions: '1205.5' },
  { Date: '01.01.2019', Clicks: '85.5', Impressions: '1220.5' },
  { Date: '01.01.2019', Clicks: '86.8', Impressions: '1235' },
  { Date: '01.01.2019', Clicks: '87.9', Impressions: '1245.5' },
  { Date: '01.01.2019', Clicks: '89', Impressions: '1257' },
  { Date: '01.01.2019', Clicks: '90', Impressions: '1266' },
  { Date: '01.01.2019', Clicks: '90.9', Impressions: '1273.5' },
  { Date: '01.01.2019', Clicks: '91.7', Impressions: '1280.5' },
  { Date: '01.01.2019', Clicks: '92.4', Impressions: '1285' },
  { Date: '01.01.2019', Clicks: '93.1', Impressions: '1290.5' },
  { Date: '01.01.2019', Clicks: '93.7', Impressions: '1293.5' },
  { Date: '01.01.2019', Clicks: '94.3', Impressions: '1296.5' },
  { Date: '01.01.2019', Clicks: '94.8', Impressions: '1299' },
  { Date: '01.01.2019', Clicks: '95.2', Impressions: '1299' },
  { Date: '01.01.2019', Clicks: '95.6', Impressions: '1299.5' },
  { Date: '01.01.2019', Clicks: '96', Impressions: '1300' },
  { Date: '01.01.2019', Clicks: '96.4', Impressions: '1299.6' },
  { Date: '01.01.2019', Clicks: '96.7', Impressions: '1299.5' },
  { Date: '01.01.2019', Clicks: '97', Impressions: '1298' },
  { Date: '01.01.2019', Clicks: '97.3', Impressions: '1297.5' },
  { Date: '01.01.2019', Clicks: '97.5', Impressions: '1294.5' },
  { Date: '01.01.2019', Clicks: '97.7', Impressions: '1291.5' },
  { Date: '01.01.2019', Clicks: '97.9', Impressions: '1289.5' },
  { Date: '01.01.2019', Clicks: '98.1', Impressions: '1286.5' },
  { Date: '01.01.2019', Clicks: '98.3', Impressions: '1284.5' },
  { Date: '01.01.2019', Clicks: '98.4', Impressions: '1280' },
  { Date: '01.01.2019', Clicks: '98.6', Impressions: '1277' },
  { Date: '01.01.2019', Clicks: '98.7', Impressions: '1273.5' },
  { Date: '01.01.2019', Clicks: '98.8', Impressions: '1269' },
  { Date: '01.01.2019', Clicks: '98.9', Impressions: '1265.5' },
  { Date: '01.01.2019', Clicks: '99', Impressions: '1261' },
  { Date: '01.01.2019', Clicks: '99.1', Impressions: '1256.5' },
  { Date: '01.01.2019', Clicks: '99.2', Impressions: '1253' },
  { Date: '01.01.2019', Clicks: '99.3', Impressions: '1248.5' },
  { Date: '01.01.2019', Clicks: '99.3', Impressions: '1243.5' },
  { Date: '01.01.2019', Clicks: '99.4', Impressions: '1239' },
  { Date: '01.01.2019', Clicks: '99.4', Impressions: '1233' },
  { Date: '01.01.2019', Clicks: '99.5', Impressions: '1229.5' },
  { Date: '01.01.2019', Clicks: '99.5', Impressions: '1223.5' },
  { Date: '01.01.2019', Clicks: '99.6', Impressions: '1220' },
  { Date: '01.01.2019', Clicks: '99.6', Impressions: '1214' },
  { Date: '01.01.2019', Clicks: '99.6', Impressions: '1208' },
  { Date: '01.01.2019', Clicks: '99.7', Impressions: '1204.5' },
  { Date: '01.01.2019', Clicks: '99.7', Impressions: '1198.5' },
  { Date: '01.01.2019', Clicks: '99.7', Impressions: '1193.5' },
  { Date: '01.01.2019', Clicks: '99.8', Impressions: '1189' },
  { Date: '01.01.2019', Clicks: '99.8', Impressions: '1183' },
  { Date: '01.01.2019', Clicks: '99.8', Impressions: '1178' },
  { Date: '01.01.2019', Clicks: '99.8', Impressions: '1172' },
  { Date: '01.01.2019', Clicks: '99.8', Impressions: '1167' },
  { Date: '01.01.2019', Clicks: '99.8', Impressions: '1161' },
  { Date: '01.01.2019', Clicks: '99.9', Impressions: '1156.5' },
  { Date: '01.01.2019', Clicks: '99.9', Impressions: '1151.5' },
  { Date: '01.01.2019', Clicks: '99.9', Impressions: '1145.5' },
  { Date: '01.01.2019', Clicks: '99.9', Impressions: '1140.5' },
  { Date: '01.01.2019', Clicks: '99.9', Impressions: '1134.5' },
  { Date: '01.01.2019', Clicks: '99.9', Impressions: '1128.5' },
  { Date: '01.01.2019', Clicks: '99.9', Impressions: '1123.5' },
  { Date: '01.01.2019', Clicks: '99.9', Impressions: '1117.5' },
  { Date: '01.01.2019', Clicks: '99.9', Impressions: '1112.5' },
  { Date: '01.01.2019', Clicks: '99.9', Impressions: '1106.5' },
  { Date: '01.01.2019', Clicks: '99.9', Impressions: '1100.5' },
  { Date: '01.01.2019', Clicks: '99.9', Impressions: '1095.5' },
  { Date: '01.01.2019', Clicks: '100', Impressions: '1091' },
  { Date: '01.01.2019', Clicks: '100', Impressions: '1086' },
  { Date: '01.01.2019', Clicks: '100', Impressions: '1080' },
  { Date: '01.01.2019', Clicks: '100', Impressions: '1074' },
  { Date: '01.01.2019', Clicks: '100', Impressions: '1069' },
  { Date: '01.01.2019', Clicks: '100', Impressions: '1063' },
  { Date: '01.01.2019', Clicks: '100', Impressions: '1058' },
  { Date: '01.01.2019', Clicks: '100', Impressions: '1052' },
  { Date: '01.01.2019', Clicks: '100', Impressions: '1046' },
  { Date: '01.01.2019', Clicks: '100', Impressions: '1041' },
  { Date: '01.01.2019', Clicks: '100', Impressions: '1035' },
  { Date: '01.01.2019', Clicks: '100', Impressions: '1030' },
  { Date: '01.01.2019', Clicks: '100', Impressions: '1024' },
  { Date: '01.01.2019', Clicks: '100', Impressions: '1018' },
  { Date: '01.01.2019', Clicks: '100', Impressions: '1013' },
  { Date: '01.01.2019', Clicks: '100', Impressions: '1007' },
  { Date: '01.01.2019', Clicks: '100', Impressions: '1002' },
  { Date: '01.01.2019', Clicks: '100', Impressions: '996' },
  { Date: '01.01.2019', Clicks: '100', Impressions: '990' },
  { Date: '01.01.2019', Clicks: '100', Impressions: '985' },
  { Date: '01.01.2019', Clicks: '100', Impressions: '979' },
  { Date: '01.01.2019', Clicks: '100', Impressions: '974' },
  { Date: '01.01.2019', Clicks: '100', Impressions: '968' },
  { Date: '01.01.2019', Clicks: '100', Impressions: '962' },
  { Date: '01.01.2019', Clicks: '100', Impressions: '957' },
  { Date: '01.01.2019', Clicks: '100', Impressions: '951' },
  { Date: '01.01.2019', Clicks: '100', Impressions: '946' },
  { Date: '01.01.2019', Clicks: '100', Impressions: '940' },
];
