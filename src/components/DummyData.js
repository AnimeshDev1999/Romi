import token1 from "../images/token1.png";
import token2 from "../images/token2.png";

export const statistics = [
  {
    tittle: "Overview",
    med: "stat-card",
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
    med: "stat-card",
    list: [
      { nam: "Total Fees", price: "$0" },
      { nam: "Total Volume", price: "$0" },
      { nam: "Floor Price Fund", price: "$626,401" },
    ],
  },
];

export const statistics1 = [
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

export const statistics2 = [
  {
    tittle: "ETH",
    med: "stat-card2",
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
    med: "stat-card2",
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
    med: "stat-card2",
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
    med: "stat-card2",
    hasIco: true,
    list: [
      { nam: "Price", price: "$1,781.45" },
      { nam: "Pool", price: "$19" },
      { nam: "Weight", price: "50.49% / 25.00%" },
      { nam: "Utilization", price: "0.00%" },
    ],
  },
];

export const card = [
  {
    ico: token1,
    hed: "$ROMI",
    txt: "$ZOMI is the utility and governance token. Accrues 30% of the platform's generated fees.",
    stat: "Ethereum APR: 0.00%",
  },
  {
    ico: token2,
    hed: "$ZLP",
    txt: "$ZLP is the liquidity provider token. Accrues 70% of the platform's generated fees.",
    stat: "Ethereum APR: 1,651,178,713.51%",
  },
];
