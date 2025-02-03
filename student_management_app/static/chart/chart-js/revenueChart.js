document.addEventListener("DOMContentLoaded", function () {
  var chartDom = document.getElementById("revenueChart");
  var myChart = echarts.init(chartDom);

  var data = {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    series: [
      { name: "Product A", data: [50, 75, 100, 125, 150, 175] },
      { name: "Product B", data: [80, 95, 110, 130, 145, 165] },
      { name: "Product C", data: [90, 105, 120, 140, 155, 180] },
    ],
  };

  var option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    grid: {
      top: 20,
      bottom: 50,
      left: 20,
      right: 20,
    },
    xAxis: {
      type: "category",
      data: data.categories,
      axisTick: { show: false },
      axisLine: { show: false },
      axisLabel: {
        color: "#718096",
        fontSize: 12,
        margin: 20,
      },
      boundaryGap: true,
    },
    yAxis: {
      type: "value",
      min: 1,
      minInterval: 10,
      splitLine: { show: false },
      axisLabel: { show: false },
    },
    series: data.series.map((item, index) => ({
      name: item.name,
      type: "bar",
      stack: "total",
      barWidth: 14,
      label: { show: false },
      emphasis: { focus: "series" },
      itemStyle: {
        color: index === 0 ? " #6946FF" : index === 1 ? "#6AD2FF" : "#F5F7FB",
        borderRadius: index === 2 ? [10, 10, 0, 0] : [0, 0, 0, 0],
      },
      data: item.data,
    })),
  };

  myChart.setOption(option);

  window.addEventListener("resize", () => {
    myChart.resize();
  });
});
