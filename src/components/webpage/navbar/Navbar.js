// // import React from 'react';
// import React, { useEffect, useState } from "react";
// import { BiMenu, BiPhoneCall, BiSolidSun, BiSolidMoon } from "react-icons/bi";
// import { FaCaretDown, FaFirstAid } from "react-icons/fa";
// import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
// import ResponsiveMenu from "./ResponsiveMenu";
// import { Link } from "react-router-dom";
// // import Header from './Header';

// const Navbar = () => {
//   const [theme, setTheme] = useState(
//     localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
//   );

//   const [showMenu, setshowMenu] = useState(false);

//   const element = document.documentElement;

//   useEffect(() => {
//     if (theme === "dark") {
//       element.classList.add("dark");
//       localStorage.setItem("theme", "dark");
//     } else {
//       element.classList.remove("dark");
//       localStorage.removeItem("theme");
//     }
//   }, [theme]);

//   const toggleMenu = () => {
//     setshowMenu(!showMenu);
//   };

//   return (
//     <>
//       <header
//         className="relative z-[99] bg-navbar bg-gradient-to-l  text-white shadow-lg aos-init aos-animate"
//         style={{ backgroundColor: "#0cb0c1" }}
//       >
//         <nav className="container flex items-center justify-between h-[70px] py-2">
//           {/* Logo section */}
//           <div className="text-2xl md:text-3xl">
//             <Link to="/">
//               {""}
//               LMS{" "}
             
//             </Link>
//           </div>
//           {/* Desktop menu section */}
//           <div className="hidden md:block">
//             <ul className="flex items-center gap-10">
//               <li className="group relative cursor-pointer">
//                 <Link to="/" className="flex items-center gap-[2px] h-[72px]">
//                   {" "}
//                   Home{" "}
//                 </Link>
//               </li>

//               <li className="group relative cursor-pointer">
//                 <Link to="/register">
//                 Register
//                 </Link>
//               </li>

//               <li className="group relative cursor-pointer">
//                 <Link to="/login">
//                 Login
//                 </Link>
//               </li>

          

           

          
//             </ul>
//           </div>

      
//         </nav>
//       </header>

//       {/* Mobile menu section*/}
//       <ResponsiveMenu showMenu={showMenu} />
//     </>
//   );
// };

// export default Navbar;


// import React from 'react';
import React, { useEffect, useState } from "react";
import { BiMenu, BiPhoneCall, BiSolidSun, BiSolidMoon } from "react-icons/bi";
import { FaCaretDown, FaFirstAid } from "react-icons/fa";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
import { Link } from "react-router-dom";
// import Header from './Header';

const Navbar = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const [showMenu, setshowMenu] = useState(false);

  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.removeItem("theme");
    }
  }, [theme]);

  const toggleMenu = () => {
    setshowMenu(!showMenu);
  };

  return (
    <>
      <header
        className="relative z-[99] bg-navbar bg-gradient-to-l  text-white shadow-lg aos-init aos-animate"
        style={{ backgroundColor: "#0cb0c1" }}
      >
        <nav className="container flex items-center justify-between h-[70px] py-2">
          {/* Logo section */}
          <div className="text-2xl md:text-3xl">
            <Link to="/">
              {""}
              LMS{" "}
            
            </Link>
          </div>
          {/* Desktop menu section */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-10">
              <li className="group relative cursor-pointer">
                <Link to="/" className="flex items-center gap-[2px] h-[72px]">
                  {" "}
                  Home{" "}
                </Link>
              </li>

                       

              <li className="group relative cursor-pointer">
                <Link
                  to="/register"
                  className="flex items-center gap-[2px] h-[72px]"
                >
                  {" "}
                  Register{" "}
                </Link>
              </li>


              <li className="group relative cursor-pointer">
                <Link
                  to="/login"
                  className="flex items-center gap-[2px] h-[72px]"
                >
                  {" "}
                  Login{" "}
                </Link>
              </li>


  
         
            </ul>
          </div>

          {/* Mobile menu header */}
          <div className="flex items-center gap-4 md:hidden">
            {theme === "dark" ? (
              <BiSolidSun
                className="text 2-xl"
                onClick={() => setTheme("light")}
              />
            ) : (
              <BiSolidSun
                className="text 2-xl"
                onClick={() => setTheme("dark")}
              />
            )}
            {showMenu ? (
              <HiMenuAlt1
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            )}
          </div>
        </nav>
      </header>

      {/* Mobile menu section*/}
      <ResponsiveMenu showMenu={showMenu} />
    </>
  );
};

export default Navbar;

