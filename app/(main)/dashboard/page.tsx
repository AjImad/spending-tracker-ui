"use client";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "@uidotdev/usehooks";
import BalanceOverview from "./BalanceOverview";
import WalletOverview from "./WalletOverview";
import "./chartStyle.css";
import BudgetOverview from "./BudgetOverview";
import BalanceStatistics from "./BalanceStatistics";
import ExpensesCategories from "./ExpensesCategories";
import TransactionsOverview from "./TransactionsOverview";

const DashboardPage = () => {
  const isMobile = useMediaQuery("only screen and (max-width : 927px)");

  return (
    <div>
      <div>
        <h1 className=" md:ml-0 text:lg md:text-xl font-bold text-slate-800 leading-normal mb-6">
          Hi, Welcome back 👋
        </h1>
        <div
          className={cn(
            "grid grid-cols-2 gap-[18px]",
            isMobile && "grid grid-cols-1 gap-6 place-items-center"
          )}
        >
          <div className="w-full flex flex-col space-y-6">
            <WalletOverview />
            <ExpensesCategories />
            <BudgetOverview />
          </div>
          <div className="w-full flex flex-col space-y-6">
            <BalanceOverview />
            <TransactionsOverview />
            <BalanceStatistics />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
