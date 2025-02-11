"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import LanguageSelect from "../Language/LanguageSelect";
import { useLanguageContext } from "@/app/context/LanguageContext";
import { menuDataEn, menuDataFr } from "./menuData";

const Header = () => {
  const { language } = useLanguageContext();
  const menuData = language === "en" ? menuDataEn : menuDataFr;
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [dropdownToggler, setDropdownToggler] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showHeader, setShowHeader] = useState(true);
  const pathUrl = usePathname();
  const [stickyMenu, setStickyMenu] = useState(false);
  const fond = "bg-black !bg-opacity-80 backdrop-blur-sm";

  // Handle scroll behavior
  const handleScroll = () => {
    // if (window.scrollY > lastScrollY) {
    //   setShowHeader(false); // Hide header on scroll down
    // } else {
    //   setShowHeader(true); // Show header on scroll up
    // }
    if (window.scrollY >= 80) {
      setStickyMenu(true);
    } else {
      setStickyMenu(false);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);
  const addBg = /\/themes/.test(pathUrl) ? fond : "";

  return (
    <header
      className={`fixed left-0 top-0 z-99999 w-full ${addBg}  transition-transform duration-300 ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      } ${
        stickyMenu
          ? "shadow-sticky z-[9999] bg-black !bg-opacity-80 backdrop-blur-sm transition"
          : ""
      }`}
    >
      <div className="container relative mx-auto items-center justify-between px-4 md:px-8 xl:flex 2xl:px-0">
        <div className="flex items-center justify-between sm:justify-between">
          <a href="/">
            <Image
              src="https://res.cloudinary.com/dx3xhdaym/image/upload/v1738657222/Africa_IT_Summit_Logo-blac_texte-06_xvd7my.png"
              alt="logo"
              width={125.03}
              height={10}
              className="w-full"
            />
          </a>

          {/* Hamburger Toggle BTN */}
          <button
            aria-label="hamburger Toggler"
            className="block xl:hidden"
            onClick={() => setNavigationOpen(!navigationOpen)}
          >
            <span className="relative block h-5.5 w-5.5 cursor-pointer">
              <span className="absolute right-0 block h-full w-full">
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-white delay-[0] duration-200 ease-in-out  ${
                    !navigationOpen ? "!w-full delay-300" : "w-0"
                  }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-white delay-150 duration-200 ease-in-out  ${
                    !navigationOpen ? "delay-400 !w-full" : "w-0"
                  }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-white delay-200 duration-200 ease-in-out  ${
                    !navigationOpen ? "!w-full delay-500" : "w-0"
                  }`}
                ></span>
              </span>
              <span className="du-block absolute right-0 h-full w-full rotate-45">
                <span
                  className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-white delay-300 duration-200 ease-in-out  ${
                    !navigationOpen ? "!h-0 delay-[0]" : "h-full"
                  }`}
                ></span>
                <span
                  className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-white duration-200 ease-in-out  ${
                    !navigationOpen ? "!h-0 delay-200" : "h-0.5"
                  }`}
                ></span>
              </span>
            </span>
          </button>
        </div>

        {/* Nav Menu Start */}
        <div
          className={`invisible h-0 w-full items-center justify-between xl:visible xl:flex xl:h-auto xl:w-full ${
            navigationOpen &&
            "navbar !visible mt-4 h-auto max-h-[400px] rounded-md bg-black p-7.5  opacity-90 shadow-solid-5 lg:bg-transparent xl:h-auto xl:p-0 xl:shadow-none "
          }`}
        >
          <nav>
            <ul className="flex flex-col gap-5 xl:flex-row xl:items-center xl:gap-10">
              {menuData.map((menuItem, key) => (
                <li
                  key={key}
                  className={`text-center ${
                    menuItem.submenu ? "group relative" : ""
                  }`}
                >
                  {menuItem.submenu ? (
                    <>
                      <button
                        onClick={() => setDropdownToggler(!dropdownToggler)}
                        className="flex cursor-pointer items-center justify-between gap-3 hover:text-primary"
                      >
                        {menuItem.title}
                        <span>
                          <svg
                            className="h-3 w-3 cursor-pointer fill-waterloo group-hover:fill-primary"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                          >
                            <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                          </svg>
                        </span>
                      </button>
                      <ul
                        className={`dropdown ${dropdownToggler ? "flex" : ""}`}
                      >
                        {menuItem.submenu.map((item, key) => (
                          <li key={key} className="hover:text-primary">
                            <Link href={item.path || "#"}>{item.title}</Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <Link
                      href={`${menuItem.path}`}
                      className={` animation-hover relative inline-block px-2 py-2 text-transparent text-white ${
                        pathUrl === menuItem.path
                          ? "animation-active bg-gradient-to-r px-2 py-2 text-white"
                          : ""
                      }`}
                    >
                      {menuItem.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center justify-center xl:mt-0">
            <LanguageSelect sticky={stickyMenu} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
