import React from "react";
import Sidebar from "./subComponents/Sidebar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-2">
        <Sidebar />
      </div>
      <div className="col-span-10">
        In the name of Allah
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
