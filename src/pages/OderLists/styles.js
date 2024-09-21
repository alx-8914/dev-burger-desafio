import styled from "styled-components"


export const CardOrder = styled.div`
background-color: #514f4f;
border: 4px solid;
border-radius: 16px;
padding: 20px;
margin: 10px 0;
box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
display: flex;
justify-content: space-between;
align-items: center;


   p {
    margin: 0;
    font-size: 1.2rem;
    color: #ffb884;
  }
  span {
    font-size: 1.4rem;
    color: #edf79e;

  }

  img {
    width: 32px;
    height: 42px;
    margin-top: 10px;
    margin-left: 400px;
    cursor: pointer;
  }
`;
export const ContainerOrders = styled.div`
display: flex;
flex-direction: column;
gap: 25px;
`;
export const Title = styled.h2`
text-align: center;
font-size: 2rem;
margin-top: 20px;
color: #ffffff;

`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #121212;
  min-height: 100vh;
`