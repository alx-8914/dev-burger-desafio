import styled from "styled-components";

export const Button = styled.button`
margin: 20px auto;
padding: 10px 20px;
font-size: 1rem;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: ${ (props) => props.theme === 'primary' ? '#D93856' : '#FFFFFF24'};
color: #f0f0f0f0;
width: 342px;
height: 68px;
margin-top: 25px;
font-weight: 900;
cursor: pointer;

&:hover {
  background: linear-gradient(180deg, #ff6378 0%, #fe7e);
    opacity: 0.8;
    color: #51425f;
}
&:active {
  background: linear-gradient( 180deg, #4e4e 0%, #4deaff);
  opacity: 0.6;
  color: #045904;
}
`