import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import api from "../../services/api";

import { Container, ContainerInput, Form, Input, InputLabel } from "./styles";

import Button from "../../components/Button";
import TopBackground from "../../components/TopBackground";
import { Background } from "../../components/TopBackground/styles";
import { Title } from "../OderLists/styles";

function App() {
  const inputOrder = useRef();
  const inputClientName = useRef();
  //const inputPrice = useRef();
  //const inputStatus = useRef();

  const navigate = useNavigate();

  async function registerNewOrder() {
    await api.post("/orders", {
      order: inputOrder.current.value,
      clientName: inputClientName.current.value,
      //price: inputPrice.current.value,
      //status: inputStatus.current.value
    });

    navigate("/pedidos");
  }

  return (
    <Container>
      <TopBackground />
      <img src={Logo} alt="logo-dev-burger" />
      <Background />
      <Title>Faça se pedido!</Title>
      <Form>
        <ContainerInput>
          <div>
            <InputLabel>Pedido</InputLabel>
            <Input type="text" placeholder="1 Coca-Cola, 1-X Salada" ref={inputOrder}/>
          </div>
          <div>
            <InputLabel>Nome do Cliente</InputLabel>
            <Input type="text" placeholder="Steve Jobs" ref={inputClientName} />
          </div>
          <Button type="button" onClick={registerNewOrder} theme="primary">
            Novo Pedido
          </Button>
        </ContainerInput>
      </Form>
    </Container>
  );
}

export default App;
