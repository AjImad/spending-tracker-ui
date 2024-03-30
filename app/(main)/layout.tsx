import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <div className="flex h-screen border-collapse overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-auto overflow-x-hidden pt-24 bg-secondary/10 p-8 pb-1">
          {children}
        </main>
      </div>
    </>
  );
};

export default MainLayout;
