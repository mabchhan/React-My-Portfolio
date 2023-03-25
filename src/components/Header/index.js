import React, { useState } from "react";
import Navigation from "../Navigation";
import About from "../About";
import Portfolio from "../Portfolio";
import Contact from "../Contact/";
function Header() {
  const [currentPage, setCurrentPage] = useState("About Me");

  const renderPage = () => {
    switch (currentPage) {
      case "About Me":
        return <About />;
      case "Contact":
        return <Contact />;
      case "Portfolio":
        return <Portfolio />;
      //   case "resume":
      //     return <Resume></Resume>;
      default:
        return <About />;
    }
  };
  return (
    <div className="container">
      <div className="row  justify-content-center align-item-center m-4">
        <div className="col ">
          <h3>Mab Chhan</h3>
        </div>

        <div className="col ">
          <Navigation
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h4 className="text-center my-3">{currentPage}</h4>
        </div>
      </div>
      <div className="row mb-2">
        <div>{renderPage()}</div>
      </div>
    </div>
  );
}

export default Header;
