import React from 'react'
import { NavLink } from 'react-router-dom';

const GrandChildMenu = (props) => {
    const { childElement ,isMobile} = props;
    return (
        <ul className={`${isMobile ? "mobile-sub-menu-ul":"sub-menu-ul"}`}>
            {childElement.children.map((grandChildElement) => (
                <li key={grandChildElement.id} className={`${isMobile ?"mobile-grand-child-link":"grand-child-link"}`}>
                    <NavLink to={'#'}> <span>{grandChildElement.name}</span></NavLink>
                </li>
            ))}
        </ul>
    )
}

export default GrandChildMenu
