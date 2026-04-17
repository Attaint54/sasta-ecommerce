import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart } = useCart();

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.map((item: any, i: number) => (
        <p key={i}>{item.name} - ${item.price}</p>
      ))}
    </div>
  );
}