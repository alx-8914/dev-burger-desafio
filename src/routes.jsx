import { createBrowserRouter } from "react-router-dom";
import App from "./pages/Home";
import OrderLists from "./pages/OderLists";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/pedidos",
    element: <OrderLists />,
  }
]);
export default router