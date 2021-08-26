import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const LineChart = ({ chartOptions }) => {
  return (
    <div style={{ maxWidth: 600 }}>
      {chartOptions && (
        <HighchartsReact highcharts={Highcharts} options={chartOptions} />
      )}
    </div>
  );
};

export default LineChart;
