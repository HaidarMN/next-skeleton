import { usePathname } from "next/navigation";
import { useLayoutStore } from "@/stores/layout";
import Link from "next/link";

const Breadcrumb = () => {
  const pathname = usePathname();
  const { breadcrumbs_list } = useLayoutStore();

  // Variabel
  const location_path = pathname.split("/");
  const breadcrumbs = breadcrumbs_list.map((val: string, index: number) => {
    return {
      label: val,
      path: `/${location_path.slice(1, index + 2).join("/")}`,
    };
  });

  return (
    <div className="flex flex-row items-center gap-2">
      {breadcrumbs &&
        breadcrumbs.map((val: any, index: number) => {
          if (index + 1 == breadcrumbs.length) {
            return (
              <span key={index} className="text-sm text-sky-700">
                {val.label}
              </span>
            );
          } else {
            return (
              <Link
                href={val.path}
                key={index}
                className="text-sm text-slate-400"
              >
                {val.label} |
              </Link>
            );
          }
        })}
    </div>
  );
};

export default Breadcrumb;
