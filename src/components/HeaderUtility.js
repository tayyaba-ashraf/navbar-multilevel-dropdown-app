import React, { useState } from 'react'

const HeaderUtility = () => {
    const [isOpen,setisOpen]=useState(false);
    const handleOffCanvas = () => {
      setisOpen((prevOpen) => !prevOpen); // Toggle the state
  };
      
      const handleCloseOffCanvas = () => {
        setisOpen(false);
        
      };
      const isMobileScreen = () => {
        return window.innerWidth <= 600; 
    };
  return  {isOpen,handleOffCanvas,handleCloseOffCanvas,isMobileScreen}
}

export default HeaderUtility