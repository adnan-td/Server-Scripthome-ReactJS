import { Fragment, useState, useContext, useEffect } from "react";
import { Outlet, Link, NavLink } from "react-router-dom";
import navlogo from "../../assets/Logo/Logo-final.svg";
import { WidthContext } from "../../contexts/screenwidth/screenwidth.context";
import Search from "../searchbar/search.component";
import homelogo from "../../assets/Nav-Icon/home-nav.svg";
import scriptlogo from "../../assets/Nav-Icon/script-nav.svg";
import seperator from "../../assets/Nav-Icon/nav-seperator.svg";
import discordlogo from "../../assets/Nav-Icon/discord-nav.svg";
import YoutubeIcon from "../../assets/Script/Icons/youtube.svg";
import hamburgermenu from "../../assets/Nav-Icon/menu.svg";
import Signinmodal from "../../components/signin-modal/modal.component";
import Signupmodal from "../../components/signup-modal/modal.component";
import avatar from "../../assets/Script/Avatars/avatar.png";
import userIcon from "../../assets/Nav-Icon/user-icon.svg";
import logoutIcon from "../../assets/Nav-Icon/logout-icon.svg";

import "./navigation.style.scss";
import { UserContext } from "../../contexts/user/user.context";
import Axios from "axios";

const navResponse = 790;

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const screenwidth = useContext(WidthContext);
  const { user, refresh, Setrefresh } = useContext(UserContext);
  useEffect(() => {
    if (screenwidth > navResponse) {
      setIsOpen(false);
    }
  }, [screenwidth]);

  const HandleLogout = async () => {
    await Axios({
      method: "delete",
      withCredentials: true,
      url: "http://localhost:8000/request/logout",
    });
    Setrefresh(!refresh);
  };

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <img alt="loading" src={navlogo} />
        </Link>

        {screenwidth < navResponse && (
          <Search
            styles={{
              position: "absolute",
              right: "10px",
              top: "24px",
              margin: "0 1rem 0 0",
              display: "initial",
            }}
          />
        )}
        <div className="nav-links-container-background">
          <div
            className="nav-links-container"
            style={!isOpen && screenwidth < navResponse ? { display: "none" } : { display: "flex" }}
            open={isOpen}
          >
            <NavLink className="nav-link" to="/">
              <img src={homelogo} alt="home-icon" />
              <span>Home</span>
            </NavLink>
            <NavLink className="nav-link" to="/scripts">
              <img src={scriptlogo} alt="script-icon" />
              <span>Scripts</span>
            </NavLink>
            <a
              className="nav-link nav-link2"
              href="https://discord.gg/9N6FWkshpk"
              target="_blank"
              rel="noreferrer"
            >
              <img src={discordlogo} alt="discord-icon" />
              <span>Discord</span>
            </a>
            <a
              className="nav-link nav-link2"
              href="https://www.youtube.com/channel/UC2_Ab-9puBiqcQGcwoz6Rag"
              target="_blank"
              rel="noreferrer"
            >
              <img src={YoutubeIcon} alt="youtube-icon" />
              <span>Youtube</span>
            </a>
            <div className="nav-button-container">
              <Search />
              <div className="nav-button-separator">
                <img src={seperator} alt="" />
              </div>
              {user === null ? (
                <>
                  <Signinmodal className="nav-b1">Log In</Signinmodal>{" "}
                  <Signupmodal className="nav-b2">Join Community</Signupmodal>
                </>
              ) : (
                <NavUserIcon user={user} logout={HandleLogout} />
              )}
            </div>
          </div>
        </div>
        <button
          className="nav-toggle"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <img src={hamburgermenu} alt="hamburger-menu" />
        </button>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;

function NavUserIcon({ user, logout }) {
  const [isOpen, SetisOpen] = useState(false);
  return (
    <div className="nui">
      <div
        className="nui-icon"
        onClick={() => {
          SetisOpen(!isOpen);
        }}
      >
        <img alt="" src={avatar} />
      </div>

      {isOpen && (
        <div className="nui-dropdown">
          <div className="nui-header">
            <div className="nui-header-inner">
              <img alt="" src={avatar} />
              <div className="nui-details">
                <p className="nui-p1">{user.name}</p>
                <p className="nui-p2">{user.email}</p>
              </div>
            </div>
          </div>
          <button className="nui-dropdown-row">
            <img alt="" src={userIcon} />
            <p>Edit profile</p>
          </button>
          <button className="nui-dropdown-row" onClick={logout}>
            <img alt="" src={logoutIcon} />
            <p>Log out</p>
          </button>
        </div>
      )}
    </div>
  );
}
