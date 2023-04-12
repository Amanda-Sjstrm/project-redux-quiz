import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { quiz } from 'reducers/quiz';
import poopBrain from '../assets/poop-brain.gif';
import yeah from '../assets/yeah.gif';
import interesting from '../assets/interesting.gif';
import { Wrapper, QuestionContainer, SummaryContainer, SummaryGif, Buttons } from './GlobalStyles';
import happyJake from '../assets/happy-jake.gif';

export const Summary = () => {
  const question = useSelector((state) => state.quiz.questions);
  const answer = useSelector((store) => store.quiz.answers);
  const rightAnswers = answer.filter((item) => item.isCorrect === true);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <h1>
        <SummaryGif src={happyJake} alt="happy BMO" /> Summary{' '}
        <SummaryGif src={happyJake} alt="happy BMO" />
      </h1>
      <QuestionContainer>
        {/* This return a fitting gif depending on how many correct answers you got */}
        {(rightAnswers.length <= 2 && <img src={poopBrain} alt="Poop brain'" />)
          || (rightAnswers.length === 3 && (
            <img src={interesting} alt="jake saying 'interesting'" />
          ))
          || (rightAnswers.length >= 4 && <img src={yeah} alt="finn saying 'yeah'" />)}
        {/* This display number of correct answers and number of total answers */}
        You got {rightAnswers.length} out of {question.length} correct answers!
        <Buttons
          type="button"
          onClick={() => {
            dispatch(quiz.actions.restart());
          }}>
          {' '}
          Start over{' '}
        </Buttons>
        {answer.map((answerr) => {
          //   This returns the chosen answer and the correct answer to every question
          return (
            <SummaryContainer key={answerr.questionId}>
              <p>
                <b>Question: {answerr.question.id}</b>
              </p>
              <span>
                <p>Right answer: {answerr.question.options[answerr.question.correctAnswerIndex]}</p>
              </span>
              <p>Your answer: {answerr.answer}</p>
            </SummaryContainer>
          );
        })}
      </QuestionContainer>
    </Wrapper>
  );
};
