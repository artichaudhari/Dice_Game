

import styled from "styled-components"
import { Button } from "../styled/Button";

const StartGame = ({toggle}) => {
  return (
    <Container>
      <div>
        <img src="/images/dices 1.png"></img>
      </div>
      <div className="content">
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Play Now</Button>
        {/* <Button onClick={toggle}>Play Now</Button> */}
      </div>
    </Container>
  )
}





const Container = styled.div`
max-width:1180px;
display: flex;
height: 100vh;
align-items: center;
font-size: 50px;
gap:20px;
margin-bottom: 0px;
margin-left: 100px;
margin-bottom: 0px;
`;
export default StartGame
