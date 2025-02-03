document.addEventListener("DOMContentLoaded", function () {
  var chartDom = document.getElementById("dailyTrafficChart");
  var myChart = echarts.init(chartDom);
  chartDom.style.height = "200px";

  var data = [120, 200, 150, 80, 70, 110, 130];

  var option = {
    tooltip: {
      formatter: "Traffic: {c}",
    },
    grid: {
      top: "10%",
      left: "5%",
      right: "5%",
      bottom: "10%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        data: ["00", "04", "08", "12", "14", "16", "18"],
        boundaryGap: false,
        axisTick: { show: false },
        axisLine: { show: false },
        axisLabel: {
          margin: 20,
          fontWeight: 500,
          color: "#A0AEC0",
          fontSize: 12,
          fontFamily: "Arial, sans-serif",
        },
      },
    ],
    yAxis: [
      {
        type: "value",
        min: 10,
        minInterval: 1,
        axisLabel: { show: false },
        splitLine: { show: false },
      },
    ],
    series: [
      {
        name: "Traffic",
        type: "bar",
        barWidth: "28%",
        showBackground: false,
        data: data,
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: "#6366F1" },
            { offset: 1, color: "rgba(67, 24, 255, 0.2)" },
          ]),
          borderRadius: [10, 10, 0, 0],
        },
      },
    ],
  };

  myChart.setOption(option);

  window.addEventListener("resize", () => {
    myChart.resize();
  });
});
