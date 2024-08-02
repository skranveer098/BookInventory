import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./Sidebar";

const DashboardLayout = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <SideBar />
      <div className="flex-1 overflow-auto p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
