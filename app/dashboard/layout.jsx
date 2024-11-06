import Header from "./_components/Header.jsx";
import Sidebar from "./_components/Sidebar.jsx";
import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <div className="md:w-64 hidden md:block">
        <Sidebar />
      </div>
      <div className="md:ml-64">
        <Header />
        <div className="p-2"> {children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
