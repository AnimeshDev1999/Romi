import whtDia from "../images/whtdia.svg";

const StatCard1 = (props) => {
  return (
    <div className="stat-card">
      <div className="px-4 py-5 items-center flex gap-2 border-b-[1px] border-[#dddddd53]">
        {props.data.hasIco ? <img src={whtDia} alt="" /> : ""}
        <p className="">{props.data.tittle}</p>
      </div>
      <div className="p-4 flex flex-col gap-2">
        {props.data.list.map((item) => (
          <div key={item.nam} className="flex justify-between">
            <p className="text-[#b9b9b9]">{item.nam}</p>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatCard1;
