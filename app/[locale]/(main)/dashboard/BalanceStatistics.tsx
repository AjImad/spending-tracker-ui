import ReactApexChart from "react-apexcharts";
import { useMediaQuery } from "@uidotdev/usehooks";

const BalanceStatistics = () => {
  const isMobile = useMediaQuery("only screen and (max-width : 923px)");
  const options = {
    chart: {
      type: "bar",
      height: 350,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 4,
        borderRadiusApplication: "end",
        borderRadiusWhenStacked: "last",
        columnWidth: `${isMobile ? "50%" : "32%"}`,
        endingShape: "rounded",
      },
    },
    legend: {
      position: "top",
      markers: {
        width: 12,
        height: 12,
        strokeWidth: 0,
        strokeColor: "#fff",
        fillColors: undefined,
        radius: 12,
        customHTML: undefined,
        onClick: undefined,
        offsetX: 0,
        offsetY: 0,
      },
    },
    // colors: ["#FF9800", "#FF4560"],
    colors: ["#4CAF50", "#FF9800"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 3,
      colors: ["transparent"],
    },
    xaxis: {
      categories: [
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
      ],
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val: any) {
          return "$ " + val + " thousands";
        },
      },
    },
  };

  const series = [
    { name: "Income", data: [44, 55, 57, 56, 61, 58, 63, 60, 66] },
    {
      name: "Expense",
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
    },
  ];

  return (
    <div className="relative w-full inline-block bg-white rounded-xl shadow-md p-4">
      <div className="text-md font-bold text-slate-800 leading-normal">
        Balance statistics
      </div>
      <ReactApexChart
        options={options as ApexCharts.ApexOptions}
        series={series}
        type="bar"
        height={350}
      />
    </div>
  );
};

export default BalanceStatistics;
