import React from 'react';

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
      <button
        onClick={() => handleOkayButtonClick(questionId, optionIndex)}
        type="submit"
        disabled={questionAnswered || !answer}>
        OK
      </button>

      <button type="button" onClick={() => handleNextButton()} disabled={!questionAnswered}>
        {' '}
        Next
      </button>
    </div>
  );
};
