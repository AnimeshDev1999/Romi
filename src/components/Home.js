import HomeCards from "./HomeCards";
import arr from "../images/Arrow.svg";
import grow from "../images/Growth.svg";
import ppl from "../images/People.svg";

const Home = () => {
  const cards = [
    { ico: arr, txt: "Total Trading Volume", num: "$0" },
    { ico: grow, txt: "Open Interest", num: "$0" },
    { ico: ppl, txt: "Total Users", num: "0" },
  ];

  return (
    <div className="px-6 py-24 border-b-[1px] border-[#dddddd53]">
      <h1 className="text-5xl leading-tight mb-6">
        Decentralized Perpetual Exchange
      </h1>
      <p className="text-[#b9b9b9] text-xl mb-8">
        Trade BTC, ETH, AVAX and other top cryptocurrencies with up to 30x
        leverage directly from your wallet
      </p>
      <button className="rounded-md text-sm py-2 px-4 bg-[#3eb489]">
        Launch Exchange
      </button>
      <div className="mt-24 flex flex-col justify-center gap-8">
        {cards.map((item) => (
          <HomeCards key={item.txt} data={item}></HomeCards>
        ))}
      </div>
    </div>
  );
};

export default Home;
