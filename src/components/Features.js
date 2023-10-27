import Fcard from "./Fcard";
import drop from "../images/drop.svg";
import flag from "../images/flag.svg";
import updwn from "../images/updown.svg";

const Features = () => {
  const card = [
    {
      ico: drop,
      hed: "Reduce Liquidation Risks",
      txt: "An aggregate of high-quality price feeds determine when liquidations occur. This keeps positions safe from temporary wicks.",
    },
    {
      ico: flag,
      hed: "Save on Costs",
      txt: "Enter and exit positions with minimal spread and zero price impact. Get the optimal price without incurring additional costs.",
    },
    {
      ico: updwn,
      hed: "Simple Swaps",
      txt: "Open positions through a simple swap interface. Conveniently swap from any supported asset into the position of your choice.",
    },
  ];

  return (
    <div className="px-6 py-24 flex flex-col items-center gap-14">
      {card.map((item) => (
        <Fcard key={item.hed} data={item}></Fcard>
      ))}
    </div>
  );
};
export default Features;
