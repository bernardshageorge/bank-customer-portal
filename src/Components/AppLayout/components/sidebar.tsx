import { Link, NavLink } from "react-router-dom";
import Logo from "../../../assets/logo.png";

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-64 flex flex-col">
      {/* Logo */}
      <div className="p-4">
        <Link to="/">
          <img src={Logo} alt="Logo" className="w-full" />
        </Link>
      </div>
      {/* Sidebar Content */}
      <ul className="p-2">
        <li>
          <NavLink
            to="/manage-beneficiary"
            // className="py-1 px-4 cursor-pointer hover:bg-gray-700"
            className={({ isActive }) => {
              return isActive
                ? "py-1 px-4 active cursor-pointer bg-gray-700 w-full inline-block"
                : "py-1 px-4 cursor-pointer hover:bg-gray-700 w-full inline-block";
            }}
          >
            Manage Beneficiary
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
export default Sidebar;
