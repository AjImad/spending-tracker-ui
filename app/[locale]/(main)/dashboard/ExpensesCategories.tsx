import ReactApexChart from "react-apexcharts";
import { useTranslation } from "react-i18next";

const ExpensesCategories = () => {
  const { t } = useTranslation("dashboard");
  const options = {
    chart: {
      type: "polarArea",
      width: 380,
      height: 380,
    },
    labels: [
      "Entertainment",
      "Eating out",
      "Fuel",
      "Groceries",
      "Shopping",
      "Travel",
      "Health",
      "Education",
      "Others",
    ],
    stroke: {
      colors: ["#fff"],
    },
    fill: {
      opacity: 0.8,
    },
    legend: {
      show: true,
      //   showForSingleSeries: true,
      //   showForNullSeries: true,
      //   showForZeroSeries: true,
      position: "right",
      //   horizontalAlign: "center",
      floating: false,
      fontSize: "14px",
      fontFamily: "Helvetica, Arial",
      //   fontWeight: 400,
      //   formatter: undefined,
      inverseOrder: false,
      width: undefined,
      height: undefined,

      //   offsetX: 0,
      //   offsetY: 0,
      //   labels: {
      //     colors: undefined,
      //     useSeriesColors: false,
      //   },

      itemMargin: {
        horizontal: 1,
        vertical: 1,
      },
    },
    tooltip: {
      fillSeriesColor: false,
      theme: "light",
    },
    responsive: [
      {
        breakpoint: 1200,
        options: {
          chart: {
            width: 350,
          },
          legend: {
            // show: false,
            position: "bottom",
          },
        },
      },
    ],
  };

  const series = [14, 23, 21, 17, 15, 10, 12, 17, 21];

  return (
    <div className="w-full relative inline-block shadow-md bg-white rounded-xl">
      <div className="p-4">
        <h4 className="text-md font-bold text-slate-800 leading-normal mb-5">
          {t("expenses_categories")}
        </h4>
        <div className="flex justify-center items-center">
          <ReactApexChart
            options={options as ApexCharts.ApexOptions}
            series={series}
            type="polarArea"
            width={450}
          />
        </div>
      </div>
      <div className="grid grid-cols-2 border-t border-dashed p-4">
        <div className="text-center space-y-2 border-r border-dashed">
          <p className="text-sm md:text-lg text-neutral-500">
            {t("categories")}
          </p>
          <p className="text-xl font-bold">9</p>
        </div>
        <div className="text-center space-y-2">
          <p className="text-sm md:text-lg text-neutral-500">
            {t("categories")}
          </p>
          <p className="text-xl font-bold">MAD 1,500</p>
        </div>
      </div>
    </div>
  );
};

export default ExpensesCategories;
