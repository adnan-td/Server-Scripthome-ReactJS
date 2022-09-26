import "./search.style.scss";
import React, { useState } from "react";
import SearchIcon from "../../assets/Script/Modal-Icons/Search-Modal-Icon.svg";
import searchlogo from "../../assets/Nav-Icon/search-icon-nav.svg";

const Search = ({ styles }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [searchField, SetSearchField] = useState("");

  return (
    <>
      <div className="search-box-container" style={{ ...styles }}>
        <button onClick={handleShow}>
          <img src={searchlogo} alt="search-icon" />
        </button>
      </div>
      {((show) => {
        if (show) {
          return (
            <div className="search-box-cover" onClick={handleClose}>
              <div className="search-box" onClick={(e) => e.stopPropagation()}>
                <div className="magnify">
                  <img src={SearchIcon} alt="search-icon" />
                </div>
                <div className="inp-d">
                  <input
                    placeholder="Search Scripts"
                    type="search"
                    onChange={(event) => {
                      SetSearchField(event.target.value.toLocaleLowerCase());
                    }}
                    value={searchField}
                  />
                </div>
              </div>
            </div>
          );
        }
      })(show)}
    </>
  );
};

export default Search;
