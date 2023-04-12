import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { quiz } from 'reducers/quiz';

export const Summary = () => {
  const question = useSelector((state) => state.quiz.questions);
  const answer = useSelector((store) => store.quiz.answers);
  const rightAnswers = answer.filter((item) => item.isCorrect === true);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Summary</h1>
      {/* This return a fitting gif depending on how many correct answers you got */}
      {(rightAnswers.length <= 2 && <p>This was bad</p>)
        || (rightAnswers.length === 3 && <p>You did alright</p>)
        || (rightAnswers.length >= 4 && <p>Good job!</p>)}
      <div>
        {/* This display number of correct answers and number of total answers */}
        You got {rightAnswers.length} out of {question.length} correct answers!
      </div>
      <button
        type="button"
        onClick={() => {
          dispatch(quiz.actions.restart());
        }}>
        {' '}
        Start over{' '}
      </button>
      <div>
        {answer.map((answerr) => {
          //   This returns the chosen answer and the correct answer to every question
          return (
            <div key={answerr.questionId}>
              <p>
                <b>Question: {answerr.question.id}</b>
              </p>
              <span>
                <p>Right answer: {answerr.question.options[answerr.question.correctAnswerIndex]}</p>
              </span>
              <p>Your answer: {answerr.answer}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
