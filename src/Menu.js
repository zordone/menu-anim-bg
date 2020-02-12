import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { NavLink, withRouter } from 'react-router-dom';

const MenuBar = styled.div`
  position: fixed;
  width: 100%;
  padding-bottom;
  background: linear-gradient(0deg, transparent, #000C);
  user-select: none;
`;

const MenuNav = styled.nav`
  margin: 0 auto;
  width: max-content;
  position: relative;
`;

const MenuItemLink = styled(NavLink)`
  position: relative;
  text-transform: uppercase;
  color: white;
  text-decoration: none;
  line-height: 100%;
  display: inline-block;
  text-align: center;
  padding: 2rem 1rem;
  text-shadow: 1px 1px 2px #000, 2px 2px 5px #0008;
  opacity: 0.7;
  transition: opacity 200ms;  
  &.active,
  &:hover {
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
      console.warn('Active menu item not found:', location.pathname)
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
