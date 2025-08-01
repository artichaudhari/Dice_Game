import React from 'react';
import styled from 'styled-components';

const Rules = () => {
  return (
    <RulesContainer>
      <h2>How to play dice game</h2>
      <div className='text'>
        <p>Select any number</p>
        <p>Click on dice image</p>
        <p>
          After clicking the dice, if your selected number matches the dice number,
          you will get points equal to the dice.
        </p>
        <p>If your guess is wrong, 2 points will be deducted.</p>
      </div>
    </RulesContainer>
  );
};

export default Rules;

// Styled Component
const RulesContainer = styled.div`
max-width: 900px;
margin:0 auto;
  background-color: #b5a0b1;
  padding: 20px;
  border-radius: 8px;
  margin-top: 10px;
  border: 10px;

  h2 {
    font-size: 24px;
    margin-bottom: 16px;
  }

  .text {
    margin-top: 12px;
    line-height: 1.5;
  }

  p {
    margin: 6px 0;
    font-size: 16px;
    font-weight: 500;
  }
`;
