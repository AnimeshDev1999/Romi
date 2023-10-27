const HomeCards = (props) => {
  return (
    <div className="h-card">
      <img src={props.data.ico} alt="" />
      <div>
        <p className="text-[#b9b9b9]">{props.data.txt}</p>
        <p className="text-3xl">{props.data.num}</p>
      </div>
    </div>
  );
};

export default HomeCards;
