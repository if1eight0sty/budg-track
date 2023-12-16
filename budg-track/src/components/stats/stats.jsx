import StatCard from "./components/stat-cards";

const Stats = () => {
  return (
    <>
      <div className="px-2 @[30em]:px-6 @[50em]:px-10 @[1300px]:px-16 bg-slate-100 pt-3">
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
