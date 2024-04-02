import ReactApexChart from "react-apexcharts";
import { useMediaQuery } from "@uidotdev/usehooks";
import { cn } from "@/lib/utils";

const WalletOverview = () => {
  const isMobile = useMediaQuery("only screen and (max-width : 923px)");
  const options = {
    chart: {
      type: "donut",
      width: 10,
    },
    dataLabels: {
      enabled: false,
    },
    labels: ["Expense", "Income"],

    plotOptions: {
      pie: {
        size: 100,
        donut: {
          size: "90%",
          labels: {
            show: true,
            value: {
              show: true,
              fontSize: "24px",
              fontWeight: 600,
              color: "#637381",
              offsetY: 12,
              formatter: (val: any) => {
                return `$${val}`;
              },
            },
            total: {
              show: true,
              label: "Balance",
              formatter: (w: any) => {
                const total = w.globals.seriesTotals.reduce(
                  (a: any, b: any) => {
                    return a + b;
                  },
                  0
                );
                return `$${total}`;
              },
              fontSize: "14px",
              fontWeight: 500,
              color: "#637381",
            },
          },
        },
      },
    },
    colors: ["#EA3546", "#4CAF50"],
    legend: {
      position: "bottom",
    },
    tooltip: {
      fillSeriesColor: false,
      theme: "light",
    },
    // responsive: [
    //   {
    //     breakpoint: 1680,
    //     options: {
    //       chart: {
    //         width: 200,
    //       },
    //         plotOptions: {
    //           pie: {
    //             size: 50,
    //           },
    //         },
    //       legend: {
    //         position: "bottom",
    //       },
    //     },
    //   },
    // ],
  };
  const series = [2500, 10000];

  return (
    <div className="relative w-full inline-block bg-white rounded-xl shadow-md p-2">
      <div className={cn("relative flex", isMobile && "block space-y-4")}>
        <div
          className="relative bg-cover bg-no-repeat bg-center rounded-xl flex-1"
          style={{
            backgroundImage: "url(/overlay_2.jpg)",
            height: "211px",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-70 rounded-xl"></div>
          <div className="absolute inset-0 px-6 pt-6">
            <p className="text-neutral-400 text-xl">Current balance</p>
            <p className="text-white text-3xl font-bold my-4">MAD 7,500</p>
            <div className="flex space-x-6 text-white text-lg">
              <div className="flex flex-col space-y-2">
                <p className="text-md text-neutral-400">Income</p>
                <p className="font-bold text-2xl">MAD 10.000</p>
              </div>
              <div className="flex flex-col space-y-2">
                <p className="text-md text-neutral-400">Expense</p>
                <p className="font-bold text-2xl">MAD 2,500</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <ReactApexChart
            options={options as ApexCharts.ApexOptions}
            series={series}
            type="donut"
            height={230}
          />
        </div>
      </div>
    </div>
  );
};
export default WalletOverview;
