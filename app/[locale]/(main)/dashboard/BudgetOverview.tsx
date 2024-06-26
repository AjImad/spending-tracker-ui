import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import ProgressBar from "../components/progressbar/ProgressBar";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

const BudgetOverview = () => {
  const startDate: Date = new Date("2024-04-01");
  const endDate: Date = new Date("2024-04-30");
  const { t, i18n } = useTranslation("dashboard");

  return (
    <div className="w-full inline-block bg-white rounded-xl shadow-md ">
      <div className="p-4">
        <div className="text-md font-bold text-slate-800 leading-normal mb-5">
          {t("budget_overview")}
        </div>
        <div className="space-y-[.5] hover:bg-neutral-100/95 p-2 rounded-lg cursor-pointer">
          <p>Entertaiment</p>
          <div
            className={cn(
              "flex justify-center items-center space-x-2",
              i18n.language === "ar" && "space-x-reverse"
            )}
          >
            <Image
              src="/entertaiment.svg"
              alt="Entertaiment"
              width={40}
              height={40}
              sizes="100vw"
            />
            <ProgressBar
              startDate={startDate}
              endDate={endDate}
              barColor="bg-[#00b8d9]"
            />
          </div>
        </div>
        <div className="space-y-[.5] hover:bg-neutral-100/95 p-2 rounded-lg cursor-pointer">
          <p>Eating out</p>
          <div
            className={cn(
              "flex justify-center items-center space-x-2",
              i18n.language === "ar" && "space-x-reverse"
            )}
          >
            <Image
              src="/eatout.svg"
              alt="Eating out"
              width={40}
              height={40}
              sizes="100vw"
            />
            <ProgressBar
              startDate={startDate}
              endDate={endDate}
              barColor="bg-[#ff3030]"
            />
          </div>
        </div>

        <div className="space-y-[.5] hover:bg-neutral-100/95 p-2 rounded-lg cursor-pointer">
          <p>Fuel</p>
          <div
            className={cn(
              "flex justify-center items-center space-x-2",
              i18n.language === "ar" && "space-x-reverse"
            )}
          >
            <Image
              src="/fuel.svg"
              alt="Fuel"
              width={40}
              height={40}
              sizes="100vw"
            />
            <ProgressBar
              startDate={startDate}
              endDate={endDate}
              barColor="bg-[#ffab00]"
            />
          </div>
        </div>
      </div>
      <div className="border-t border-dashed p-2 flex justify-end">
        <Button
          variant="outline"
          className="text-neutral-600 text-sm"
          size="sm"
        >
          {t("view_all")}
          {i18n.language === "ar" ? (
            <ChevronLeft className="w-4 h-4 mr-1" />
          ) : (
            <ChevronRight className="w-4 h-4 ml-1" />
          )}
        </Button>
      </div>
    </div>
  );
};

export default BudgetOverview;
