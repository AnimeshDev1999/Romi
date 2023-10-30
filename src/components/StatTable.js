import whtDia from "../images/whtdia.svg";
import bluDia from "../images/bludimon.svg";

const StatTable = (props) => {
  return (
    <div className="border-[1px] col-span-2 hidden lg:block rounded-md border-[#dddddd53] bg-[#151515]">
      <div className="border-b-[1px] flex items-center gap-3 p-4 border-[#dddddd53]">
        <h1 className="">$ZLP Index Composition</h1>
        <img src={bluDia} alt="" className="h-5" />
      </div>
      <table className="w-full text-left m-4">
        <tr>
          <th className="tbl-hed">TOKEN</th>
          <th className="tbl-hed">PRICE</th>
          <th className="tbl-hed">POOL</th>
          <th className="tbl-hed">WEIGHT</th>
          <th className="tbl-hed">UTILIZATION</th>
        </tr>
        {props.data.map((item) => (
          <tr>
            <td className="tbl-dat">
              <div className="flex items-center gap-2">
                <img src={whtDia} alt="" className="h-10" />
                <p>{item.tittle}</p>
              </div>
            </td>
            <td className="tbl-dat">{item.list[0].price}</td>
            <td className="tbl-dat">{item.list[1].price}</td>
            <td className="tbl-dat">{item.list[2].price}</td>
            <td className="tbl-dat">{item.list[3].price}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default StatTable;
