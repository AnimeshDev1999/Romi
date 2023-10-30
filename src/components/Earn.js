import EarnCard from "./EarnCard";
import { statistics, statistics2 } from "./DummyData2";

const Earn = () => {
  return (
    <div className="px-6 md:px-12 lg:max-w-[1300px] lg:mx-auto pt-16 pb-8">
      <div className="mb-4 flex items-center gap-3">
        <h1 className="text-4xl leading-tight">Earn</h1>
      </div>
      <p className="text-[#b9b9b9] mb-6">
        Stake $ROMI and $ZLP to earn rewards.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {statistics.map((item) => (
          <EarnCard key={item.tittle} data={item}></EarnCard>
        ))}
      </div>
      <div className="mb-4 flex items-center gap-3">
        <h1 className="text-4xl leading-tight">Vest</h1>
      </div>
      <p className="text-[#b9b9b9] mb-6">
        Convert esROMI tokens to $ROMI tokens. Please read the vesting details
        before using the vaults.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {statistics2.map((item) => (
          <EarnCard key={item.tittle} data={item}></EarnCard>
        ))}
      </div>
    </div>
  );
};

export default Earn;
