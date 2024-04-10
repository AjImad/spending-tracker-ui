import { Button } from "@/components/ui/button";
import { useMediaQuery } from "@uidotdev/usehooks";
import { format } from "date-fns";
import { arMA, enUS, fr } from "date-fns/locale";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const TransactionsOverview = () => {
  const isMobile = useMediaQuery("(max-width: 927px)");
  const { t, i18n } = useTranslation("dashboard");

  return (
    <div className="w-full relative inline-block shadow-md bg-white rounded-xl">
      <div className="p-4">
        <h4 className="text-md font-bold text-slate-800 leading-normal mb-5">
          {t("transactions_overview")}
        </h4>
        {/* List transactions */}
        <div className="space-y-2">
          {/* Transaction 1 */}
          {isMobile ? (
            <div className="flex justify-between items-center hover:bg-neutral-100/95 p-2 rounded-lg cursor-pointer">
              <div className="flex space-x-2">
                <Image
                  src="/fuel.svg"
                  alt="Fuel"
                  width={40}
                  height={40}
                  sizes="100vw"
                />
                <div>
                  <p className="text-[#212b36]">Fuel</p>
                  <p className="text-sm text-neutral-600">Wallet</p>
                </div>
              </div>
              <div className="flex space-x-2 h-full">
                <div className="text-end text-sm">
                  <p className="text-[#212b36]">$29.9</p>
                  <p className="text-[#212b36]">
                    {format(new Date(), "PP", {
                      locale:
                        i18n.language === "en"
                          ? enUS
                          : i18n.language === "fr"
                          ? fr
                          : arMA,
                    })}
                  </p>
                </div>
                <div className=" bg-[#ff5630]/60 w-1 rounded-lg"></div>
              </div>
            </div>
          ) : (
            <div className="flex justify-between items-center hover:bg-neutral-100/95 p-2 rounded-lg cursor-pointer">
              <div
                className="flex space-x-2"
                style={{
                  flexShrink: 0,
                  width: "200px",
                }}
              >
                <Image
                  src="/fuel.svg"
                  alt="Fuel"
                  width={40}
                  height={40}
                  sizes="100vw"
                  // style={{ width: "100%", height: "auto" }}
                />
                <div>
                  <p className="text-[#212b36]">Fuel</p>
                  <p className="text-sm text-neutral-600">Wallet</p>
                </div>
              </div>
              <div>
                <p className="text-[#212b36]">$29.9</p>
              </div>
              <div>
                <p className="text-sm bg-[#ff5630]/[.16] text-[#b71d18] rounded-md p-1">
                  Expense
                </p>
              </div>
              <div>
                <p className="text-[#212b36]">
                  {format(new Date(), "PP", {
                    locale:
                      i18n.language === "en"
                        ? enUS
                        : i18n.language === "fr"
                        ? fr
                        : arMA,
                  })}
                </p>
              </div>
            </div>
          )}

          {/* Transaction 2 */}
          {isMobile ? (
            <div className="flex justify-between items-center hover:bg-neutral-100/95 p-2 rounded-lg cursor-pointer">
              <div className="flex space-x-2">
                <Image
                  src="/workbag.svg"
                  alt="Salary"
                  width={40}
                  height={40}
                  sizes="100vw"
                />
                <div>
                  <p className="text-[#212b36]">Salary</p>
                  <p className="text-sm text-neutral-600">Wallet</p>
                </div>
              </div>
              <div className="flex space-x-2 h-full">
                <div className="text-end text-sm">
                  <p className="text-[#212b36]">$29.9</p>
                  <p className="text-[#212b36]">
                    {format(new Date(), "PP", {
                      locale:
                        i18n.language === "en"
                          ? enUS
                          : i18n.language === "fr"
                          ? fr
                          : arMA,
                    })}
                  </p>
                </div>
                <div className=" bg-[#118d57]/60 w-1 rounded-lg"></div>
              </div>
            </div>
          ) : (
            <div className="flex justify-between items-center hover:bg-neutral-100/95 p-2 rounded-lg cursor-pointer">
              <div
                className="flex space-x-2"
                style={{
                  flexShrink: 0,
                  width: "200px",
                }}
              >
                <Image
                  src="/workbag.svg"
                  alt="Salary"
                  width={40}
                  height={40}
                  sizes="100vw"
                  // style={{ width: "100%", height: "auto" }}
                />
                <div>
                  <p className="text-[#212b36]">Salary</p>
                  <p className="text-sm text-neutral-600">Wallet</p>
                </div>
              </div>
              <div>
                <p className="text-[#212b36]">$29.9</p>
              </div>
              <div>
                <p className="text-sm bg-[#22c55e]/[.16] text-[#118d57] rounded-md p-1">
                  Income
                </p>
              </div>
              <div>
                <p className="text-[#212b36]">
                  {format(new Date(), "PP", {
                    locale:
                      i18n.language === "en"
                        ? enUS
                        : i18n.language === "fr"
                        ? fr
                        : arMA,
                  })}
                </p>
              </div>
            </div>
          )}

          {/* Transaction 3 */}
          {isMobile ? (
            <div className="flex justify-between items-center hover:bg-neutral-100/95 p-2 rounded-lg cursor-pointer">
              <div className="flex space-x-2">
                <Image
                  src="/entertaiment.svg"
                  alt="Entertaiment"
                  width={40}
                  height={40}
                  sizes="100vw"
                />
                <div>
                  <p className="text-[#212b36]">Entertaiment</p>
                  <p className="text-sm text-neutral-600">Wallet</p>
                </div>
              </div>
              <div className="flex space-x-2 h-full">
                <div className="text-end text-sm">
                  <p className="text-[#212b36]">$29.9</p>
                  <p className="text-[#212b36]">
                    {format(new Date(), "PP", {
                      locale:
                        i18n.language === "en"
                          ? enUS
                          : i18n.language === "fr"
                          ? fr
                          : arMA,
                    })}
                  </p>
                </div>
                <div className=" bg-[#ff5630]/60 w-1 rounded-lg"></div>
              </div>
            </div>
          ) : (
            <div className="flex justify-between items-center hover:bg-neutral-100/95 p-2 rounded-lg cursor-pointer">
              <div
                className="flex space-x-2"
                style={{
                  flexShrink: 0,
                  width: "200px",
                }}
              >
                <Image
                  src="/entertaiment.svg"
                  alt="Entertaiment"
                  width={40}
                  height={40}
                  sizes="100vw"
                  // style={{ width: "100%", height: "auto" }}
                />
                <div>
                  <p className="text-[#212b36]">Entertaiment</p>
                  <p className="text-sm text-neutral-600">Wallet</p>
                </div>
              </div>
              <div>
                <p className="text-[#212b36]">$29.9</p>
              </div>
              <div>
                <p className="text-sm bg-[#ff5630]/[.16] text-[#b71d18] rounded-md p-1">
                  Expense
                </p>
              </div>
              <div>
                <p className="text-[#212b36]">
                  {format(new Date(), "PP", {
                    locale:
                      i18n.language === "en"
                        ? enUS
                        : i18n.language === "fr"
                        ? fr
                        : arMA,
                  })}
                </p>
              </div>
            </div>
          )}
          {/* Transaction 4 */}
          {isMobile ? (
            <div className="flex justify-between items-center hover:bg-neutral-100/95 p-2 rounded-lg cursor-pointer">
              <div className="flex space-x-2">
                <Image
                  src="/eatout.svg"
                  alt="Eating out"
                  width={40}
                  height={40}
                  sizes="100vw"
                />
                <div>
                  <p className="text-[#212b36]">Eating out</p>
                  <p className="text-sm text-neutral-600">Wallet</p>
                </div>
              </div>
              <div className="flex space-x-2 h-full">
                <div className="text-end text-sm">
                  <p className="text-[#212b36]">$29.9</p>
                  <p className="text-[#212b36]">
                    {format(new Date(), "PP", {
                      locale:
                        i18n.language === "en"
                          ? enUS
                          : i18n.language === "fr"
                          ? fr
                          : arMA,
                    })}
                  </p>
                </div>
                <div className=" bg-[#ff5630]/60 w-1 rounded-lg"></div>
              </div>
            </div>
          ) : (
            <div className="flex justify-between items-center hover:bg-neutral-100/95 p-2 rounded-lg cursor-pointer">
              <div
                className="flex space-x-2"
                style={{
                  flexShrink: 0,
                  width: "200px",
                }}
              >
                <Image
                  src="/eatout.svg"
                  alt="Eating out"
                  width={40}
                  height={40}
                  sizes="100vw"
                  // style={{ width: "100%", height: "auto" }}
                />
                <div>
                  <p className="text-[#212b36]">Eating out</p>
                  <p className="text-sm text-neutral-600">Wallet</p>
                </div>
              </div>
              <div>
                <p className="text-[#212b36]">$29.9</p>
              </div>
              <div>
                <p className="text-sm bg-[#ff5630]/[.16] text-[#b71d18] rounded-md p-1">
                  Expense
                </p>
              </div>
              <div>
                <p className="text-[#212b36]">
                  {format(new Date(), "PP", {
                    locale:
                      i18n.language === "en"
                        ? enUS
                        : i18n.language === "fr"
                        ? fr
                        : arMA,
                  })}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="border-t border-dashed p-2 flex justify-end">
        <Button
          variant="outline"
          className="text-neutral-600 text-sm"
          size="sm"
        >
          {t("view_all")}
          <ChevronRight className="w-4 h-4 ml-1" />
        </Button>
      </div>
    </div>
  );
};

export default TransactionsOverview;
