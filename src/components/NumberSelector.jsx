import { useState } from "react";
import styled from "styled-components"


const NumberSelector = ({setError, error, selectedNumber, setSelectedNumber}) => {
    const arrNumber = [1,2,3,4,5,6];

    const numberSelectorHandler = (value) => {
        setSelectedNumber(value)
        setError("")

    }
    
    console.log(selectedNumber);
  return (
    <NumberSelectorContainer>
        <p className="error">{error}</p>
        <div className="flex">
            {arrNumber.map((value, i)=>(
            <Box 
            isSelected={value== selectedNumber}
            key={i} 
            onClick={()=>numberSelectorHandler(value)}>
                {value}
                </Box>
        ))}
        
        
        </div>
        <p>Select Number</p>
              
    </NumberSelectorContainer>
  )
}

export default NumberSelector

const NumberSelectorContainer =styled.div`

display: flex;
align-items: center;
flex-direction: column;
.flex{
    padding-top: 30px;
    display: flex;
    gap:20px;
    place-items: center;
}
p{
    font-size: 24px;
    font-weight: 700px;
}
.error{
    color: red;
}
    
`;

const Box =styled.div`
    height: 72px;
    width: 72px;
    border: 1px solid black;
    font-weight: 700;
    font-size: 24px;
    display: grid;
    /* align-items: center;
    justify-content: center; */
    place-items: center;
    background-color: ${(props) => (props.isSelected ? "black" :"white")};
    color: ${(props) => (props.isSelected ? "white" :"black")};

`
