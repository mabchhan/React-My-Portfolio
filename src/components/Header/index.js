import React, { useState } from "react";
import Navigation from "../Navigation";
import About from "../About";
import Contact from "../Contact/";
function Header() {
  const [currentPage, setCurrentPage] = useState("About Me");

  const renderPage = () => {
    switch (currentPage) {
      case "About Me":
        return <About />;
      case "Contact":
        return <Contact />;
      //   case "portfolio":
      //     return <Projects></Projects>;
      //   case "resume":
      //     return <Resume></Resume>;
      default:
        return <About />;
    }
  };
  return (
    <div className="container">
      <div className="row  justify-content-center align-item-center">
        <div className="col m-5">
          <h3>Mab Chhan</h3>
        </div>

        <div className="col m-5">
          <Navigation
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
        <div>
          <h4 className="text-center m-3">{currentPage}</h4>
        </div>
        <div>{renderPage()}</div>
      </div>
    </div>
  );
}

export default Header;
