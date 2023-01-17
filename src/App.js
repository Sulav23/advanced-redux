import { useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";

function App() {
  const isModalShown = useSelector((state) => state.modal.isCartShown);
  return (
    <Layout>
      {isModalShown && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
