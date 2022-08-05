import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useMemo } from "react";
import {CollapsIcon,HomeIcon,UsersIcon} from "./icons"

const menuItems = [
  { id: 1, label: "Dashboard", icon: HomeIcon, link: "/" },
  { id: 2, label: "User Profile", icon: UsersIcon, link: "/users" },
  
];

const Sidebar = () => {
  const [toggleCollapse, setToggleCollapse] = useState(false);
  const [isCollapsible, setIsCollapsible] = useState(false);

  const router = useRouter();

  const activeMenu = useMemo(
    () => menuItems.find((menu) => menu.link === router.pathname),
    [router.pathname] 
    // For every change in our path, router is added here and hence Use Memo is used to avoid unnecessary renderings
  );

  const wrapperClasses = classNames(
    "px-4 pt-8 pb-4 bg-black flex justify-between flex-col",
    {
      ["w-60"]: !toggleCollapse,
      ["w-20"]: toggleCollapse,
    }
  );

  const collapseIconClasses = classNames(
    "p-4 rounded absolute right-0",
    {
      "rotate-180": toggleCollapse,

    }
  );

  const getNavItemClasses = (menu) => {
    return classNames(
      "flex items-center cursor-pointer hover:bg-sky-500 rounded w-full overflow-hidden whitespace-nowrap",
      {
        ["bg-dark"]: activeMenu.id === menu.id,
      }
    );
  };

  const onMouseOver = () => {
    setIsCollapsible(!isCollapsible);
  };

  const handleSidebarToggle = () => {
    setToggleCollapse(!toggleCollapse);
  };

  return (
    <div
      className={wrapperClasses}
      onMouseEnter={onMouseOver}
      onMouseLeave={onMouseOver}
      style={{ transition: "width 300ms cubic-bezier(0.2, 0, 0, 1) 0s" }}>

      <div className="flex flex-col">
        <div className="flex items-center justify-between relative">
          <div className="flex items-center pl-1 gap-4">
            <span
              className={classNames("mt-2 text-lg font-medium text-text text-white", {
                hidden: toggleCollapse,
              })}
            >
             METRONIC
            </span>
          </div>
          {isCollapsible && (
            <button
              className={collapseIconClasses}
              onClick={handleSidebarToggle}
            >
              <CollapsIcon />
            </button>
          )}
        </div>
      
        <div className="flex flex-col items-start mt-24">
          {menuItems.map(({ icon: Icon, ...menu }) => {
            const classes = getNavItemClasses(menu);
            return (
              <div className={classes}>
                <Link href={menu.link}>
                  <a className="flex py-4 px-3 items-center w-full h-full">
                    <div style={{ width: "2.5rem" }}>
                      <Icon />
                    </div>
                    {!toggleCollapse && (         
                    //  When the sidebar is not collapsed, display menu.labels defined above
                     <span
                        className={classNames(
                          "text-md font-medium text-text text-white"
                        )}
                      >
                        {menu.label}
                      </span>
                    )}
                  </a>
                </Link>
              
              </div>
            );
          })}
        </div>
      </div>
      </div>
    
  
    
    

      
    
  );
};

export default Sidebar;