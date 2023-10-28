import logo from "../images/Romi Logo.png";
import tw from "../images/logo-twitter.svg";
import mm from "../images/logo-medium.svg";
import git from "../images/logo-github.svg";
import tel from "../images/paper-plane-outline.svg";
import dis from "../images/logo-discord.svg";

const Footer = () => {
  return (
    <div className="flex flex-col border-t-[1px] border-[#dddddd53] bg-[#151515] py-5 gap-5 justify-center items-center">
      <div className="flex justify-center items-center">
        <img src={logo} alt="" className="h-16" />
        <p className="text-2xl">Romi Finance</p>
      </div>
      <div className="flex gap-5 md:gap-16">
        <img src={tw} alt="" className="h-7" />
        <img src={mm} alt="" className="h-7" />
        <img src={git} alt="" className="h-7" />
        <img src={tel} alt="" className="h-7" />
        <img src={dis} alt="" className="h-7" />
      </div>
      <div className="flex flex-col md:flex-row md:gap-5 items-center justify-center">
        <p className="text-[#b9b9b9] hover:text-white">Terms and Conditions</p>
        <p className="text-[#b9b9b9] hover:text-white">Referral Terms</p>
        <p className="text-[#b9b9b9] hover:text-white">Media kit</p>
      </div>
    </div>
  );
};

export default Footer;
