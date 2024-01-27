// import React from 'react'
// import NavbarUtility from '../NavbarUtility'
// import SubMenuLink from './SubMenuLink';
// import { NavLink } from 'react-router-dom';

// const HeaderNavbarLink = (props) => {

//   const {navLinksData}=props;
//   const {showSubMenu,subMenuHandler}=NavbarUtility();
//   return (
//     <ul className='main-nav'>
//       {navLinksData.map((element) => (
//         <li
//           key={element.id} className='header-nav-options '
//           onMouseEnter={() => subMenuHandler(element.id, true)}
//           onMouseLeave={() => subMenuHandler(element.id, false)}
//         >
//           <NavLink to={"#"} className='header-nav-div'> <span>{element.name}</span> </NavLink>
//           {element.children && showSubMenu[element.id] && (<SubMenuLink element={element} />)}
//         </li>
//       ))}
//     </ul>
//   )
// }

// export default HeaderNavbarLink


// HeaderNavbarLink.js

import React from 'react';
import NavbarUtility from '../NavbarUtility';
import SubMenuLink from './SubMenuLink';
import { NavLink } from 'react-router-dom';

const HeaderNavbarLink = ({ navLinksData, isMobile }) => {
  const { showSubMenu, subMenuHandler } = NavbarUtility();

  return (
    <ul className={`${isMobile ? "mobile-nav" :"main-nav"}`}>
      {navLinksData.map((element) => (
        <li
          key={element.id}
          className={`${isMobile ?"mobile-header-nav-options":"header-nav-options"}`}
          onMouseEnter={() => subMenuHandler(element.id, true)}
          onMouseLeave={() => subMenuHandler(element.id, false)}
        >
          <NavLink to={'#'} className={`${isMobile ?"mobile-header-nav-div":"header-nav-div"} `}>
            <span>{element.name}</span>
          </NavLink>
          {element.children && showSubMenu[element.id] && <SubMenuLink element={element} 
           isMobile={isMobile} />}
        </li>
      ))}
    </ul>
  );
};

export default HeaderNavbarLink;



// import React, { useState } from 'react';
// import NavbarUtility from '../NavbarUtility';
// import SubMenuLink from './SubMenuLink';
// import { NavLink } from 'react-router-dom';
// import { Accordion, AccordionBody, AccordionHeader,AccordionItem} from 'reactstrap';


// const HeaderNavbarLink = ({ navLinksData, isMobile }) => {
//   const { showSubMenu, subMenuHandler ,open,toggle} = NavbarUtility();
  

//   return (
//     <ul className={`${isMobile ? "mobile-nav" : "main-nav"}`}>
//       {navLinksData.map((element) => (
//         <li
//           key={element.id}
//           className={`${isMobile ? "mobile-header-nav-options" : "header-nav-options"}`}
//           onMouseEnter={() => subMenuHandler(element.id, true)}
//           onMouseLeave={() => subMenuHandler(element.id, false)}
//         >
//           {isMobile ? (
//              <>
             
//             <Accordion open={open} toggle={toggle}>
//               <AccordionItem>
//                 <AccordionHeader targetId={element.id}><NavLink to={'#'} className={`mobile-header-nav-div`}>
//                 <span>{element.name}</span></NavLink> </AccordionHeader>
//                 <AccordionBody accordionId={element.id}>
                  
//                   {element.children && showSubMenu[element.id] && <SubMenuLink element={element}
//                     isMobile={isMobile} />} 
                    
//                 </AccordionBody>
//               </AccordionItem>
//             </Accordion>
//             </>
//          ) : (
  
//             <>
//             <NavLink to={'#'} className={`header-nav-div`}>
//               <span>{element.name}</span></NavLink>
//               {element.children && showSubMenu[element.id] && <SubMenuLink element={element} 
//             isMobile={isMobile} />}
//             </>
            
//             )
            
//         } 
            
            
          
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default HeaderNavbarLink;
// import React from 'react';
// import NavbarUtility from '../NavbarUtility';
// import SubMenuLink from './SubMenuLink';
// import { NavLink } from 'react-router-dom';
// import { Accordion, Card, Button } from 'react-bootstrap'; // Assuming you're using Bootstrap for styling

// const HeaderNavbarLink = ({ navLinksData, isMobile }) => {
//   const { showSubMenu, subMenuHandler } = NavbarUtility();

//   return (
//     <ul className={`${isMobile ? 'mobile-nav' : 'main-nav'}`}>
//       {navLinksData.map((element) => (
//         <li
//           key={element.id}
//           className={`${isMobile ? 'mobile-header-nav-options' : 'header-nav-options'}`}
//         >
//           {isMobile ? (
//             <Accordion>
//               <Card>
//                 <Card.Header>
//                   <Accordion.Toggle as={Button} variant="link" eventKey={element.id}>
//                     {element.name}
//                   </Accordion.Toggle>
//                 </Card.Header>
//                 <Accordion.Collapse eventKey={element.id}>
//                   <Card.Body>
//                     {element.children && showSubMenu[element.id] && (
//                       <SubMenuLink element={element} isMobile={isMobile} />
//                     )}
//                   </Card.Body>
//                 </Accordion.Collapse>
//               </Card>
//             </Accordion>
//           ) : (
//             <>
//               <NavLink to={'#'} className={`header-nav-div`}>
//                 <span>{element.name}</span>
//               </NavLink>
//               {element.children && showSubMenu[element.id] && <SubMenuLink element={element} isMobile={isMobile} />}
//             </>
//           )}
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default HeaderNavbarLink;









