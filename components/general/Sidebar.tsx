import { useRouter } from "next/router";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Stores
import { useAuthStore } from "@/stores/auth";

// Icon
import { MdExitToApp } from "react-icons/md";
import { IoHome, IoLibrary, IoLogoBuffer } from "react-icons/io5";
import { useState } from "react";

const Sidebar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { user, removeAuth: removeAuth } = useAuthStore();

  // Variabel
  const list_menu = [
<<<<<<< Updated upstream
    { label: "Dashboard", path: "/", icon: <IoHome /> },
    { label: "Input Form", path: "/input-form", icon: <IoLibrary /> },
    { label: "Pop Up", path: "/pop-up", icon: <IoLogoBuffer /> },
=======
    { label: "Dashboard", path: "/" },
    { label: "Input Form", path: "/input-form" },
    { label: "Pop Up", path: "/pop-up" },
    { label: "Table", path: "/table" },
    { label: "Button", path: "/button" },
>>>>>>> Stashed changes
  ];

  // Function
  const logOut = () => {
    removeAuth();
    router.push("/auth/login");
  };

  return (
    <aside className="fixed z-20 flex h-screen w-16 flex-col justify-between overflow-y-auto overflow-x-hidden bg-slate-500 px-2 py-6 transition-all lg:w-60 lg:px-6 lg:py-8">
      <div className="flex flex-col items-center gap-8 lg:items-start">
        <h1 className="hidden text-2xl font-bold text-teal-300 lg:block">
          LOGO
        </h1>
        <h1 className="text-2xl font-bold text-teal-300 lg:hidden">L</h1>

        <ul className="w-full space-y-2">
          {list_menu.map((val, index) => (
            <li key={index}>
              <Link
                href={val.path}
                className={`flex w-full flex-row items-center justify-center gap-4 px-2 py-2 text-xl lg:justify-normal lg:px-4 lg:text-base ${pathname === val.path ? "rounded-lg bg-slate-950 font-medium text-teal-300" : "text-slate-300 hover:text-teal-300"}`}
              >
                {val.icon}
                <span className="hidden lg:block">{val.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col items-center justify-between lg:flex-row">
        <Link href="/profile" className="flex flex-row items-center gap-2">
          <img
            src={user.image}
            alt={`${user.username}'s photo`}
            className="h-8 w-8 rounded-full"
            width={500}
            height={500}
          />
          <div className="hidden h-full flex-col justify-between lg:flex">
            <span className="text-sm font-medium text-teal-300">
              {user.firstName} {user.lastName}
            </span>
            <span className="text-xs text-slate-300">{user.gender}</span>
          </div>
        </Link>
        <MdExitToApp
          className="hidden cursor-pointer text-xl text-slate-300 lg:block"
          onClick={logOut}
        />
      </div>
    </aside>
  );
};

export default Sidebar;
