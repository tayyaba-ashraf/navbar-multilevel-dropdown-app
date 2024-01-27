// import React from 'react'
// import NavbarUtility from '../NavbarUtility';
// import GrandChildMenu from './GrandChildMenu';
// import { NavLink } from 'react-router-dom';

// const SubMenuLink = (props) => {
//   const {element}=props;
//   const {showSubMenu,subMenuHandler}=NavbarUtility();
//   return (
//     <ul className='header-nav-ul'>
//       {element.children.map((childElement) => (
//         <li
//           key={childElement.id} className={`sub-menu-options`}
//           onMouseEnter={() => subMenuHandler(childElement.id, true)}
//           onMouseLeave={() => subMenuHandler(childElement.id, false)}
//         >
//           <NavLink to={"#"} className='sub-menu-div'> <span>{childElement.name}</span> <span className='arrow'>--&gt;</span></NavLink>
//           {childElement.children && showSubMenu[childElement.id] && ( 
//           <GrandChildMenu childElement={childElement} />
//           )}
//         </li>
//       ))}
//     </ul>
//   )
// }

// export default SubMenuLink

// SubMenuLink.js

import React from 'react';
import NavbarUtility from '../NavbarUtility';
import GrandChildMenu from './GrandChildMenu';
import { NavLink } from 'react-router-dom';

const SubMenuLink = ({ element, isMobile }) => {
  const { showSubMenu, subMenuHandler } = NavbarUtility();
  console.log("-----------",isMobile)

  return (
    <ul className={`${isMobile ?"mobile-header-nav-ul":"header-nav-ul"} `}>
      {element.children.map((childElement) => (
        <li
          key={childElement.id}
          className={`${isMobile ?"mobile-sub-menu-options":"sub-menu-options"} `}
          onMouseEnter={() => subMenuHandler(childElement.id, true)}
          onMouseLeave={() => subMenuHandler(childElement.id, false)}
        >
          <NavLink to={'#'} className={`${isMobile ?"mobile-sub-menu-div":"sub-menu-div"} `}>
            <span>{childElement.name}</span>
            <span className="arrow">--&gt;</span>
          </NavLink>
          {childElement.children && showSubMenu[childElement.id] && <GrandChildMenu childElement={childElement} isMobile={isMobile} />}
        </li>
      ))}
    </ul>
  );
};

export default SubMenuLink;

