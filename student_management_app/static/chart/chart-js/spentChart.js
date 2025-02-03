document.addEventListener("DOMContentLoaded", function () {
  const chartDom = document.getElementById("chart");
  // Set a reduced height for the chart container
  chartDom.style.height = "300px";
  const myChart = echarts.init(chartDom);

  const data = {
    line1: [30, 50, 80, 60, 100, 120],
    line2: [20, 40, 60, 80, 90, 110],
  };

  const option = {
    grid: {
      top: 40,
      bottom: 40,
      left: 20,
      right: 20,
      height: "80%",
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "none",
      },
      backgroundColor: "#1E3A8A",
      padding: [10, 18, 10, 18],
      borderRadius: 10,
      textStyle: {
        color: "#DBEAFE",
      },
      extraCssText: "border: none; box-shadow: none",
      confine: true,
    },
    xAxis: {
      type: "category",
      data: ["SEP", "OCT", "NOV", "DEC", "JAN", "FEB"],
      axisTick: { show: false },
      axisLine: { show: false },
      axisLabel: {
        margin: 10,
        color: "#6B7280",
        fontSize: 12,
        fontWeight: 500,
      },
    },
    yAxis: {
      type: "value",
      min: 1,
      minInterval: 10,
      splitLine: { show: false },
      axisLabel: { show: false },
    },
    series: [
      {
        name: "Line 1",
        data: data.line1,
        type: "line",
        smooth: true,
        showSymbol: false,
        itemStyle: { color: "#2563EB" },
        lineStyle: {
          width: 4,
          type: "solid",
          cap: "round",
          color: "#2563EB",
        },
        emphasis: {
          focus: "series",
          itemStyle: { borderWidth: 3, borderColor: "#2563EB" },
          lineStyle: {
            width: 4,
            shadowBlur: 25,
            shadowColor: "#2563EB",
            shadowOffsetY: 20,
          },
        },
      },
      {
        name: "Line 2",
        data: data.line2,
        type: "line",
        smooth: true,
        showSymbol: false,
        itemStyle: { color: "#19D5FF" },
        lineStyle: {
          width: 4,
          type: "solid",
          cap: "round",
          color: "#19D5FF",
        },
        emphasis: {
          focus: "series",
          itemStyle: { borderWidth: 3, borderColor: "#19D5FF" },
          lineStyle: {
            width: 4,
            shadowBlur: 25,
            shadowColor: "#e8f9ff",
            shadowOffsetY: 20,
          },
        },
      },
    ],
  };

  myChart.setOption(option);
});
