import { Navbar } from "./components/navbar/Navbar";
import Intro from "./components/intro/intro";
import { Portfolio } from "./components/portfolio/portfolio";
import { Contact } from "./components/contact/Contact";
import "./App.scss";
import { useState } from "react";
import Menu from "./components/menu/menu";
import { Work } from "./components/work/work";


function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <div className="app">
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <div className="section">
          <Intro />
          <Portfolio />
          <Work />
          <Contact />
        </div>
      </div>
    </>
  );
}
export default App;
