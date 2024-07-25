"use client";

import { useEffect, useState } from "react";
import Container from "./Container";
import LogoLink from "./LogoLink";
import { links } from "@/utils/links";
import Link from "next/link";

const Navbar = () => {
  const [isPressed, setIsPressed] = useState<boolean>(false);

  const handlePress = (): void => {
    setIsPressed((prev) => !prev);
  };

  return (
    <>
      <nav
        id="navbar"
        className="sticky left-0 top-0 z-10 w-full border-b border-neutral-300 bg-white/90 backdrop-blur transition-all duration-100 max-[512px]:hidden"
      >
        <Container>
          <div className="flex w-full items-center justify-between gap-8 p-4">
            <LogoLink type="both" />
            <div className="flex gap-8">
              {links.map((link, i) => {
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-neutral-600 hover:text-black"
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </Container>
      </nav>

      <nav
        id="navbar"
        className="sticky left-0 top-0 z-10 w-full border-b border-neutral-300 bg-white/90 backdrop-blur transition-all duration-100 min-[513px]:hidden"
      >
        <Container>
          <div className="flex w-full items-center justify-between gap-8 p-4">
            <button
              className="rounded-lg border border-neutral-300 px-6 py-2 text-lg font-bold text-neutral-600"
              onClick={handlePress}
            >
              =
            </button>
            <LogoLink type="logoOnly" />
          </div>
          {isPressed && (
            <div className="flex flex-col gap-8 p-4">
              {links.map((link, i) => {
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="w-full text-center text-neutral-600 hover:text-black"
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          )}
        </Container>
      </nav>
    </>
  );
};

export default Navbar;
