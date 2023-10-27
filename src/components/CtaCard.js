const CtaCard = (props) => {
  return (
    <div className="cta-card">
      <div className="flex justify-center items-center gap-2">
        <img src={props.data.ico} alt="" className="h-10" />
        <p className="text-2xl">{props.data.hed}</p>
      </div>
      <p className="text-lg">{props.data.txt}</p>
      <p className="text-[#b9b9b9]">{props.data.stat}</p>
      <div className="w-full">
        <button className="rounded-md w-full py-2 px-4 bg-[#3eb489] mb-4">
          Buy
        </button>
        <button className="cta-btn">Read more</button>
      </div>
    </div>
  );
};

export default CtaCard;
