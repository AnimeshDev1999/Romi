import { useState } from "react";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Features from "./components/Features";
import Cta from "./components/Cta";
import Footer from "./components/Footer";
import Stats from "./components/Stats";
import SideMenu from "./components/SideMenu";
import Earn from "./components/Earn";

function App() {
  const [page, setPage] = useState("Home");
  const [visible, setVisible] = useState(false);
  const pageSwitch = (e) => {
    setPage(e.target.innerText);
    setVisible(!visible);
  };
  const mobNavToggle = (e) => {
    setVisible(!visible);
  };

  return (
    <div className="relative">
      <NavBar toggle={mobNavToggle}></NavBar>
      {page === "Home" ? (
        <>
          <Home></Home>
          <Features></Features>
          <Cta></Cta>
        </>
      ) : page === "Dashboard" ? (
        <Stats></Stats>
      ) : (
        <Earn></Earn>
      )}
      <Footer></Footer>
      <SideMenu
        stat={visible}
        toggle={mobNavToggle}
        func={pageSwitch}
      ></SideMenu>
    </div>
  );
}

export default App;
