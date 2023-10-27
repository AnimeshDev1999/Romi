import StatCard1 from "./StatCard1";
import StatCard2 from "./StatCard2";
import bludia from "../images/bludimon.svg";
import token1 from "../images/token1.png";
import token2 from "../images/token2.png";

const Stats = () => {
  const statistics = [
    {
      tittle: "Overview",
      list: [
        { nam: "AUM", price: "$34" },
        { nam: "$ZLP Pool", price: "$34" },
        { nam: "24h Volume", price: "$0" },
        { nam: "Long Positions", price: "$0" },
        { nam: "Short Positions", price: "$0" },
      ],
    },
    {
      tittle: "Total Stats",
      list: [
        { nam: "Total Fees", price: "$0" },
        { nam: "Total Volume", price: "$0" },
        { nam: "Floor Price Fund", price: "$626,401" },
      ],
    },
  ];

  const statistics1 = [
    {
      tittle: "$ROMI",
      ico: token1,
      list: [
        { nam: "AUM", price: "$34" },
        { nam: "$ZLP Pool", price: "$34" },
        { nam: "24h Volume", price: "$0" },
        { nam: "Long Positions", price: "$0" },
        { nam: "Short Positions", price: "$0" },
      ],
      graph: ["Distribution", "94, 100"],
    },
    {
      tittle: "$ZLP",
      ico: token2,
      list: [
        { nam: "Total Fees", price: "$0" },
        { nam: "Total Volume", price: "$0" },
        { nam: "Floor Price Fund", price: "$626,401" },
      ],
      graph: ["$ZLP Pool", "49, 100"],
    },
  ];

  const statistics2 = [
    {
      tittle: "ETH",
      hasIco: true,
      list: [
        { nam: "Price", price: "$1,781.45" },
        { nam: "Pool", price: "$19" },
        { nam: "Weight", price: "50.49% / 25.00%" },
        { nam: "Utilization", price: "0.00%" },
      ],
    },
    {
      tittle: "WBTC",
      hasIco: true,
      list: [
        { nam: "Price", price: "$1,781.45" },
        { nam: "Pool", price: "$19" },
        { nam: "Weight", price: "50.49% / 25.00%" },
        { nam: "Utilization", price: "0.00%" },
      ],
    },
    {
      tittle: "APE",
      hasIco: true,
      list: [
        { nam: "Price", price: "$1,781.45" },
        { nam: "Pool", price: "$19" },
        { nam: "Weight", price: "50.49% / 25.00%" },
        { nam: "Utilization", price: "0.00%" },
      ],
    },
    {
      tittle: "USDC",
      hasIco: true,
      list: [
        { nam: "Price", price: "$1,781.45" },
        { nam: "Pool", price: "$19" },
        { nam: "Weight", price: "50.49% / 25.00%" },
        { nam: "Utilization", price: "0.00%" },
      ],
    },
  ];

  return (
    <div className="px-6 pt-16 pb-8 border-b-[1px] border-[#dddddd53]">
      <div className="mb-4 flex items-center gap-3">
        <h1 className="text-4xl leading-tight">Stats</h1>
        <img src={bludia} alt="" className="h-6" />
      </div>
      <p className="text-[#b9b9b9] mb-6">
        Ethereum Total Stats start from 06 Jan 2022. For detailed stats:
      </p>
      <div className="flex flex-col gap-4 mb-8">
        {statistics.map((item) => (
          <StatCard1 key={item.tittle} data={item}></StatCard1>
        ))}
      </div>
      <div className="mb-4 flex items-center gap-3">
        <h1 className="text-4xl leading-tight">Tokens</h1>
        <img src={bludia} alt="" className="h-6" />
      </div>
      <p className="text-[#b9b9b9] mb-6">Platform and $ZLP index tokens.</p>
      <div className="flex flex-col gap-4 mb-8">
        {statistics1.map((item) => (
          <StatCard2 key={item.tittle} data={item}></StatCard2>
        ))}
        {statistics2.map((item) => (
          <StatCard1 key={item.tittle} data={item}></StatCard1>
        ))}
      </div>
    </div>
  );
};

export default Stats;
