import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen border-collapse overflow-hidden">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden relative">
        <Header />
        <main className="felx-1 h-full pt-18 bg-[#eff1f5] p-8 pb-1">
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
