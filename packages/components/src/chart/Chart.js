import React, { memo } from 'react';
import PropTypes from 'prop-types';
import useD3 from './UseD3';
import { buildGraph } from './helpers';

const Chart = ({ data }) => {
  const ref = useD3(
    svg => {
      buildGraph(data, svg);
    },
    [data]
  );

  return (
    <svg ref={ref}>
      <g className="container">
        <path className="valueLine-1" />
        <path className="valueLine-2" />
        <g className="x-axis" />
        <g className="y-left-axis" />
        <g className="y-right-axis" />
        <g className="maximum-line-path" />
      </g>
    </svg>
  );
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
