import React, { useState } from "react";
import Navigation from "../Navigation";
import About from "../About";

function Header() {
  //   const [currentPage, setCurrentPage] = useState("About");

  //   const renderPage = () => {
  //     switch (currentPage) {
  //       case "about":
  //         return <About></About>;
  //       //   case "contact":
  //       //     return <Contact></Contact>;
  //       //   case "portfolio":
  //       //     return <Projects></Projects>;
  //       //   case "resume":
  //       //     return <Resume></Resume>;
  //       default:
  //         return <About></About>;
  //     }
  //   };
  return (
    <div className="container">
      <div className="row justify-content-center align-item-center">
        <div className="col">
          <h3>Mab Chhan</h3>
        </div>
        <div className="col">sd</div>
      </div>
      {/* <div>
        <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
        {renderPage()}
      </div> */}
    </div>
  );
}

export default Header;
