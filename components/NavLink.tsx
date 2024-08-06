"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

type NavLinkProps = {
  linkObj: TLink;
  onClick: () => void;
};

const NavLink = ({ linkObj, onClick }: NavLinkProps) => {
  const currUrl = usePathname();

  return (
    <Link
      key={linkObj.name}
      href={linkObj.href}
      className={`transition-color duration-100 last:rounded-lg last:bg-white last:px-4 last:py-2 last:font-bold last:text-bpsBlue hover:text-white/70 last:hover:bg-white/70 last:hover:text-bpsBlue ${
        currUrl === linkObj.href
          ? "text-white/70 last:bg-white/70"
          : "text-white"
      }`}
      onClick={() => onClick()}
    >
      {linkObj.name}
    </Link>
  );
};

export default NavLink;
