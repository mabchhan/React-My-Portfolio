import React, { useState } from "react";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
  const [currentPage, setCurrentPage] = useState("About");

  const renderPage = () => {
    switch (currentPage) {
      case "about":
        return <About></About>;
      //   case "contact":
      //     return <Contact></Contact>;
      //   case "portfolio":
      //     return <Projects></Projects>;
      //   case "resume":
      //     return <Resume></Resume>;
      default:
        return <About></About>;
    }
  };
  return (
    <div>
      <Header />
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {/* {renderPage()} */}

      <Footer />
    </div>
  );
}

export default App;
