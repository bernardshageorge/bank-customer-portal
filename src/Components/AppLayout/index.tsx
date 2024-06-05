import { PropsWithChildren } from "react";
import Header from "./components/header";
import Sidebar from "./components/sidebar";

const AppLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="flex h-screen">
        {/* Sidebar */}
        <Sidebar />
        {/* Main Content */}
        <div className="flex-1">
          {/* Header */}
          <Header />
          {/* Main Content Area */}
          <div className="p-4">{children}</div>
        </div>
      </div>
    </>
  );
};

export default AppLayout;
