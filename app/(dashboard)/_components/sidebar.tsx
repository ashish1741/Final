"use client"

import Logo from "./logo";
import  SidebarRoute from "./sidebarRoute";

const sidebar = () => {
  return (
    <div className="h-full border-r flex flex-col overflow-y-auto bg-white shadow-sm">
      <div className="p-6">
        <Logo />
      </div>
      <div className="flex flex-col w-full">
      <SidebarRoute />
      </div>
    </div>
  );
};

export default sidebar;
