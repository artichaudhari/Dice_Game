import styled from "styled-components";

// Use consistent naming: "rollDice"
const RoleDice = ({ rollDice, currentDice }) => {
  return (
    <DiceContainer>
      <div className="dice" onClick={rollDice}>
        <img src={`/images/dice_${currentDice}.png`} alt={`Dice ${currentDice}`} />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  );
};

export default RoleDice;

// Styled Component
const DiceContainer = styled.div`
  .dice {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 5px;
    cursor: pointer;
  }

  p {
    font-size: 24px;
    font-weight: 500;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
  }
`;
