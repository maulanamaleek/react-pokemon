import React from 'react';
import styled from '@emotion/styled';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaBars, FaToolbox } from 'react-icons/fa';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navigateToList = () => navigate('/');
  const navigateToCollection = () => navigate('/collection');
  return (
    <FixedNavbar>
      <NavigationButton
        className={location.pathname === '/' ? 'active' : ''}
        type="button"
        onClick={navigateToList}
      >
        <FaBars size={24} />
        <span>Pokemon List</span>
      </NavigationButton>
      <NavigationButton
        className={location.pathname === '/collection' ? 'active' : ''}
        type="button"
        onClick={navigateToCollection}
      >
        <FaToolbox size={24} />
        <span>Collection</span>
      </NavigationButton>
    </FixedNavbar>
  );
};

const FixedNavbar = styled.nav`
  position: fixed;
  bottom: 0px;
  left: 0px;
  height: 60px;
  background-color: #52b69a;
  box-shadow: 0px -2px 20px rgba(0, 0, 0, 0.07);
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media min-width(700px) {
    width: 600px;
  }
`;

const NavigationButton = styled.button`
  background-color: transparent;
  color: white;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  gap: 5px;
  align-items: center;
  outline: 0;
  border: 0;
  font-weight: 600;

  &.active {
    background-color: #34a0a4;
  }
`;

export default Navbar;
