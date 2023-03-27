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
      // case "Resume":
      //   return <Resume />;
      default:
        return <About />;
    }
  };
  return (
    <div>
      <div className="container container-header">
        <div className="row  mt-3 mx-4">
          <div className="col ">
            <div
              id="logo"
              className="d-flex flex-xl-column flex-lg-row  align-items-start  "
            >
              <div>
                <a href={<About />}>
                  <img
                    src={require("../../assets/images/my profile.jpg")}
                    alt="Mab Chhan Picture"
                    className="my-profile "
                  />
                </a>
              </div>
              <div>
                <h3>Mab Chhan</h3>
              </div>
            </div>
          </div>

          <div className="col d-flex align-items-center justify-content-end">
            <Navigation
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <h4 className="text-center my-3">{currentPage}</h4>
          </div>
        </div>
        {/* <div className="row mb-2"></div> */}
        <div className="row">
          <div className="col mb-2">
            <div>{renderPage()}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
