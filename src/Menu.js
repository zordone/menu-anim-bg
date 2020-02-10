import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { NavLink, withRouter } from 'react-router-dom';

const MenuBar = styled.div`
  background: linear-gradient(0deg, transparent, #0004);
  user-select: none;
`;

const MenuNav = styled.nav`
  margin: 0 auto;
  width: max-content;
  position: relative;
`;

const MenuItemLink = styled(NavLink)`
  position: relative;
  font-size: 15px;
  text-transform: uppercase;
  color: white;
  text-decoration: none;
  line-height: 100%;
  display: inline-block;
  text-align: center;
  padding: 2rem 1rem;
  text-shadow: 1px 1px 3px black;
  opacity: 0.5;
  transition: opacity 200ms;  
  &.active {
    opacity: 1;
  }
`;

const MenuItemBg = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 0;
  background: #1a8dbc;
  pointer-events: none;  
  transition: all 300ms ease;
`;

const Menu = ({ items, location }) => {
  const itemsRef = useRef([]);
  const bgRef = useRef(null);

  useEffect(() => {
    itemsRef.current = itemsRef.current.slice(0, items.length);
  }, [items]);

  useEffect(() => {
    const activeIndex = items.findIndex(item => item.path === location.pathname);
    if (activeIndex === -1) {
      console.warn('activeIndex = -1', items, location.pathname)
      return;
    }
    const activeItem = itemsRef.current[activeIndex];
    const { offsetLeft, offsetWidth } = activeItem;
    const bgStyle = bgRef.current.style;
    bgStyle.left = `${offsetLeft}px`;
    bgStyle.width = `${offsetWidth}px`;    
  }, [items, location]);

  return (
    <MenuBar>
      <MenuNav>
        <MenuItemBg ref={bgRef} />
        {items.map(({ id, title, path }, index) => 
          <MenuItemLink key={id} to={path} exact ref={el => itemsRef.current[index] = el}>
            {title}
          </MenuItemLink>
        )}
      </MenuNav>
    </MenuBar>
  );
}

export default withRouter(Menu);
