import { PropsWithChildren, useState } from "react";
import Header from "./components/header";
import Sidebar from "./components/sidebar";

const AppLayout = ({ children }: PropsWithChildren) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="flex flex-col md:flex-row md:h-screen">
        {/* Sidebar */}
        <Sidebar isOpen={isOpen} toggle={toggleSidebar} />
        {/* Main Content */}
        <div className="flex-1">
          {/* Header */}
          <Header toggle={toggleSidebar} />
          {/* Main Content Area */}
          <div className="p-4">{children}</div>
        </div>
      </div>
    </>
  );
};

export default AppLayout;
