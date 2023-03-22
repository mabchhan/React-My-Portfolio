import React from "react";

function Navigation(props) {
  const pages = ["portfolio", "contact", "resume", "about"];
  return (
    <nav>
      <ul className="flex-row"></ul>
      {pages.map((page) => (
        <li className="nav-item" key={page}>
          <a
            className={
              props.currentPage === page ? "nav-link active" : "nav-link"
            }
            href={"#" + page}
            onClick={() => props.setCurrentPage(page)}
          >
            {page}
          </a>
        </li>
      ))}
    </nav>
  );
}

export default Navigation;
