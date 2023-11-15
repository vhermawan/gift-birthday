import { List, Moon, Sun } from "@phosphor-icons/react"
import { useEffect, useState } from "react";

const Header = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const handleToggle = (e:any) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

   useEffect(() => {
    localStorage.setItem("theme", theme || 'light');
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html")?.setAttribute("data-theme", localTheme || '');
  }, [theme]);

  return (
    <nav className="navbar bg-base-100 px-4 md:px-6 font-jakarta">
      <div className="navbar-start">
        <h1 className="text-xl font-semibold">Tenten 🫶🏼</h1>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><a>Prolog</a></li>
          <li><a>Moments</a></li>
          <li><a>Wish</a></li>
          <li><a>Songs</a></li>
          <li><a>Epilogue</a></li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <List size={32}/>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Item 1</a></li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
              </ul>
            </li>
            <li><a>Item 3</a></li>
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