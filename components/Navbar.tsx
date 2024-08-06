"use client";

import { useState } from "react";
import Container from "./Container";
import LogoLink from "./LogoLink";
import { links } from "@/utils/links";
import NavLink from "./NavLink";
import HamburgerButton from "./HamburgerButton";

const Navbar = () => {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const handleMenuClick = () => {
    setIsOpened((prev) => !prev);
  };

  const handleCloseMenu = () => {
    setIsOpened(false);
  };

  return (
    <nav id="navbar" className="sticky left-0 top-0 z-20">
      <div className="bg-bpsBlue">
        <Container>
          <div className="flex items-center justify-between gap-8 p-4">
            <HamburgerButton isOpened={isOpened} onClick={handleMenuClick} />
            <div className="sm:hidden" onClick={handleCloseMenu}>
              <LogoLink type="logoOnly" textColor="#fff" />
            </div>
            <div className="max-sm:hidden">
              <LogoLink type="both" textColor="#fff" />
            </div>
            <div className="flex items-center gap-8 max-sm:hidden">
              {links.map((linkObj) => (
                <NavLink
                  key={linkObj.name}
                  linkObj={linkObj}
                  onClick={() => {}}
                />
              ))}
            </div>
          </div>
        </Container>
      </div>
      <div
        className={`transition-transform duration-100 absolute h-screen w-full bg-bpsBlue sm:hidden ${
          isOpened ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Container>
          <div className="flex flex-col items-center gap-8 p-4">
            {links.map((linkObj) => (
              <NavLink
                key={linkObj.name}
                linkObj={linkObj}
                onClick={handleCloseMenu}
              />
            ))}
          </div>
        </Container>
      </div>
    </nav>
  );
};

export default Navbar;
