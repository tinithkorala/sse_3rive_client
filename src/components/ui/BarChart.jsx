import React from "react";
import ReactECharts from "echarts-for-react";
import { Typography } from "@mui/material";
import { chartOptions } from "../../utils/chartUtils";

// eslint-disable-next-line react/prop-types
const BarChartComponent = ({ title, xLabels, values, colors }) => {
  const option = {
    ...chartOptions,
    xAxis: {
      type: "category",
      data: xLabels,
    },
    yAxis: {
      type: "value", 
    },
    series: [
      {
        data: values, 
        type: "bar", 
        itemStyle: {
          color: (params) => colors[params.dataIndex], 
        },
      },
    ],
  };

  return (
    <>
      <Typography variant="h4">{title}</Typography>
      <ReactECharts option={option} style={{ height: "400px", width: "100%" }} />
    </>
  );
};

export default BarChartComponent;