const StatCard2 = (props) => {
  return (
    <div className="stat-card">
      <div className="px-4 py-5 flex gap-2 items-center border-b-[1px] border-[#dddddd53]">
        <img src={props.data.ico} alt="" className="h-10" />
        <div className="">
          <p>{props.data.tittle}</p>
          <p className="text-[#b9b9b9] text-xs">{props.data.tittle}</p>
        </div>
      </div>
      <div className="p-4 flex flex-col gap-2">
        {props.data.list.map((item) => (
          <div key={item.nam} className="flex justify-between">
            <p className="text-[#b9b9b9]">{item.nam}</p>
            <p>{item.price}</p>
          </div>
        ))}
        {props.data.graph ? (
          <div className="flex justify-center items-center relative">
            <svg viewBox="0 0 36 36" class="circular-chart">
              <path
                class="circle"
                stroke-dasharray={props.data.graph[1]}
                d="M18 2.0845
        a 15.9155 15.9155 0 0 1 0 31.831
        a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>
            <p className="absolute">{props.data.graph[0]}</p>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default StatCard2;
