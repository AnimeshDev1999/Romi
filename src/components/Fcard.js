const Fcard = (props) => {
  return (
    <div>
      <div className="flex items-center gap-5 mb-5">
        <img src={props.data.ico} alt="" />
        <p className="text-2xl">{props.data.hed}</p>
      </div>
      <p className="text-[#b9b9b9] text-lg">{props.data.txt}</p>
    </div>
  );
};

export default Fcard;
