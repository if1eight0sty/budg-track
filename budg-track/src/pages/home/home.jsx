import Search from "./components/search/search";
import Table from "./components/table/table";

const Home = () => {
  return (
    <>
      <div className="px-2 @[30em]:px-6 @[50em]:px-10 @[1300px]:px-16 pt-10">
        <Search />
        <Table />
      </div>
    </>
  );
};

export default Home;
