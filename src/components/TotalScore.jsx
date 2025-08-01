import React from 'react';
import styled from 'styled-components';

const TotalScore = ({ score }) => {
  return (
    <ScoreContainer>
      <h1>{score}</h1>
      <p>Total Score</p>
    </ScoreContainer>
  );
};

export default TotalScore;


const ScoreContainer = styled.div`
  max-width: 200px;
  text-align: center;

  h1 {
    font-size: 100px;
    line-height: 120px;
    font-weight: 700;
    margin: 0;
  }

  p {
    font-size: 28px;
    font-weight: 700;
    margin-top: 10px;
  }
`;
