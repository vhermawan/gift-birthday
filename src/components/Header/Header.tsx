import { LIST_MENU } from "@/common/constant";
import { List, Moon, Sun } from "@phosphor-icons/react"
import clsx from "clsx";
import { Fragment, useEffect, useState } from "react";
import { Link } from "react-scroll";

const Header = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const [isScroll, setIsScroll] = useState(false);

  const handleToggle = (e:any) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const changeBackground = () => {
    console.log(window.scrollY)
    if (window.scrollY >= 66) {
      setIsScroll(true)
    } else {
      setIsScroll(false)
    }
  }

  useEffect(() => {
    changeBackground()
    window.addEventListener("scroll", changeBackground)
  })

   useEffect(() => {
    localStorage.setItem("theme", theme || 'light');
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html")?.setAttribute("data-theme", localTheme || '');
  }, [theme]);

  return (
    <nav className={clsx("navbar sticky top-0 px-4 md:px-6 font-jakarta", {
      'bg-transparent': !isScroll,
      'bg-white dark:bg-base-100': isScroll
    })}>
      <div className="navbar-start">
        <h1 className="text-xl font-semibold">Tenten 🫶🏼</h1>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {LIST_MENU.map((menu) => {
            return (
              <Fragment key={menu.id}>
                <Link 
                  to={menu.id}
                  spy={true} 
                  smooth={true} 
                  className="px-3 cursor-pointer"
                >
                  {menu.menu}
                </Link>
              </Fragment>
            )
          })}
        </ul>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <List size={32}/>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content py-3 gap-y-2 mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {LIST_MENU.map((menu) => {
              return (
                <Fragment key={menu.id}>
                  <Link 
                    to={menu.id}
                    spy={true} 
                    smooth={true} 
                    className="px-3 cursor-pointer"
                  >
                    {menu.menu}
                  </Link>
                </Fragment>
              )
            })}
          </ul>
        </div>

        <label className="swap swap-rotate hidden md:flex">
          <input 
            type="checkbox" 
            className="theme-controller" 
            value="synthwave" 
            onChange={handleToggle}
            checked={theme === "light" ? false : true}
          />
          <Sun className="swap-on fill-current w-6 h-6" />
          <Moon className="swap-off fill-current w-6 h-6" />
        </label>
      </div>
    </nav>
  )
}

export {Header}