import { UserCircleIcon } from "@heroicons/react/24/solid";

const Header = () => {
  return (
    <div className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <div>Company Name</div>
      <div className="flex items-center">
        <span className="mr-2">John Doe</span>
        <UserCircleIcon className="w-8 h-8 rounded-full" />
      </div>
    </div>
  );
};

export default Header;
