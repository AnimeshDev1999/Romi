import whtDia from "../images/whtdia.svg";

const EarnCard = (props) => {
  return (
    <div className="stat-card">
      <div className="px-4 py-5 items-center flex gap-2 border-b-[1px] border-[#dddddd53]">
        {props.data.hasIco ? <img src={whtDia} alt="" /> : ""}
        <p className="">{props.data.tittle}</p>
      </div>
      <div className="p-4 flex flex-col gap-2">
        {props.data.list1.map((item) => (
          <div key={item[0]} className="flex justify-between">
            <p className="text-[#b9b9b9]">{item[0]}</p>
            <p>{item[1]}</p>
          </div>
        ))}
      </div>
      {props.data.list2 ? (
        <div className="p-4 flex flex-col gap-2 border-t-[1px] border-[#dddddd53]">
          {props.data.list2.map((item) => (
            <div key={item[0]} className="flex justify-between">
              <p className="text-[#b9b9b9]">{item[0]}</p>
              <p>{item[1]}</p>
            </div>
          ))}
        </div>
      ) : (
        ""
      )}
      {props.data.list3 ? (
        <div className="p-4 flex flex-col gap-2 border-t-[1px] border-[#dddddd53]">
          {props.data.list3.map((item) => (
            <div key={item[0]} className="flex justify-between">
              <p className="text-[#b9b9b9]">{item[0]}</p>
              <p>{item[1]}</p>
            </div>
          ))}
        </div>
      ) : (
        ""
      )}
      <div className="p-4 flex flex-col gap-2 border-t-[1px] border-[#dddddd53]">
        <button className="rounded-md w-max text-sm py-2 px-4 bg-[#3eb489]">
          {props.data.btn}
        </button>
      </div>
    </div>
  );
};

export default EarnCard;
