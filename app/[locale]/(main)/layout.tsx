"use client";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import { useMediaQuery } from "@uidotdev/usehooks";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const isMobile = useMediaQuery("only screen and (max-width : 927px)");
  return (
    <div className="flex h-screen border-collapse overflow-hidden">
      {!isMobile && <Sidebar />}
      <div className="flex flex-col flex-1 bg-[#f5f7f9] overflow-y-auto overflow-x-hidden relative">
        <Header />
        <main className=" pt-6 p-4 md:p-8 pb-4">{children}</main>
        <footer className="bg-[#f5f7f9] p-4 ">
          <div className="text-center text-sm text-neutral-700">
            © {new Date().getFullYear()} All rights reserved.
          </div>
        </footer>
      </div>
    </div>
  );
};

export default MainLayout;
