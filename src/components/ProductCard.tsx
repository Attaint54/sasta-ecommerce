import { useCart } from "../context/CartContext";

export default function ProductCard({ product }: any) {
  const { addToCart } = useCart();

  return (
    <div style={{ border: "1px solid #334155", padding: 10 }}>
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
}