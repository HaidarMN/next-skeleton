import { useRouter } from "next/router";
import Link from "next/link";

// Stores
import { useAuthStore } from "@/stores/auth";

// Icon
import { MdExitToApp } from "react-icons/md";
import { usePathname } from "next/navigation";
import { useLayoutStore } from "@/stores/layout";
import { useEffect } from "react";

const Sidebar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { user, removeAuth: removeAuth } = useAuthStore();
  const { setBreadcrumb: setBreadcrumb } = useLayoutStore();

  // Variabel
  const list_menu = [
    { label: "Dashboard", path: "/" },
    { label: "Input Form", path: "/input-form" },
  ];

  // Function
  const dynamicClass = (val: boolean) => {
    const active = val
      ? "text-teal-300 font-medium rounded-lg bg-slate-950"
      : "text-slate-300 hover:text-teal-300";

    return `${active} px-4 py-2 w-full flex`;
  };
  const logOut = () => {
    removeAuth();
    router.push("/auth/login");
  };

  useEffect(() => {
    setBreadcrumb(["Dashboard"]);
  }, []);

  return (
    <>
      <aside className="fixed z-20 flex h-screen w-60 flex-col justify-between overflow-y-auto overflow-x-hidden bg-slate-500 px-6 py-8">
        <div className="flex flex-col gap-8">
          <h1 className="text-2xl font-bold text-teal-300">LOGO</h1>

          <ul className="space-y-2">
            {list_menu.map((val, index) => (
              <li key={index}>
                <Link
                  href={val.path}
                  className={dynamicClass(pathname === val.path)}
                >
                  {val.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-row items-center justify-between">
          <Link href="/profile" className="flex flex-row items-center gap-2">
            <img
              src={user.image}
              alt={`${user.username}'s photo`}
              className="h-8 w-8 rounded-full"
              width={500}
              height={500}
            />
            <div className="flex h-full flex-col justify-between">
              <span className="text-sm font-medium text-teal-300">
                {user.firstName} {user.lastName}
              </span>
              <span className="text-xs text-slate-300">{user.gender}</span>
            </div>
          </Link>
          <MdExitToApp
            className="cursor-pointer text-xl text-slate-300"
            onClick={logOut}
          />
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
