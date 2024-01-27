import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Accordion, AccordionBody, AccordionHeader,AccordionItem} from 'reactstrap';
import SubMenuLink from './SubMenuLink';
import NavbarUtility from '../NavbarUtility';


const AccordionComponent=(props)=> {
  const{element ,isMobile,showSubMenu}=props;
  
  const [open, setOpen] = useState('1');

  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

 

  return (
    <div>
      <Accordion open={open} toggle={toggle}>
              <AccordionItem>
                <AccordionHeader targetId={element.id}><NavLink to={'#'} className={`mobile-header-nav-div`}>
                <span>{element.name}</span></NavLink> </AccordionHeader>
                <AccordionBody accordionId={element.id}>
                 
                  {element.children && showSubMenu[element.id] && <SubMenuLink element={element}
                    isMobile={isMobile} />}
                </AccordionBody>
              </AccordionItem>
            </Accordion>
    </div>
  );
}

export default AccordionComponent;