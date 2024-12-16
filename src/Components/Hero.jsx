import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.section`
  height: 100vh;
  background: url('https://source.unsplash.com/1600x900/?technology') center/cover no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 5%;
  color: #ffffff;

  h1 {
    font-size: 4rem;
    color: #66fcf1;
  }

  p {
    font-size: 1.2rem;
    margin: 1rem 0;
  }

  button {
    padding: 0.75rem 2rem;
    background: #66fcf1;
    color: #0b0c10;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background: #45a29e;
    }
  }
`;

const Hero = () => (
  <HeroContainer id="hero">
    <h1>Hello, I'm Harshavardhan</h1>
    <p>I create modern and responsive web experiences.</p>
    <button>Contact Me</button>
  </HeroContainer>
);

export default Hero;
