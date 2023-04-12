import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Results from './Results';
import { CurrentQuestion } from './CurrentQuestion';

const Main = () => {
  const [score, setScore] = useState(0);
  const showResults = useSelector((store) => store.quiz.quizOver);

  // 'store' is the Redux store. 'quiz' is to specify what slice of the store we
  // want to target.

  return (
    <>
      {!showResults && <CurrentQuestion score={score} setScore={setScore} />}
      {showResults && <Results score={score} />}
    </>
  );
};

export default Main;
