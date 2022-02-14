import styled from '@emotion/styled';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const FloatingNavbar = styled.nav`
  position: fixed;
  bottom: 60px;
  left: 50%;
  transform: translateX(-50%);
  height: 60px;
  border-radius: 30px;
  background-color: white;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.07);
  width: 90vw;
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
