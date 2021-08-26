import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const PieChart = ({ pieChartOptions }) => {
  return (
    <div style={{ maxWidth: 600 }}>
      {pieChartOptions && (
        <HighchartsReact highcharts={Highcharts} options={pieChartOptions} />
      )}
    </div>
  );
};

export default PieChart;
