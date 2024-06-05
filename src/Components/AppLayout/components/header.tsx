import { UserCircleIcon } from "@heroicons/react/24/solid";

const Header = ({ toggle }: { toggle: () => void }) => {
  return (
    <div className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <button onClick={toggle} className="md:hidden">
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2 5h20a1 1 0 010 2H2a1 1 0 010-2zm0 6h20a1 1 0 010 2H2a1 1 0 010-2zm0 6h20a1 1 0 010 2H2a1 1 0 010-2z"
          />
        </svg>
      </button>
      <div>Company Name</div>
      {/* User Profile Section */}
      <div className="flex items-center">
        <span className="hidden md:inline-block mr-2">John Doe</span>
        <UserCircleIcon className="w-8 h-8 rounded-full" />
      </div>
    </div>
  );
};

export default Header;
