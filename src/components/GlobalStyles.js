import styled from 'styled-components';
import background from '../assets/background.jpg';

export const Background = styled.div`
  background-image: url(${background});
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px #ccc solid;
  margin: 0 20px;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  background: #eaeaea;

  @media (min-width: 668px) {
    max-width: 32vw;
    position: relative;
    left: 31vw;
  }
`;
