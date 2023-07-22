import { useState } from "react";
import "./NavBar.scss";
import { useAllCategories } from "./GetApi";

export const NavBar = () => {
  const [show, setShow] = useState(false);
  const { data: categoryList } = useAllCategories();
  return (
    <>
      <header className="header-section">
        <div className="container-fluid">
          <div className="site-logo">
            <div className="logo-section">
              <h4 className="text"> OnlineStore</h4>
            </div>
          </div>
          <div className="nav-switch">
            <i className="fa fa-bars"></i>
          </div>

          <ul className="main-menu">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/search">Search</a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};
