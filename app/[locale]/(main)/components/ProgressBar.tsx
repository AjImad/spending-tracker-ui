import { useState } from "react";
import { format } from "date-fns";
import { arMA, enUS, fr } from "date-fns/locale";
import { useTranslation } from "react-i18next";

interface ProgressBarProps {
  startDate: Date;
  endDate: Date;
  barColor?: string;
}

const ProgressBar = ({
  startDate,
  endDate,
  barColor = "bg-[#ff3030]",
}: ProgressBarProps) => {
  // Calculate progress
  const today = new Date();
  const totalDays = Math.ceil(
    (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)
  );
  const elapsedDays = Math.ceil(
    (today.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)
  );
  const { i18n } = useTranslation();
  const progressPercent = (elapsedDays / totalDays) * 100;

  // Calculate position of current date indicator
  const indicatorPosition =
    ((today.getTime() - startDate.getTime()) /
      (endDate.getTime() - startDate.getTime())) *
    100;

  // State to control tooltip visibility
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="relative w-full">
      {/* Date indicator */}
      {showTooltip && (
        <span
          className="absolute bottom-0 mb-7 -translate-x-1/2 w-10 h-6 bg-[#f5f7f9] text-muted-foreground shadow-md rounded-md px-2 py-1 text-gray-800 text-xs font-medium flex justify-center items-center after:absolute after:bg-[#f5f7f9] after:flex after:bottom-[-5px] after:left-1/2 after:-z-10 after:h-3 after:w-3 after:-translate-x-1/2 after:rotate-45"
          style={{ left: `${indicatorPosition}%` }}
          title="Today"
        >
          Today
        </span>
      )}
      <div className="flex justify-between text-xs md:text-sm text-muted-foreground">
        <p>
          {format(startDate, "PP", {
            locale:
              i18n.language === "en"
                ? enUS
                : i18n.language === "fr"
                ? fr
                : arMA,
          })}
        </p>
        <p>27%</p>
        <p>
          {format(endDate, "PP", {
            locale:
              i18n.language === "en"
                ? enUS
                : i18n.language === "fr"
                ? fr
                : arMA,
          })}
        </p>
      </div>
      {/* Progress bar */}
      <div
        className={`relative flex w-full h-1 my-1 overflow-hidden rounded-3xl ${barColor}/30`}
      >
        {/* White vertical bar */}
        <div
          className="absolute top-0 bottom-0 left-0 bg-white w-0.5"
          style={{ left: `${indicatorPosition}%` }}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        ></div>

        {/* Progress indicator */}
        <div
          // style={{ width: `${progressPercent}%` }}
          style={{ width: `70%` }}
          className={`flex h-full items-center justify-center ${barColor} text-white rounded-3xl`}
        ></div>
      </div>
      <div className="flex justify-between text-xs text-muted-foreground">
        <p>$0.00</p>
        <p>$8.00</p>
        <p>$30.00</p>
      </div>
    </div>
  );
};

export default ProgressBar;
