import ReactECharts from "echarts-for-react";
import { Typography } from "@mui/material";
import { chartOptions } from "../../utils/chartUtils";

// eslint-disable-next-line react/prop-types
const PieChartComponent = ({ title, xLabels, values, colors }) => {
  const option = {
    ...chartOptions,
    series: [
      {
        data: values, 
        type: 'pie',
        radius: ['30%', '50%'],
        avoidLabelOverlap: false,
        emphasis: {
          itemStyle: {
            borderRadius: 4,
            borderWidth: 5
          },
        },
        itemStyle: {
          color: (params) => colors[params.dataIndex] || 'lightblue', 
          borderRadius: 4,
          borderWidth: 5,
          borderColor: '#fff',
        },
      },
    ],
  };

  return (
    <>
      <Typography variant="h4" mb={2}>{title}</Typography>
      <ReactECharts option={option} style={{ height: "400px", width: "100%" }} />
    </>
  );
};

export default PieChartComponent;