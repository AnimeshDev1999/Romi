import logo from "../images/Romi Logo.png";
import close from "../images/close-outline.svg";

const SideMenu = (props) => {
  return (
    <div className={props.stat ? "side-menu side-menu-opn" : "side-menu"}>
      <div className="flex justify-between items-center">
        <img src={logo} alt="" className="h-16" />
        <button onClick={props.toggle} className="mr-4">
          <img src={close} alt="" className="h-8" />
        </button>
      </div>
      <div className="flex flex-col justify-center">
        <button onClick={props.func} className="side-btn">
          Home
        </button>
        <button onClick={props.func} className="side-btn">
          Dashboard
        </button>
      </div>
    </div>
  );
};

export default SideMenu;
