import { Button } from "../../components/Button/styles";
import api from "../../services/api";
import { useEffect, useState } from "react";
import TopBackground from "../../components/TopBackground";
import LogoBurger from "../../assets/pedidos.svg";
import { CardOrder, Container, ContainerOrders, Title } from "./styles";
import { useNavigate } from "react-router-dom";
import  TrashIcon  from '../../assets/trash.svg';

function OrderLists() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function getOrders() {
      const { data } = await api.get("/orders");

      setOrders(data);
    }
    getOrders();
  }, []);

  const navigate = useNavigate();

  // Função para deletar o pedido
  async function deleteOrder(id) {
    try {
      // Faz a requisição DELETE para a API
      await api.delete(`/orders/${id}`);
      // Filtra a lista de pedidos no front-end para remover o pedido excluído
      const updatedOrders = orders.filter(order => order.id !== id);
      setOrders(updatedOrders);
    } catch (error) {
      console.error("Erro ao excluir pedido:", error);
    }
  }

  return (
    <Container>
      <TopBackground />
      <img src={LogoBurger} alt="hamburgue" />
      <Title>Pedidos</Title>
      <ContainerOrders>
          {orders.map((order) => (
        <CardOrder key={order.id}>
            <div>
              <p><span>Pedido</span>: {order.order}</p>
              <p><span>Cliente</span>: {order.clientName}</p>
              <p><span>Status</span>: {order.status}</p>
              <img src={TrashIcon} alt='lata-de-lixo'  onClick={() => deleteOrder(order.id)} 
              style={{ cursor: "pointer" }} />
            </div>
        </CardOrder>
          ))}
          
      </ContainerOrders>
      <Button onClick={() => {navigate("/")}} type="button" theme="secundary">Voltar</Button>
    </Container>
  );
}
export default OrderLists;
