import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <header className="py-2 px-2 text-[#2e2e2e]/80 @[30em]:px-6 @[50em]:px-10 @[1300px]:px-16 @[1300px]:py-3 border-b sticky top-0 z-10 bg-white">
        <nav className="flex justify-between items-center">
          <span className="cursor-pointer select-none" title="BudgTrack">
            <Icon icon="mingcute:pig-money-fill" width={35} />
          </span>
          <ul className="flex gap-x-3 font-semibold uppercase text-[.95rem]">
            <li>
              <Link to="/">Dashboard</Link>
            </li>
            <li>Budget</li>
          </ul>
          <span
            className="border rounded-full cursor-pointer select-none border-[#2e2e2e] p-[3px]"
            title="View profile"
          >
            <Icon icon="memory:user" width={20} />
          </span>
        </nav>
      </header>
    </>
  );
};

export default Header;
