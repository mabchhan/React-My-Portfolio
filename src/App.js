import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import Navigation from "./components/Navigation";
// import About from "./components/About";
// import Contact from "./components/Contact";

function App() {
  // const [currentPage, setCurrentPage] = useState("About");

  // const renderPage = () => {
  //   switch (currentPage) {
  //     case "about":
  //       return <About></About>;
  //     case "contact":
  //       return <Contact></Contact>;
  //     //   case "portfolio":
  //     //     return <Projects></Projects>;
  //     //   case "resume":
  //     //     return <Resume></Resume>;
  //     default:
  //       return <About></About>;
  //   }
  //};
  return (
    <div className="container">
      <div className="min-height">
        <Header />
        {/* <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} /> */}
        {/* {renderPage()} */}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
