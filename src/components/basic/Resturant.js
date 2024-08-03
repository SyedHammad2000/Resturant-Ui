import React, { useState } from "react";
import MenuCard from "./MenuCard";
import {Menu} from "./Menuapi";
import NavBar from "./NavBar";
import "./style.css";
const Resturant = () => {
  
  const Uniquelist = [
    ...new Set(
      Menu.map((curElem) => {
        return curElem.category;
      })
    ),
    "All",
  ]
  console.log(Uniquelist);

  const [menuData, setMenuData] = useState(Menu);
  const [menuList, setMenuList] = useState(Uniquelist);

  const filteritem = (category) => {
    if (category === "All") {
      setMenuData(Menu);
      setMenuList(Uniquelist);
      return;
    }

    const updatedlist = Menu.filter((curElem) => {
      return curElem.category === category;
    });

    setMenuData(updatedlist);

  };
  return (
    <>
      <NavBar filteritem={filteritem} menuList={menuList}></NavBar>
      <MenuCard menuData={menuData} />
    </>
  );
};

export default Resturant;
