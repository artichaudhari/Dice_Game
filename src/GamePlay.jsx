import React, { useState } from 'react';
import TotalScore from './components/TotalScore';
import NumberSelector from './components/NumberSelector';
import styled from 'styled-components';
import RoleDice from './components/RoleDice';
import { Button, OutlineButton } from './styled/Button';
import Rules from './components/Rules';

const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false)

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const rollDice = () => {
    if (!selectedNumber) {
      setError("You have not selected any number");
      return;
    }

    setError(""); 

    const randomNumber = generateRandomNumber(1, 6);
    setCurrentDice(randomNumber);

    if (selectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }

    setSelectedNumber(null);
  };

  const resetScore = () => {
    setScore(0);
  };

  return (
    <MainContainer>
      <div className="top-section">
        <TotalScore score={score} />
        <NumberSelector
          error={error}
          setError={setError}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>

      <RoleDice currentDice={currentDice} rollDice={rollDice} />

      <div className="btns">
        <OutlineButton onClick={resetScore}>Reset</OutlineButton>
        <Button
        onClick={() => setShowRules((prev) => !prev)}
        >{showRules ? "Hide" : "Show"} Rules</Button>
      </div>
      {showRules && <Rules></Rules>}


    </MainContainer>
  );
};

export default GamePlay;

// Styled Components
const MainContainer = styled.main`
  .top-section {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }

  .btns {
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    margin-left: 520px;
  }
`;
