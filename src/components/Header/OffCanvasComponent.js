import React from 'react';
import { Offcanvas, OffcanvasHeader,OffcanvasBody } from 'reactstrap';
import navLinksData from '../../data.json';
import Navbar from './Navbar';

const OffCanvasComponent = ({ isOpen, onHide,isMobile }) => {
  return (
    <>
      <Offcanvas isOpen={isOpen} toggle={onHide}  backdrop={true} className={`OffCanvasHide OffCanvas ${isOpen ? 'open' : ''}`}>
        
        <OffcanvasBody className='OffCanvasBody'>
          <Navbar navLinksData={navLinksData} isMobile={isMobile}/>
        </OffcanvasBody>
      </Offcanvas>
    </>
  );
};
export default OffCanvasComponent;
