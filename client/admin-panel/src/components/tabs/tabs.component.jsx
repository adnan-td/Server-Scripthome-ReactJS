import { Fragment } from "react";
import { Outlet, Link, NavLink } from "react-router-dom";

const Tabs = ({ isopen, screenwidth }) => {
  return (
    <Fragment>
      <div className="collapse tabs show" id="navbarToggleExternalContent">
        <div className={isopen && screenwidth < 500 ? "side-bar" : ""} id="sb">
          <Link to="/admin/dashboard" style={{ textDecoration: "none", cursor: "pointer" }}>
            <h3>Skumminity</h3>
          </Link>
          <ul className="nav flex-column">
            <li className="nav-item">
              <NavLink className="nav-link" to="/admin/dashboard" defaultChecked={true}>
                Dashboard
              </NavLink>
              <NavLink className="nav-link" to="/admin/scripts">
                Scripts
              </NavLink>
              <NavLink className="nav-link" to="/admin/reports">
                Reports
              </NavLink>
              <NavLink className="nav-link" to="/admin/admins">
                Admins
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Tabs;
