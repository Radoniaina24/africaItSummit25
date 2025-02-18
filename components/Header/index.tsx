"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import LanguageSelect from "../Language/LanguageSelect";
import { useLanguageContext } from "@/app/context/LanguageContext";
import { menuDataEn, menuDataFr } from "./menuData";

// const Header = () => {
//   const { language } = useLanguageContext();
//   const menuData = language === "en" ? menuDataEn : menuDataFr;
//   const [navigationOpen, setNavigationOpen] = useState(false);
//   const [dropdownToggler, setDropdownToggler] = useState(false);
//   const [lastScrollY, setLastScrollY] = useState(0);
//   const [showHeader, setShowHeader] = useState(true);
//   const pathUrl = usePathname();
//   const [stickyMenu, setStickyMenu] = useState(false);
//   const fond = "bg-black !bg-opacity-80 backdrop-blur-sm";

//   // Handle scroll behavior
//   const handleScroll = () => {
//     // if (window.scrollY > lastScrollY) {
//     //   setShowHeader(false); // Hide header on scroll down
//     // } else {
//     //   setShowHeader(true); // Show header on scroll up
//     // }
//     if (window.scrollY >= 80) {
//       setStickyMenu(true);
//     } else {
//       setStickyMenu(false);
//     }
//     setLastScrollY(window.scrollY);
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [lastScrollY]);
//   const addBg = /\/themes/.test(pathUrl) ? fond : "";

//   return (
//     <header
//       className={`fixed left-0 top-0 z-99999 w-full   transition-transform duration-300 ${
//         showHeader ? "translate-y-0" : "-translate-y-full"
//       } ${
//         stickyMenu
//           ? "shadow-sticky z-[9999] bg-black !bg-opacity-80 backdrop-blur-sm transition"
//           : ""
//       }`}
//     >
//       <div className="container relative mx-auto items-center justify-between px-4 md:px-8 xl:flex 2xl:px-0">
//         <div className="flex items-center justify-between sm:justify-between">
//           <a href="/">
//             <Image
//               src="https://res.cloudinary.com/dx3xhdaym/image/upload/v1738657222/Africa_IT_Summit_Logo-blac_texte-06_xvd7my.png"
//               alt="logo"
//               width={125.03}
//               height={10}
//               className="w-full"
//             />
//           </a>

//           {/* Hamburger Toggle BTN */}
//           <button
//             aria-label="hamburger Toggler"
//             className="block xl:hidden"
//             onClick={() => setNavigationOpen(!navigationOpen)}
//           >
//             <span className="relative block h-5.5 w-5.5 cursor-pointer">
//               <span className="absolute right-0 block h-full w-full">
//                 <span
//                   className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-white delay-[0] duration-200 ease-in-out  ${
//                     !navigationOpen ? "!w-full delay-300" : "w-0"
//                   }`}
//                 ></span>
//                 <span
//                   className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-white delay-150 duration-200 ease-in-out  ${
//                     !navigationOpen ? "delay-400 !w-full" : "w-0"
//                   }`}
//                 ></span>
//                 <span
//                   className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-white delay-200 duration-200 ease-in-out  ${
//                     !navigationOpen ? "!w-full delay-500" : "w-0"
//                   }`}
//                 ></span>
//               </span>
//               <span className="du-block absolute right-0 h-full w-full rotate-45">
//                 <span
//                   className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-white delay-300 duration-200 ease-in-out  ${
//                     !navigationOpen ? "!h-0 delay-[0]" : "h-full"
//                   }`}
//                 ></span>
//                 <span
//                   className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-white duration-200 ease-in-out  ${
//                     !navigationOpen ? "!h-0 delay-200" : "h-0.5"
//                   }`}
//                 ></span>
//               </span>
//             </span>
//           </button>
//         </div>

//         {/* Nav Menu Start */}
//         <div
//           className={`invisible h-0 w-full items-center justify-between xl:visible xl:flex xl:h-auto xl:w-full ${
//             navigationOpen &&
//             "navbar !visible mt-4 h-auto max-h-[400px] rounded-md bg-black p-7.5  opacity-95 shadow-solid-5 md:bg-black md:opacity-95 lg:bg-black lg:opacity-95 xl:h-auto   xl:bg-transparent xl:p-0 xl:shadow-none "
//           }`}
//         >
//           <nav>
//             <ul className="flex flex-col gap-5 xl:flex-row xl:items-center xl:gap-10">
//               {menuData.map((menuItem, key) => (
//                 <li
//                   key={key}
//                   className={`text-center ${
//                     menuItem.submenu ? "group relative" : ""
//                   }`}
//                 >
//                   {menuItem.submenu ? (
//                     <>
//                       <button
//                         onClick={() => setDropdownToggler(!dropdownToggler)}
//                         className="flex cursor-pointer items-center justify-between gap-3 hover:text-primary"
//                       >
//                         {menuItem.title}
//                         <span>
//                           <svg
//                             className="h-3 w-3 cursor-pointer fill-waterloo group-hover:fill-primary"
//                             xmlns="http://www.w3.org/2000/svg"
//                             viewBox="0 0 512 512"
//                           >
//                             <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
//                           </svg>
//                         </span>
//                       </button>
//                       <ul
//                         className={`dropdown ${dropdownToggler ? "flex" : ""}`}
//                       >
//                         {menuItem.submenu.map((item, key) => (
//                           <li key={key} className="hover:text-primary">
//                             <Link href={item.path || "#"}>{item.title}</Link>
//                           </li>
//                         ))}
//                       </ul>
//                     </>
//                   ) : (
//                     <Link
//                       href={`${menuItem.path}`}
//                       className={` animation-hover relative inline-block px-2 py-2 text-transparent text-white ${
//                         pathUrl === menuItem.path
//                           ? "animation-active bg-gradient-to-r px-2 py-2 text-white"
//                           : ""
//                       }`}
//                     >
//                       {menuItem.title}
//                     </Link>
//                   )}
//                 </li>
//               ))}
//             </ul>
//           </nav>
//           <div className="flex items-center justify-center xl:mt-0">
//             <LanguageSelect sticky={stickyMenu} />
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

