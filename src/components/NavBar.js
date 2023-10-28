import logo from "../images/Romi Logo.png";
import menu from "../images/Menu.svg";
import wallet from "../images/wallet.svg";
import diamond from "../images/diamond.svg";
import dots from "../images/3dots.svg";

const NavBar = (props) => {
  return (
    <div className="nav">
      <div className="flex justify-center items-center">
        <button onClick={props.toggle} className="block md:hidden">
          <img src={menu} alt="menu" className="h-8" />
        </button>
        <img src={logo} alt="company logo" className="h-14" />
        <p className="text-2xl">Romi Finance</p>
      </div>
      <div className="hidden md:flex justify-center items-center gap-8">
        <button
          onClick={props.func}
          className={
            props.current === "Home" ? "active-nav-btn" : "inactive-nav-btn"
          }
        >
          Home
        </button>
        <button
          onClick={props.func}
          className={
            props.current === "Dashboard"
              ? "active-nav-btn"
              : "inactive-nav-btn"
          }
        >
          Dashboard
        </button>
        <button
          onClick={props.func}
          className={
            props.current === "Earn" ? "active-nav-btn" : "inactive-nav-btn"
          }
        >
          Earn
        </button>
      </div>
      <div className="flex justify-center items-center gap-1 md:gap-6">
        <button className="rounded-md text-sm p-2 bg-[#3eb489]">Trade</button>
        <button className="nav-btn">
          <img src={wallet} alt="" className="h-5" />
          Connect
        </button>
        <button className="nav-btn">
          <img src={diamond} alt="diamond" className="h-5" />
          |
          <img src={dots} alt="options" className="h-5" />
        </button>
      </div>
    </div>
  );
};

export default NavBar;
