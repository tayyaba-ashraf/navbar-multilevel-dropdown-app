// import React from 'react'

// import { NavLink } from 'react-router-dom'
// import logo from "../../assets/logo.png"
// import navLinksData from "../../data.json"
// import Navbar from './Navbar'

// const Header = () => {
//   return (
//       <div className='header-parent'>
//           <header className='header'>
//               <NavLink  to={'#'} className='logo-anchor'>
//                   <img className='logo' src={logo} alt='logo' />
//               </NavLink>
//               <Navbar navLinksData={navLinksData} />
//           </header>
//       </div>
//   )
// }

// export default Header



import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import logo from '../../assets/logo.png';
import navLinksData from '../../data.json';
import Navbar from './Navbar';
import HeaderUtility from '../HeaderUtility';
import OffCanvasComponent from './OffCanvasComponent';

const Header = () => {
    const { isOpen, handleOffCanvas, handleCloseOffCanvas,isMobileScreen } = HeaderUtility();

    // Determine mobile status based on screen size
    const isMobile = isMobileScreen();
  

    return (
        <>
            <div className="header-parent">
                <header className={'header'}>
                    <NavLink to={'#'} className='logo-anchor'>
                        <img className='logo' src={logo} alt='logo' />
                    </NavLink>
                    <Navbar navLinksData={navLinksData} />

                    <button className={`mobile-menu-toggle`} onClick={handleOffCanvas}>
                        <FaBars className='bar-icon' />
                    </button>
                          
                </header>
                {isOpen &&<OffCanvasComponent isOpen={isOpen} onHide={handleCloseOffCanvas}
                isMobile={isMobile}/>}
                
                
               
            </div>
            
            
        </>
    );
};

export default Header;


