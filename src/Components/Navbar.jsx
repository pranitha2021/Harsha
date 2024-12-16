import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  position: fixed;
  width: 100%;
  top: 0;
  background: #1f2833;
  z-index: 1000;

  .logo {
    font-size: 1.5rem;
    color: #66fcf1;
    font-weight: bold;
  }

  ul {
    display: flex;
    list-style: none;

    li {
      margin: 0 1rem;

      a {
        font-size: 1rem;

        &:hover {
          color: #66fcf1;
        }
      }
    }
  }
`;

const Navbar = () => (
  <NavbarContainer>
    <div className="logo">MyPortfolio</div>
    <ul>
      <li><a href="#hero">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#skills">Skills</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </NavbarContainer>
);

export default Navbar;
