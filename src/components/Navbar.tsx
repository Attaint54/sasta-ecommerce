import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ display: "flex", gap: 20, padding: 10 }}>
      <Link to="/">Home</Link>
      <Link to="/products">Shop</Link>
      <Link to="/cart">Cart</Link>
      <Link to="/signin">Login</Link>
    </nav>
  );
}