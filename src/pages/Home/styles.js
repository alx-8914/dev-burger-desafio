import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
padding: 20px;
height: 100vh;
`
export const Title = styled.h2`
text-align: center;
font-size: 28px;
font-weight: 700;
line-height: 32px;
color: #ffffff;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 40px;
`
export const Form = styled.form`
display: flex;
flex-direction: column;
align-items: center;
max-width: 500px;
padding: 18px;
`
export const Input = styled.input`
width: 324px;
height: 58px;
padding: 32px;
background-color:#4d3b36;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border-radius: 15px;
color: #ffffff;
font-size: 18px;
`
export const InputLabel = styled.label`
font-weight: 700;
font-size: 18px;
line-height: 22px;
margin: 22px;
`
export const ContainerInput = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 50px;
color: #EEEEEE;
font-size: 18px;
font-weight: 700;
line-height: 22px;
padding: 12px 20px;
outline: none;
width: 100%;
`