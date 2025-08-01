import styled from "styled-components";

export const Button= styled.button`
background-color:black;
color:white;
padding: 20px 20px;
border-radius: 5px;
min-width: 220px;
border: none;
margin: 0 auto;
margin-top: 0px;
margin-left: 120px;
font-size: 16px;
cursor: pointer;
transition: 0.4s background ease-in;

&:hover{
    background-color: #d5d7e21f;
    color: black;
    border: 2px solid black;
    transition: 0.3s background ease-in;
}

`;

export const OutlineButton= styled(Button)`
background-color: white;
color: black;
border: 1px solid transparent;
border: 2px solid black;

&:hover{
    background-color: #000000ff;
    color: white;
    border: 1px solid ;




`;