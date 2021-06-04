import React, { useEffect, memo } from 'react';
import * as R from 'ramda';
import * as d3 from 'd3';
import PropTypes from 'prop-types';
import { isBlank } from '@adverity/utils';

const margin = { top: 30, right: 40, bottom: 30, left: 50 };
const width = 800 - margin.left - margin.right;
const height = 470 - margin.top - margin.bottom;

const x = d3.scaleTime().range([0, width]);
const y0 = d3.scaleLinear().range([height, 0]);
const y1 = d3.scaleLinear().range([height, 0]);

const xAxis = d3.axisBottom(x).ticks(5);
const yAxisLeft = d3.axisLeft(y0).ticks(5);
const yAxisRight = d3.axisRight(y1).ticks(5);

const valueline = d3
  .line()
  .x(function (d) {
    return x(d.Date);
  })
  .y(function (d) {
    return y0(d.Clicks);
  });

const valueline2 = d3
  .line()
  .x(function (d) {
    return x(d.Date);
  })
  .y(function (d) {
    return y1(d.Impressions);
  });

const formatDate = (date) => {
  const result = R.reverse(R.split('.', date));
  return new Date(result[0], result[1], result[2]);
};

const Chart = ({ data }) => {
  useEffect(() => {
    if (isBlank(data)) return;

    const svg = d3
      .select('#chart')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

    const chartData = R.map(
      (d) => ({
        ...d,
        Date: d.Date.length ? formatDate(d.Date) : d.Date,
        Clicks: +d.Clicks,
        Impressions: +d.Impressions,
      }),
      data
    );

    // Scale the range of the data
    x.domain(
      d3.extent(chartData, function (d) {
        return d.Date;
      })
    );
    y0.domain([
      0,
      d3.max(chartData, function (d) {
        return Math.max(d.Clicks);
      }),
    ]);
    y1.domain([
      0,
      d3.max(chartData, function (d) {
        return Math.max(d.Impressions);
      }),
    ]);

    svg
      .append('path') // Add the valueline path.
      .style('stroke', 'blue')
      .attr('d', valueline(chartData));

    svg
      .append('path') // Add the valueline2 path.
      .style('stroke', 'red')
      .attr('d', valueline2(chartData));

    svg
      .append('g') // Add the X Axis
      .attr('class', 'x axis')
      .attr('transform', 'translate(0,' + height + ')')
      .call(xAxis);

    svg.append('g').attr('class', 'y axis').style('fill', 'steelblue').call(yAxisLeft);

    svg
      .append('g')
      .attr('class', 'y axis')
      .attr('transform', 'translate(' + width + ' ,0)')
      .style('fill', 'red')
      .call(yAxisRight);
  }, [data]);

  return <svg id="chart" />;
};

Chart.defaultProps = {
  data: [],
};

Chart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      Date: PropTypes.string,
      Clicks: PropTypes.string,
      Impressions: PropTypes.string,
    })
  ),
};

export default memo(Chart);
