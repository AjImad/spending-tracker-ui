"use client";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "@uidotdev/usehooks";
import Chart from "./Chart";
import "./chartStyle.css";

const DashboardPage = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div>
      {/* Report */}
      <div className={cn("w-full", isMobile && "grid place-items-center")}>
        <div className=" w-auto inline-block bg-white rounded-xl shadow-md p-2">
          <h1 className="text-slate-500">Dashboard Page</h1>
          <Chart />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
