"use client";
import { useState } from "react";
import { useCart } from "../context/CartContext";
import { useRouter } from "next/navigation";

export default function AddToCartButton({ product }: { product: any }) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const router = useRouter();

  // Parse price like "₹1,499" into number 1499
  const numericPrice = Number(product.price.replace(/[^0-9.-]+/g,""));

  const handleAddToCart = () => {
    addToCart({
      id: product.id.toString(),
      name: product.title.rendered,
      price: numericPrice,
      image: product.image,
      quantity
    });
    // Optional: redirect to cart immediately
    router.push('/cart');
  };

  return (
    <div style={{ display: "flex", gap: "16px", alignItems: "center", marginBottom: "40px" }}>
      <div style={{ display: "flex", border: "1px solid var(--border-color)", borderRadius: "4px", overflow: "hidden" }}>
        <button 
          onClick={() => setQuantity(Math.max(1, quantity - 1))}
          style={{ padding: "12px 16px", backgroundColor: "#f9f9f9", borderRight: "1px solid var(--border-color)", cursor: "pointer", border: "none" }}
        >-</button>
        <div style={{ padding: "12px 24px", display: "flex", alignItems: "center", justifyContent: "center" }}>{quantity}</div>
        <button 
          onClick={() => setQuantity(quantity + 1)}
          style={{ padding: "12px 16px", backgroundColor: "#f9f9f9", borderLeft: "1px solid var(--border-color)", cursor: "pointer", border: "none" }}
        >+</button>
      </div>
      
      <button onClick={handleAddToCart} className="btn btn-primary" style={{ padding: "14px 40px", fontSize: "14px", border: "none", cursor: "pointer" }}>
        ADD TO CART
      </button>
    </div>
  );
}
