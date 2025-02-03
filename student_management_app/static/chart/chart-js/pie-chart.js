document.addEventListener("DOMContentLoaded", function () {
  var chartDom = document.getElementById("pieChart");
  var myChart = echarts.init(chartDom);
  chartDom.style.height = "200px";
  chartDom.style.width = "200px";

  var pieChartData = [
    { value: 40, name: "Category A", id: 1 },
    { value: 30, name: "Category B", id: 2 },
  ];

  var option = {
    tooltip: {
      trigger: "item",
      formatter: "{b}: {d}%",
    },
    series: [
      {
        name: "Traffic",
        type: "pie",
        radius: "80%",
        data: pieChartData.map((item) => ({
          ...item,
          itemStyle: {
            color: item.id === 1 ? "#4318FF" : "#04BEFE",
          },
        })),
        emphasis: {
          label: { show: false },
          itemStyle: {
            shadowBlur: 5,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
        label: { show: false },
      },
    ],
  };

  myChart.setOption(option);

  window.addEventListener("resize", () => {
    myChart.resize();
  });
});
