
// import React, { useState } from 'react';
// import HeaderNavbarLink from './HeaderNavbarLink';

// const Navbar = ({ navLinksData }) => {
  
//   return (
//     <nav>
//      <HeaderNavbarLink navLinksData={navLinksData} />
//     </nav>
//   );
// };

// export default Navbar;

// Navbar.js

import React from 'react';
import HeaderNavbarLink from './HeaderNavbarLink';

const Navbar = ({ navLinksData ,isMobile}) => {
  return (
    <nav>
      <HeaderNavbarLink navLinksData={navLinksData} isMobile={isMobile}/>
    </nav>
  );
};

export default Navbar;



