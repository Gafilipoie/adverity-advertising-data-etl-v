import * as R from 'ramda';
import * as d3 from 'd3';

export const trasnformData = data => {
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

export const getConfig = data => {
  const margin = { top: 20, right: 70, bottom: 50, left: 70 };
  const width = 960 - margin.left - margin.right;
  const height = 500 - margin.top - margin.bottom;

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

  svg
    .select('.x-axis-label')
    .attr('transform', 'translate(' + width / 2 + ' ,' + (height + margin.top - 4) + ')');

  svg
    .select('.x-axis-label-clicks-line')
    .attr('x1', '-65')
    .attr('y1', '-5')
    .attr('x2', '-45')
    .attr('y2', '-5')
    .style('stroke', 'red')
    .style('stroke-width', 2);

  svg
    .select('.x-axis-label-clicks')
    .style('text-anchor', 'end')
    .text('Clicks');

  svg
    .select('.x-axis-label-impressions-line')
    .attr('x1', '15')
    .attr('y1', '-5')
    .attr('x2', '35')
    .attr('y2', '-5')
    .style('stroke', 'steelblue')
    .style('stroke-width', 2);

  svg
    .select('.x-axis-label-impressions')
    .attr('x', 40)
    .style('text-anchor', 'start')
    .text('Impressions');

  svg
    .select('.y-left-axis-label')
    .attr('transform', 'rotate(-90)')
    .attr('y', -50)
    .attr('x', 0 - height / 2)
    .style('text-anchor', 'middle')
    .text('Clicks');

  svg.select('.y-left-axis').call(yAxisLeft);

  svg
    .select('.y-right-axis-label')
    .attr('transform', 'translate(' + width + ' ,0), rotate(90)')
    .attr('y', -50)
    .attr('x', height / 2)
    .style('text-anchor', 'middle')
    .text('Impressions');

  svg
    .select('.y-right-axis')
    .attr('transform', 'translate(' + width + ' ,0)')
    .call(yAxisRight);
};
