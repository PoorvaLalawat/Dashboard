import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useMemo } from "react";
import {HomeIcon,UsersIcon} from "./icons"

const menuItems = [
  { id: 1, label: "Dashboard", icon: HomeIcon, link: "/" },
  { id: 2, label: "User Profile", icon: UsersIcon, link: "/users" },
  
];

const Sidebar = () => {
  const [toggleCollapse, setToggleCollapse] = useState(false);
  // const [isCollapsible, setIsCollapsible] = useState(false);

  const router = useRouter();

  const activeMenu = useMemo(
    () => menuItems.find((menu) => menu.link === router.pathname),
    [router.pathname] 
    // For every change in our path, router is added here and hence Use Memo is used to avoid unnecessary renderings
  );

  const wrapperClasses = classNames(
    "px-4 pt-8 pb-4 bg-black flex justify-between flex-col",
    {
      ["w-30"]: !toggleCollapse,
      ["w-20"]: toggleCollapse,
    }
  );

  

  const getNavItemClasses = (menu) => {
    return classNames(
      "flex items-center cursor-pointer hover:bg-blue-500 rounded w-full overflow-hidden whitespace-nowrap",
      {
        ["bg-dark"]: activeMenu.id === menu.id,
      }
    );
  };

  
 
  return (
    <div
      className={wrapperClasses}>

      <div className="flex flex-col">
        <div className="flex items-center justify-between relative">
          <div className="flex items-center pl-1 gap-4">
            <span
              className={classNames("mt-2 text-lg font-medium text-text text-white", {
              })}
            >
             METRONIC
            </span>
          </div>
         
        </div>
      
        <div key={id} className="flex flex-col items-start mt-24">
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