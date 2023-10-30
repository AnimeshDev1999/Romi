import CtaCard from "./CtaCard";
import { card } from "./DummyData";

const Cta = () => {
  return (
    <div className="px-6 md:px-12 lg:max-w-[1300px] lg:mx-auto py-24 flex flex-col justify-center gap-8">
      <h1 className="text-4xl leading-tight">Two tokens create our ecosystm</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {card.map((item) => (
          <CtaCard key={item.hed} data={item}></CtaCard>
        ))}
      </div>
    </div>
  );
};

export default Cta;
