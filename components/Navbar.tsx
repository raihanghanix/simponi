"use client";

import { links } from "@/utils/links";
import Container from "./Container";
import LogoLink from "./LogoLink";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isPressed, setIsPressed] = useState<boolean>(false);
  const currUrl = usePathname();

  const handlePress = (): void => {
    setIsPressed((prev) => !prev);
  };

  return (
    <nav id="navbar" className="sticky left-0 top-0 z-20">
      <div className="bg-bpsBlue">
        <Container>
          <div className="flex items-center justify-between gap-8 p-4">
            <button
              className={`transition-color rounded-lg border border-white px-6 py-2 text-lg font-bold duration-100 hover:bg-white hover:text-bpsBlue sm:hidden ${
                isPressed
                  ? "bg-white text-bpsBlue"
                  : "bg-transparent text-white"
              }`}
              onClick={handlePress}
            >
              <i className="fa-solid fa-bars"></i>
            </button>
            <div className="sm:hidden">
              <LogoLink type="logoOnly" textColor="#fff" />
            </div>
            <div className="max-sm:hidden">
              <LogoLink type="both" textColor="#fff" />
            </div>
            <div className="flex items-center gap-8 max-sm:hidden">
              {links.map((link, i) => {
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`transition-color duration-100 last:rounded-lg last:bg-white last:px-4 last:py-2 last:font-bold last:text-bpsBlue hover:text-white/70 last:hover:bg-white/70 last:hover:text-bpsBlue ${
                      currUrl === link.href
                        ? "text-white/70 last:bg-white/70"
                        : "text-white"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </Container>
      </div>
      <div
        className={`transition-transform duration-100 absolute h-screen w-full  bg-bpsBlue sm:hidden ${
          isPressed ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Container>
          <div className="flex flex-col items-center gap-8 p-4">
            {links.map((link, i) => (
              <Link
                key={link.name}
                href={link.href}
                className={`transition-color duration-100 last:rounded-lg last:bg-white last:px-4 last:py-2 last:font-bold last:text-bpsBlue hover:text-white/70 last:hover:bg-white/70 last:hover:text-bpsBlue ${
                  currUrl === link.href
                    ? "text-white/70 last:bg-white/70"
                    : "text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </Container>
      </div>
    </nav>
  );
};

export default Navbar;
