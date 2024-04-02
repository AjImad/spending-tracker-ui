"use client";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { useMediaQuery } from "@uidotdev/usehooks";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const isMobile = useMediaQuery("only screen and (max-width : 923px)");
  return (
    <div className="flex h-screen border-collapse overflow-hidden">
      {!isMobile && <Sidebar />}
      <div className="flex flex-col flex-1 bg-[#f5f7f9] overflow-y-auto overflow-x-hidden relative">
        <Header />
        <main className="felx-1 h-screen pt-6 p-4 md:p-8 pb-1">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
