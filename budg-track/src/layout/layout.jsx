import Header from "./header/header";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <main className="@container">
        <Header />
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
