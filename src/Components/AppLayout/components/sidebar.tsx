import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-64 flex flex-col">
      {/* Logo */}
      <div className="p-4">
        <Link to="/">
          <img
            src="https://placehold.jp/200x60.png"
            alt="Logo"
            className="w-full"
          />
        </Link>
      </div>
      {/* Sidebar Content */}
      <ul className="p-2">
        <li className="py-1 px-4 cursor-pointer hover:bg-gray-700">
          <Link to="/manage-beneficiary">Manage Beneficiary</Link>
        </li>
      </ul>
    </div>
  );
};
export default Sidebar;
