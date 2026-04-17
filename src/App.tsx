import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <Navbar />
      <AppRoutes />
    </CartProvider>
  );
}

export default App;