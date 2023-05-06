import Header from "./Components/Header/Header";
import AllSection from "./Components/Main/allSection";
import Footer from "./Components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import ServiceRequirements from "./pages/ServiceReq/ServiceRequirements";
import Contacts from "./pages/Contacts/Contacts";
import SingleProduct from "./pages/SingleProduct/SingleProduct";
import Basket from "./pages/Basket/Basket";
import EmptyBasket from "./pages/EmptyBasket/EmptyBasket";
import Checkout from "./pages/Checkout/Checkout";
import OrderIsProcessed from "./pages/OrderIsProcessed/OrderIsProcessed";

function App() {
  return (
    <>
      <Header />
      
      <main>
        <Routes>
          <Route path="/" element={<AllSection />} />
          <Route path="/service-requirements" element={<ServiceRequirements />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/single-product/:id" element={<SingleProduct />} />
          <Route path="/single-product" element={<SingleProduct />} />
          <Route path="/products" element={<Basket />} />
          <Route path="/selected" element={<EmptyBasket />} />
          <Route path="/ordering" element={<Checkout />} /> 
          <Route path="/ordered" element={<OrderIsProcessed />} /> 
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
