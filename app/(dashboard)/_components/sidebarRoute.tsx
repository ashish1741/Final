"use-client";

import { Layout, Compass } from "lucide-react";
import  SidebarItem  from "./sidebarItem";

const guestRoutes = [
  {
    icon: Layout,
    label: "DashBoard",
    href: "/",
  },
  {
    icon: Compass,
    label: "Browse",
    href: "/search",
  },
];

const sidebarRoute = () => {
  const routes = guestRoutes;
  return (
    <div className="flex flex-col w-full">
      {routes.map((ele) => (
        <SidebarItem
          key={ele.href}
          href={ele.href}
          icon={ele.icon}
          label={ele.label}
        />
      ))}
    </div>
  );
};

export default sidebarRoute;
