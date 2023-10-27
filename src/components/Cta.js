import CtaCard from "./CtaCard";
import token1 from "../images/token1.png";
import token2 from "../images/token2.png";

const Cta = () => {
  const card = [
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

  return (
    <div className="px-6 py-24 flex flex-col items-center gap-8 border-b-[1px] border-[#dddddd53]">
      <h1 className="text-4xl leading-tight">
        Two tokens create our ecosystem
      </h1>
      <div className="flex flex-col gap-4">
        {card.map((item) => (
          <CtaCard key={item.hed} data={item}></CtaCard>
        ))}
      </div>
    </div>
  );
};

export default Cta;
