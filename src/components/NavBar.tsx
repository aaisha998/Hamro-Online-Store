import { useState } from "react";
import { CategoryIcon, HomeIcon, SearchIcon } from "./svg";
import "./NavBar.scss"
import { useAllCategories } from "./GetApi";


export const NavBar = () => {
  const [show, setShow] = useState(false);
  const { data: categoryList } = useAllCategories();
  return (
    <>
      <div className="nav-seciton">
        <div className="nav-wrapper">
          <div className="logo-section">
            <h4 className="text"> OnlineStore</h4>
          </div>

          <div className="list-wrapper">
            <a className="nav-link" href="/">
              <div className="nav-text">
                <HomeIcon />
                <p className="nav-content">Home</p>
              </div>
            </a>

            <div className="nav-text">
              <SearchIcon />
              <p className="nav-content">Search</p>
            </div>

            <div
              className="nav-text dropdown-btn"
              onClick={() => {
                setShow(!show);
              }}
            >
              <CategoryIcon />

              <p className="nav-content dropdown-toggle">Catagories</p>
              <div
              className={show ? "menu-dropdown" : "menu-dropdown no-dropdown"}
            >
              {categoryList?.map((item) => {
                return <div className="dropdown-item">{item}</div>;
              })}
            </div>
            </div>
          </div>
        </div>
        <div className="mg-nav-40"></div>
      </div>
    </>
  );
};
