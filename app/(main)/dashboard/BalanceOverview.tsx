import ReactApexChart from "react-apexcharts";

const BalanceOverview = () => {
  var options = {
    chart: {
      type: "area",
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
    },
    responsive: [
      {
        breakpoint: 1000,
        options: {
          chart: {
            height: 350,
            width: "100%",
          },
        },
      },
      {
        breakpoint: 800,
        options: {
          chart: {
            height: 280,
            width: "100%",
          },
        },
      },
    ],
  };

  var series = [
    {
      name: "series1",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
  ];
  return (
    <div className="w-full inline-block bg-white rounded-xl shadow-md p-4">
      <div className="text-md font-bold text-slate-800 leading-normal">
        Balance overview
      </div>
      <ReactApexChart
        options={options as ApexCharts.ApexOptions}
        series={series}
        type="area"
        width="100%"
        height={300}
      />
    </div>
  );
};

export default BalanceOverview;
