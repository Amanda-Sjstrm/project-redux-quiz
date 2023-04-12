import React from 'react';
import { Buttons } from './GlobalStyles';

export const NavButtons = ({
  questionAnswered,
  handleOkayButtonClick,
  handleNextButton,
  questionId,
  optionIndex,
  answer
}) => {
  /* For the OK button, you can only click on it if an answer option is selected.
      For the Nästa button, you can only click on it if the OK button is clicked. */
  return (
    <div>
      <Buttons
        onClick={() => handleOkayButtonClick(questionId, optionIndex)}
        type="submit"
        disabled={questionAnswered || !answer}>
        OK
      </Buttons>

      <Buttons type="button" onClick={() => handleNextButton()} disabled={!questionAnswered}>
        {' '}
        Next
      </Buttons>
    </div>
  );
};
