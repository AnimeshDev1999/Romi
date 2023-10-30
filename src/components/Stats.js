import StatCard1 from "./StatCard1";
import StatCard2 from "./StatCard2";
import bludia from "../images/bludimon.svg";
import StatTable from "./StatTable";
import { statistics, statistics1, statistics2 } from "./DummyData";

const Stats = () => {
  return (
    <div className="px-6 md:px-12 lg:max-w-[1300px] lg:mx-auto pt-16 pb-8">
      <div className="mb-4 flex items-center gap-3">
        <h1 className="text-4xl leading-tight">Stats</h1>
        <img src={bludia} alt="" className="h-6" />
      </div>
      <p className="text-[#b9b9b9] mb-6">
        Ethereum Total Stats start from 06 Jan 2022. For detailed stats:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {statistics.map((item) => (
          <StatCard1 key={item.tittle} data={item}></StatCard1>
        ))}
      </div>
      <div className="mb-4 flex items-center gap-3">
        <h1 className="text-4xl leading-tight">Tokens</h1>
        <img src={bludia} alt="" className="h-6" />
      </div>
      <p className="text-[#b9b9b9] mb-6">Platform and $ZLP index tokens.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {statistics1.map((item) => (
          <StatCard2 key={item.tittle} data={item}></StatCard2>
        ))}
        {statistics2.map((item) => (
          <StatCard1 key={item.tittle} data={item}></StatCard1>
        ))}
        <StatTable data={statistics2}></StatTable>
      </div>
    </div>
  );
};

export default Stats;
