import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "../assets/riva-logo.png";
import Link from "./Link";
import ActionButton from "./ActionButton";
import { pages } from "../types";
import { useMediaQuery } from "usehooks-ts";
type NavbarProps = {
  selectedPage: pages;
  isTopOfPage: boolean;
  setSelectedPage: (value: pages) => void;
};
const Navbar = ({
  selectedPage,
  isTopOfPage,
  setSelectedPage,
}: NavbarProps) => {
  const [menu, toggleMenu] = useState(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow";
  return (
    <nav>
      <div
        className={`flex items-center justify-between fixed top-0 z-40 w-full py-6 ${navbarBackground}`}
      >
        <div className="flex items-center justify-between mx-auto w-5/6">
          <div className="flex items-center justify-between w-full gap-16">
            <img src={Logo} alt="Riva logo" className="w-12 h-12" />
            {isAboveMediumScreens ? (
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center justify-between gap-8 text-sm">
                  <Link
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Benefits"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Classes"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Contact"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>
                <div className="flex items-center justify-between gap-8">
                  <p>Sign in</p>
                  <ActionButton setSelectedPage={setSelectedPage}>
                    Become a member
                  </ActionButton>
                </div>
              </div>
            ) : (
              <button
                className="rounded-full bg-secondary-500 p-2"
                onClick={() => toggleMenu(!menu)}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>
      {!isAboveMediumScreens && menu && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
          <div className="flex justify-end p-12">
            <button onClick={() => toggleMenu(!menu)}>
              <XMarkIcon className="h-6 w-6 text-white" />
            </button>
          </div>
          <div className="ml-[33%] flex flex-col gap-10 text-2xl">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Benefits"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Classes"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Contact"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
