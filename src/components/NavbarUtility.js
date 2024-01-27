import React, { useState } from 'react'

const NavbarUtility = () => {
    const [showSubMenu, setShowSubMenu] = useState([]);
   


  const subMenuHandler = (subMenuId, isMouseEnter) => {
    setShowSubMenu((prev) => {
      const updatedSubMenu = [...prev];
      updatedSubMenu[subMenuId] = isMouseEnter;
      return updatedSubMenu;
    });
  };

  
  return {showSubMenu,subMenuHandler};
}

export default NavbarUtility
