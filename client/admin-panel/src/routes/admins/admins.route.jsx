import { Link } from "react-router-dom";
import ArrowButtons from "../../components/arrowbuttons/arrowbuttons.component";
import { useContext, useState, useEffect } from "react";
import { DataContext } from "../../contexts/data/data.context";
import { SearchContext } from "../../contexts/searchfield/search.context";

export default function Admins() {
  const { admins } = useContext(DataContext);
  const { searchfield } = useContext(SearchContext);
  const [current, Setcurrent] = useState(0);
  const [shortadmins, Setshortadmins] = useState([]);
  const [filteredadmins, Setfilteredadmins] = useState([]);

  const Addcurrent = () => {
    if (current + 10 > filteredadmins.length) {
      return;
    }
    Setcurrent(current + 10);
  };

  const Subcurrent = () => {
    if (current - 10 < 0) {
      return;
    }
    Setcurrent(current - 10);
  };

  useEffect(() => {
    if (searchfield !== "") {
      Setfilteredadmins(
        admins.filter((admin) => {
          return admin.name.includes(searchfield) || admin.email.includes(searchfield);
        })
      );
      Setcurrent(0);
    } else {
      Setfilteredadmins(admins);
    }
  }, [searchfield, admins]);

  useEffect(() => {
    Setshortadmins(filteredadmins.slice(current, current + 10));
  }, [current, searchfield, filteredadmins]);

  return (
    <div className="main2">
      <div className="main-header">
        <div>
          <h3>All Users</h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link
                  to="/admin/dashboard"
                  style={{
                    listStyle: "none",
                    color: "#8c8888",
                    textDecoration: "none",
                  }}
                >
                  Dashboard
                </Link>
              </li>
              <li className="breadcrumb-item" aria-current="page" style={{ color: "#8c8888" }}>
                Admin Panel Users
              </li>
            </ol>
          </nav>
        </div>
        <div className="edit-users">
          <Link to="/admin/admins/addadmin">
            Add Users <i className="fa-solid fa-caret-right"></i>
          </Link>
        </div>
      </div>
      <div className="table-container">
        <table className="table">
          <tbody>
            <tr>
              <td>Sr.No.</td>
              <td>Name</td>
              <td>Email</td>
              <td>Role</td>
              <td></td>
            </tr>
            {shortadmins.map((item, key) => {
              return <Tr key={key} admin={item} srno={current + key} />;
            })}
          </tbody>
        </table>
      </div>
      <div className="foot">
        <p>
          Displaying {current + shortadmins.length} Out of {filteredadmins.length}
        </p>
        <div>
          <p>
            {current + 1}-{current + shortadmins.length}
          </p>
          <ArrowButtons Addcurrent={Addcurrent} Subcurrent={Subcurrent} />
        </div>
      </div>
    </div>
  );
}

function Tr({ srno, admin }) {
  let { name, email, role } = admin;
  const roleconverter = (role) => {
    if (role === 0) role = "Users";
    if (role === 1) role = "Verified";
    if (role === 2) role = "Admin";
    if (role === 3) role = "Super-Admin";
    return role;
  };
  role = roleconverter(role);
  return (
    <tr>
      <td>{srno + 1}</td>
      <td>{name}</td>
      <td>{email}</td>
      <td>
        <div className={role.toLocaleLowerCase()}>{role}</div>
      </td>
      <td>
        <div className="dropdown">
          <button className="dropdown-toggle dots" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            <i className="fa-solid fa-ellipsis"></i>
          </button>
          <ul className="dropdown-menu dropdown-menu-shadow-orange" aria-labelledby="dropdownMenuButton1">
            <li>
              <Link className="dropdown-item" to={`editadmin?id=${admin.id}`}>
                <span style={{ color: "green" }}>
                  <i className="fa-solid fa-circle-check"></i>
                </span>
                Edit
              </Link>
            </li>
            <li>
              <a className="dropdown-item" href=" ">
                <span style={{ color: "#fd683e" }}>
                  <i className="fa-solid fa-circle-xmark"></i>
                </span>
                Deactivate
              </a>
            </li>
          </ul>
        </div>
      </td>
    </tr>
  );
}
