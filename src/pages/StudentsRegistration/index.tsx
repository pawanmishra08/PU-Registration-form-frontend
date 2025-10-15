import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/sidebar";

const StudentsRegistration: React.FC = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <div className="flex-1 p-6 bg-gray-50 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default StudentsRegistration;
