import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import headerImg from '../assets/header-image.png';
import { Wrapper } from './GlobalStyles';
import bmo from '../assets/bmo.gif';

const HeaderImage = styled.img`
  width: 60vw;
  display: block;
  margin: 0 auto;
  @media (min-width: 668px) {
    width: 50vw;
    max-width: 600px;
  }
  @media (min-width: 1024px) {
  }
`;

const ButtonAndBmo = styled.div`
  display: flex;
  align-items: center;
`;

const BmoImg = styled.img`
  width: 60px;
  margin: 10px;
`;

const Button = styled.button`
  border: none;
  background: #558e7f;
  font-size: 18px;
  color: #fff;
  padding: 8px 16px;
  border-radius: 20px;
  cursor: pointer;
`;

export const OpeningScreen = () => {
  return (
    <>
      <HeaderImage className="header-image" src={headerImg} alt="header with Adventure Time text" />
      <Wrapper>
        <p>This is the quiz!</p>
        <p>Good luck and have fun!</p>
        <ButtonAndBmo>
          <NavLink to="/quiz">
            <Button type="button">Lets go!</Button>
          </NavLink>
          <BmoImg src={bmo} alt="bmo gif" />
        </ButtonAndBmo>
      </Wrapper>
    </>
  );
};
