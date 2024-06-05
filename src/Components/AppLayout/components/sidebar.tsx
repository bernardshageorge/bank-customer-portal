import { Link, NavLink } from "react-router-dom";
import Logo from "../../../assets/logo.png";

const Sidebar = ({
  isOpen,
  toggle,
}: {
  isOpen: boolean;
  toggle: () => void;
}) => {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggle}
        ></div>
      )}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50 md:translate-x-0 md:static md:w-64`}
      >
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
    </>
  );
};
export default Sidebar;
