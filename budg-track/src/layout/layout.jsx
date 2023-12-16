import Stats from "../components/stats/stats";
import Header from "./header/header";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <main className="@container">
        <Header />
        <Stats />
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
