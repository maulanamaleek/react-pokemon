import styled from '@emotion/styled';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const FloatingNavbar = styled.nav`
  position: fixed;
  bottom: 0px;
  left: 0px;
  height: 60px;
  background-color: white;
  box-shadow: 0px -2px 20px rgba(0, 0, 0, 0.07);
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media min-width(700px) {
    width: 600px;
  }
`;

const Navbar = () => {
  const navigate = useNavigate();

  const navigateToList = () => navigate('/');
  const navigateToCollection = () => navigate('/collection');
  return (
    <FloatingNavbar>
      <button type="button" onClick={navigateToList}>List</button>
      <button type="button" onClick={navigateToCollection}>Collection</button>
    </FloatingNavbar>
  );
};

export default Navbar;
