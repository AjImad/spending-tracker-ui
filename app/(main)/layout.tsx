import Header from "./components/Header";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <div >
        <main>{children}</main>
      </div>
    </>
  );
};

export default MainLayout;
