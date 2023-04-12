import styled from 'styled-components';
import backgroundImg from '../assets/background.jpg';

export const Wrapper = styled.div`
  background: url(${backgroundImg});
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;

  h1 {
    color: #fff;
    font-size: 2.5em;
    margin: 5px;
  }
`;

export const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px #ccc solid;
  margin: 0 20px;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  background: #fff;
  text-align: center;
  width: 70vw;

  @media (min-width: 668px) {
    max-width: 50vw;
  }

  @media (min-width: 1024px) {
    width: 35vw;
  }
`;

export const OptionContainer = styled.div`
  margin: 0 20px;
  line-height: 2em;
`;

export const SummaryContainer = styled.div`
  margin: 0 20px;
  line-height: 1em;
`;

export const Buttons = styled.button`
  border: none;
  margin: 15px;
  padding: 10px 25px;
  font-size: 18px;
  color: #fff;
  background: #73bcdf;
  border-radius: 20px;
`;

export const SummaryGif = styled.img`
  width: 50px;
`;
