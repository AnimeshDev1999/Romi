import EarnCard from "./EarnCard";

const Earn = () => {
  const statistics = [
    {
      tittle: "$ROMI",
      list1: [
        ["Price", "$0.00"],
        ["Wallet", "... $ROMI ($...)"],
        ["Staked", "... $ROMI ($...)"],
      ],
      list2: [
        ["APR", "...%"],
        ["Rewards", "$..."],
        ["Multiplier Points APR", "100.00%"],
        ["Boost Percentage", "...%"],
      ],
      list3: [
        ["Total Staked", "0 $ROMI ($...)"],
        ["Total Supply", "10,000 $ROMI ($10)"],
      ],
      btn: "Buy $ROMI",
    },
    {
      tittle: "$ZLP (Ethereum)",
      list1: [
        ["Price", "$0.00"],
        ["Wallet", "... $ZLP ($...)"],
        ["Staked", "... $ZLP ($...)"],
      ],
      list2: [
        ["APR", "...%"],
        ["Rewards", "$..."],
      ],
      list3: [
        ["Total Staked", "0 $ZLP ($...)"],
        ["Total Supply", "10,000 $ZLP ($10)"],
      ],
      btn: "Buy $ZLP",
    },
    {
      tittle: "Escrowed $ROMI",
      list1: [
        ["Price", "$0.00"],
        ["Wallet", "... $ZLP ($...)"],
        ["Staked", "... $ZLP ($...)"],
      ],
      list2: [
        ["APR", "...%"],
        ["Multiplier Points APR", "$..."],
      ],
      list3: [
        ["Total Staked", "0 $ZLP ($...)"],
        ["Total Supply", "10,000 $ZLP ($10)"],
      ],
      btn: "Connect Wallet",
    },
    {
      tittle: "Total Rewards",
      list1: [
        ["ETH (WETH)", "... ($...)"],
        ["$ROMI", "... ($...)"],
        ["Escrowed $ROMI", "... ($...)"],
        ["Multiplier Points", "..."],
        ["Staked Multiplier Points", "..."],
        ["Total", "$..."],
      ],
      btn: "Connect Wallet",
    },
  ];

  const statistics2 = [
    {
      tittle: "$ROMI Vault",
      list1: [
        ["Staked Tokens", "..."],
        ["Reserved for Vesting", "0.00 / ..."],
        ["Vesting Status", "0.0000 / 0.0000"],
        ["Claimable", "0.0000 $ROMI"],
        ["Staked Multiplier Points", "..."],
        ["Total", "$..."],
      ],
      btn: "Connect Wallet",
    },
    {
      tittle: "$ZLP Vault",
      list1: [
        ["Staked Tokens", "..."],
        ["Reserved for Vesting", "0.00 / ..."],
        ["Vesting Status", "0.0000 / 0.0000"],
        ["Claimable", "0.0000 $ROMI"],
        ["Staked Multiplier Points", "..."],
        ["Total", "$..."],
      ],
      btn: "Connect Wallet",
    },
  ];

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
