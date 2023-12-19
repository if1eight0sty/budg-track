import { Icon } from "@iconify/react";
import { useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GlobalHelper } from "../../../global/helper";
import { useQuery } from "@tanstack/react-query";
const Header = () => {
  const navigate = useNavigate();
  const globalClass = useMemo(() => new GlobalHelper(), []);
  const { data: user } = useQuery({
    queryKey: ["get", "user"],
    queryFn: globalClass.getUser,
  });
  const handleLogoutClick = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };
  return (
    <>
      <header className="py-2 px-2 text-[#2e2e2e]/80 @[30em]:px-6 @[50em]:px-10 @[1300px]:px-16 @[1300px]:py-3 border-b sticky top-0 z-10 bg-white">
        <nav className="flex items-center justify-between">
          <span className="cursor-pointer select-none" title="BudgTrack">
            <Icon icon="mingcute:pig-money-fill" width={35} />
          </span>
          <ul className="flex gap-x-3 font-semibold uppercase text-[.95rem]">
            <li>
              <Link to="/" className="outline-none">
                Dashboard
              </Link>
            </li>
            <li>Budget</li>
          </ul>
          <div className="border rounded-full border-[#2e2e2e] p-[3px] group relative">
            <span title="Account" className="cursor-pointer select-none">
              <Icon icon="memory:user" width={20} />
            </span>
            <div className="absolute top-5 right-0 group-hover:block hover:block w-[7em] border-r border-l border-b rounded-sm hidden">
              <ul className="grid gap-1 px-3 pb-3 mt-3 bg-white">
                <li>
                  <Link to="/">Profile</Link>
                </li>
                {user ? (
                  <li
                    className="cursor-pointer"
                    onClick={() => handleLogoutClick()}
                  >
                    Logout
                  </li>
                ) : (
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                )}

                <li>
                  <Link to="/register">Register</Link>
                </li>
                <li>
                  <p className="cursor-pointer">Settings</p>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
