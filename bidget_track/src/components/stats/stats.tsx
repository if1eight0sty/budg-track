import { IUserData } from "../../pages/budget/interface";
import StatCard from "./components/stat-cards";

const Stats = () => {
  // fetch user data
  const userData: IUserData | null = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user") as string)
    : null;
  return (
    <>
      <div className="px-2 @[30em]:px-6 @[50em]:px-10 @[1300px]:px-16 pt-5">
        <p className="capitalize text-xl font-semibold text-[#3e3e3e] mb-3">
          Hello {userData?.name}🖤
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-8">
          <StatCard value={10000} title="Total Income" />
          <StatCard value={5890} title="Total Expense" />
          <StatCard value={4009} title="Balance" />
        </div>
      </div>
    </>
  );
};

export default Stats;
