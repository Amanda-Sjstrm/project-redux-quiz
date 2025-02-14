import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { quiz } from 'reducers/quiz';
import { QuestionContainer, OptionContainer, Wrapper } from './GlobalStyles';
import { Summary } from './Summary';
import { Form } from './Form';
import { NavButtons } from './NavButtons';

export const CurrentQuestion = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex]);

  const dispatch = useDispatch();
  const quizOver = useSelector((state) => state.quiz.quizOver);

  const [answer, setAnswer] = useState(null);
  const [optionIndex, setOptionIndex] = useState(0);
  const [questionAnswered, setQuestionAnswered] = useState(false);

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>;
  }

  const handleOkayButtonClick = (questionId, answerIndex) => {
    dispatch(quiz.actions.submitAnswer({ questionId, answerIndex }));
    setQuestionAnswered(true);
  };

  const handleNextButton = () => {
    dispatch(quiz.actions.goToNextQuestion());
    setQuestionAnswered(false);
    setAnswer('');
  };

  return (
    <section>
      {quizOver ? (
        <Summary />
      ) : (
        <Wrapper>
          <QuestionContainer>
            <h2> Question {question.id} of 5 </h2>
            <h3> {question.questionText} </h3>

            <OptionContainer>
              {question.options.map((option, index) => {
                return (
                  <Form
                    setAnswer={setAnswer}
                    setOptionIndex={setOptionIndex}
                    answer={answer}
                    questionAnswered={questionAnswered}
                    option={option}
                    index={index}
                    answerIndex={optionIndex}
                    correctIndex={question.correctAnswerIndex} />
                );
              })}
            </OptionContainer>

            <NavButtons
              questionAnswered={questionAnswered}
              handleOkayButtonClick={handleOkayButtonClick}
              questionId={question.id}
              optionIndex={optionIndex}
              handleNextButton={handleNextButton}
              answer={answer} />
          </QuestionContainer>
        </Wrapper>
      )}
    </section>
  );
};
