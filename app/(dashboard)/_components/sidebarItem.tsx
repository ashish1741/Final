"use client";

import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";

interface sidebarItemProps {
  key: string;
  href: string;
  icon: LucideIcon;
  label: string;
}

const SidebarItem = ({ href, icon: Icon, label }: sidebarItemProps) => {
  const router = useRouter();
  const pathname = usePathname();

  const isActive =
    (pathname === "/" && href === "/") ||
    pathname === href ||
    pathname?.startsWith(`${href}`);

  const onclick = () => {
    router.push(href);
  };

  return (
    <button
      onClick={onclick}
      type="button"
      className={cn(
        "flex items-center gap-x-2 text-slate-500 text-sm font-[500] pl-6  transition-all hover:text-slate-600 hover:bg-slate-300/20",
        isActive && "text-sky-700 hover:text-sky-700"
      )}
    >
      <div className="flex items-center gap-x-2 py-4">
        <Icon
          size={22}
          className={cn("text-slate-500", isActive && "text-sky-700")}
        />
        {label}
      </div>
    </button>
  );
};

export default SidebarItem;
