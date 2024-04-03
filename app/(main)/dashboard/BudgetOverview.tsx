import { Progress } from "@/components/ui/progress";
import ProgressBar from "../components/ProgressBar";
import Image from "next/image";

const BudgetOverview = () => {
  const startDate: Date = new Date("2024-04-01");
  const endDate: Date = new Date("2024-04-30");

  return (
    <div className="w-full inline-block bg-white rounded-xl shadow-md space-y-6 p-4">
      <div className="text-md font-bold text-slate-800 leading-normal">
        Budget overview
      </div>
      <div className="space-y-1">
        <p>Entertaiment</p>
        <div className="flex justify-center items-center space-x-2">
          <Image
            src="/entertaiment.svg"
            alt="Entertaiment"
            width={40}
            height={40}
            sizes="100vw"
            // style={{ width: "100%", height: "auto" }}
          />
          <ProgressBar
            startDate={startDate}
            endDate={endDate}
            barColor="bg-[#00b8d9]"
          />
        </div>
      </div>
      <div className="space-y-1">
        <p>Eating out</p>
        <div className="flex justify-center items-center space-x-2">
          <Image
            src="/eatout.svg"
            alt="Eating out"
            width={40}
            height={40}
            sizes="100vw"
            // style={{ width: "100%", height: "auto" }}
          />
          <ProgressBar
            startDate={startDate}
            endDate={endDate}
            barColor="bg-[#ff3030]"
          />
        </div>
      </div>

      <div className="space-y-1">
        <p>Fuel</p>
        <div className="flex justify-center items-center space-x-2">
          <Image
            src="/fuel.svg"
            alt="Fuel"
            width={40}
            height={40}
            sizes="100vw"
            // style={{ width: "100%", height: "auto" }}
          />
          <ProgressBar
            startDate={startDate}
            endDate={endDate}
            barColor="bg-[#ffab00]"
          />
        </div>
      </div>
    </div>
  );
};

export default BudgetOverview;