const Header = () => {
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  const usePathName = usePathname();
  const { language } = useLanguageContext();
  const menuData = language === "fr" ? menuDataFr : menuDataEn;
  return (
    <>
      <header
        className={`header left-0 top-0 z-40 flex w-full items-center py-3 text-white ${
          sticky
            ? "shadow-sticky dark:bg-gray-dark dark:shadow-sticky-dark fixed z-[9999] bg-black !bg-opacity-80 backdrop-blur-sm transition"
            : "absolute bg-transparent"
        }`}
      >
        <div className="container mx-auto">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="">
              <Link
                href="/"
                className={`header-logo block ${
                  sticky ? "py-0 lg:py-0" : "py-0"
                } `}
              >
                <Image
                  src="https://res.cloudinary.com/dx3xhdaym/image/upload/v1738657222/Africa_IT_Summit_Logo-blac_texte-06_xvd7my.png"
                  alt="logo"
                  width={125.03}
                  height={5}
                  className="w-full"
                />
              </Link>
            </div>
            <div className="flex w-full items-center justify-between px-4">
              <div>
                <button
                  onClick={navbarToggleHandler}
                  id="navbarToggler"
                  aria-label="Mobile Menu"
                  className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
                >
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] ${
                      sticky ? "bg-white" : "bg-white"
                    } bg-white transition-all duration-300  ${
                      navbarOpen ? " top-[7px] rotate-45" : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] ${
                      sticky ? "bg-white" : "bg-white"
                    } transition-all duration-300 dark:bg-white ${
                      navbarOpen ? "opacity-0 " : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] ${
                      sticky ? "bg-white" : "bg-white"
                    } transition-all duration-300 dark:bg-white ${
                      navbarOpen ? " top-[-8px] -rotate-45" : " "
                    }`}
                  />
                </button>
                <nav
                  id="navbarCollapse"
                  className={`navbar border-body-color/50 dark:border-body-color/20 dark:bg-dark absolute right-0 z-30 w-[250px] rounded border-[.5px] bg-white px-6 py-4 duration-300 lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${
                    navbarOpen
                      ? "visibility top-full opacity-100"
                      : "invisible top-[120%] opacity-0"
                  }`}
                >
                  <ul className="block lg:flex lg:space-x-6">
                    {menuData.map((menuItem, index) => (
                      <li key={index} className="group relative">
                        {menuItem.path ? (
                          <Link
                            href={menuItem.path}
                            className={` animation-hover relative inline-block px-2 py-2 text-transparent text-white ${
                              usePathName === menuItem.path
                                ? "animation-active bg-gradient-to-r px-2 py-2 sm:text-gray-600 lg:text-white"
                                : "sm:text-gray-600 lg:text-white"
                            }`}
                          >
                            {menuItem.title}
                          </Link>
                        ) : (
                          <>
                            <p
                              onClick={() => handleSubmenu(index)}
                              className={`flex cursor-pointer items-center justify-between py-2 text-lg  sm:text-gray-800 ${
                                sticky
                                  ? "text-dark"
                                  : "text-dark sm:text-dark md:text-white"
                              }   lg:mr-0 lg:inline-flex lg:px-0 lg:py-6`}
                            >
                              {menuItem.title}
                              <span className="pl-3">
                                <svg width="25" height="24" viewBox="0 0 25 24">
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                            </p>
                            {/* <div
                              className={`submenu relative left-0 top-full rounded-sm bg-white transition-[top] duration-300 lg:invisible group-hover:opacity-100 lg:absolute lg:top-[110%] lg:block lg:w-[250px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full dark:bg-dark ${
                                openIndex === index ? "block" : "hidden"
                              }`}
                            >
                              {menuItem.submenu.map((submenuItem, index) => (
                                <Link
                                  href={submenuItem.path}
                                  key={index}
                                  className="block rounded py-2.5 text-sm text-dark hover:text-primary lg:px-3 dark:text-white/70 dark:hover:text-white"
                                >
                                  {submenuItem.title}
                                </Link>
                              ))}
                            </div> */}
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
              <div className="flex items-center justify-end pr-16 lg:pr-0">
                {/* <button
                  aria-label="Get the Plan button"
                  className="group/btn inline-flex transform items-center gap-2 rounded-lg bg-gradient-to-br from-[#0796F5] via-[#562196] to-[#D34FAC] px-4 py-1.5 font-medium text-white shadow-lg transition-all duration-300  hover:scale-105 hover:shadow-xl"
                >
                  <span className="">Get your pass</span>
                </button> */}
                <div>
                  {/* <ThemeToggler /> */}
                  <LanguageSelect sticky={sticky} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
