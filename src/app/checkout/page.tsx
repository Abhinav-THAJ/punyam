"use client";
import React, { useState, useEffect } from "react";
import { useCart } from "../../context/CartContext";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

export default function CheckoutPage() {
  const { items, cartTotal, removeFromCart } = useCart();
  const [mounted, setMounted] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="container section-padding" style={{ marginTop: "80px", minHeight: "70vh" }}>Loading...</div>;
  }

  const tax = cartTotal * 0.18;
  const grandTotal = cartTotal + tax;

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, integrate Razorpay/Stripe here
    // For demo, we clear cart manually (by removing all items one by one or extending CartContext with clearCart)
    // Here we'll just show the success screen
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <div className="container section-padding" style={{ marginTop: "80px", minHeight: "70vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
        <CheckCircle2 size={80} color="green" style={{ marginBottom: "24px" }} />
        <h1 className="sectionTitle" style={{ marginBottom: "16px" }}>Order Placed Successfully!</h1>
        <p style={{ color: "var(--text-muted)", marginBottom: "32px", maxWidth: "400px" }}>
          Thank you for your purchase. Your spiritual goods will be dispatched shortly. You will receive an email confirmation soon.
        </p>
        <Link href="/shop" className="btn btn-primary">
          CONTINUE SHOPPING
        </Link>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="container section-padding" style={{ marginTop: "80px", minHeight: "70vh", textAlign: "center" }}>
        <h1 className="sectionTitle" style={{ marginBottom: "24px" }}>Checkout</h1>
        <p style={{ color: "var(--text-muted)", marginBottom: "32px" }}>Your cart is empty.</p>
        <Link href="/shop" className="btn btn-primary">BACK TO SHOP</Link>
      </div>
    );
  }

  return (
    <div className="container section-padding" style={{ marginTop: "80px", minHeight: "70vh" }}>
      <Link href="/cart" style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "var(--text-muted)", marginBottom: "24px", fontSize: "14px" }}>
        <ArrowLeft size={16} /> Back to Cart
      </Link>
      <h1 className="sectionTitle" style={{ marginBottom: "40px" }}>Checkout</h1>

      <div className="grid-3" style={{ gap: "40px" }}>
        <div style={{ gridColumn: "span 2" }}>
          <form id="checkout-form" onSubmit={handlePlaceOrder}>
            <div style={{ backgroundColor: "var(--white)", padding: "32px", borderRadius: "8px", border: "1px solid var(--border-color)", marginBottom: "24px" }}>
              <h3 style={{ fontSize: "20px", fontFamily: "var(--font-playfair)", marginBottom: "24px" }}>Billing & Shipping Details</h3>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px" }}>
                <div>
                  <label style={{ display: "block", fontSize: "13px", marginBottom: "8px", color: "var(--text-main)" }}>First Name *</label>
                  <input required type="text" style={{ width: "100%", padding: "12px", border: "1px solid var(--border-color)", borderRadius: "4px" }} />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "13px", marginBottom: "8px", color: "var(--text-main)" }}>Last Name *</label>
                  <input required type="text" style={{ width: "100%", padding: "12px", border: "1px solid var(--border-color)", borderRadius: "4px" }} />
                </div>
              </div>

              <div style={{ marginBottom: "16px" }}>
                <label style={{ display: "block", fontSize: "13px", marginBottom: "8px", color: "var(--text-main)" }}>Email Address *</label>
                <input required type="email" style={{ width: "100%", padding: "12px", border: "1px solid var(--border-color)", borderRadius: "4px" }} />
              </div>

              <div style={{ marginBottom: "16px" }}>
                <label style={{ display: "block", fontSize: "13px", marginBottom: "8px", color: "var(--text-main)" }}>Phone Number *</label>
                <input required type="tel" style={{ width: "100%", padding: "12px", border: "1px solid var(--border-color)", borderRadius: "4px" }} />
              </div>

              <div style={{ marginBottom: "16px" }}>
                <label style={{ display: "block", fontSize: "13px", marginBottom: "8px", color: "var(--text-main)" }}>Street Address *</label>
                <input required type="text" placeholder="House number and street name" style={{ width: "100%", padding: "12px", border: "1px solid var(--border-color)", borderRadius: "4px" }} />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <div>
                  <label style={{ display: "block", fontSize: "13px", marginBottom: "8px", color: "var(--text-main)" }}>Town / City *</label>
                  <input required type="text" style={{ width: "100%", padding: "12px", border: "1px solid var(--border-color)", borderRadius: "4px" }} />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "13px", marginBottom: "8px", color: "var(--text-main)" }}>PIN Code *</label>
                  <input required type="text" style={{ width: "100%", padding: "12px", border: "1px solid var(--border-color)", borderRadius: "4px" }} />
                </div>
              </div>
            </div>

            <div style={{ backgroundColor: "var(--white)", padding: "32px", borderRadius: "8px", border: "1px solid var(--border-color)" }}>
              <h3 style={{ fontSize: "20px", fontFamily: "var(--font-playfair)", marginBottom: "24px" }}>Payment Method</h3>
              <div style={{ padding: "16px", border: "1px solid var(--primary-color)", borderRadius: "4px", backgroundColor: "var(--bg-color)" }}>
                <label style={{ display: "flex", alignItems: "center", gap: "12px", cursor: "pointer" }}>
                  <input type="radio" name="payment" defaultChecked style={{ accentColor: "var(--primary-color)" }} />
                  <span style={{ fontWeight: "500" }}>Razorpay (Cards, UPI, NetBanking)</span>
                </label>
                <p style={{ fontSize: "13px", color: "var(--text-muted)", marginLeft: "28px", marginTop: "8px" }}>
                  Pay securely using any major credit/debit card, UPI, or NetBanking.
                </p>
              </div>
            </div>
          </form>
        </div>

        {/* Order Summary Sidebar */}
        <div style={{ gridColumn: "span 1" }}>
          <div style={{ backgroundColor: "var(--bg-color)", padding: "32px", borderRadius: "8px", border: "1px solid var(--border-color)", position: "sticky", top: "100px" }}>
            <h3 style={{ fontSize: "20px", fontFamily: "var(--font-playfair)", marginBottom: "24px" }}>Your Order</h3>
            
            <div style={{ marginBottom: "24px" }}>
              {items.map(item => (
                <div key={item.id} style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px", fontSize: "14px" }}>
                  <span style={{ color: "var(--text-main)" }}>{item.name} <span style={{ color: "var(--text-muted)" }}>x {item.quantity}</span></span>
                  <span style={{ fontWeight: "500" }}>₹{(item.price * item.quantity).toLocaleString()}</span>
                </div>
              ))}
            </div>

            <div style={{ width: "100%", height: "1px", backgroundColor: "var(--border-color)", marginBottom: "24px" }}></div>
            
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "16px", color: "var(--text-muted)", fontSize: "14px" }}>
              <span>Subtotal</span>
              <span>₹{cartTotal.toLocaleString()}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "16px", color: "var(--text-muted)", fontSize: "14px" }}>
              <span>Shipping</span>
              <span style={{ color: "green" }}>FREE</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "24px", color: "var(--text-muted)", fontSize: "14px" }}>
              <span>GST (18%)</span>
              <span>₹{tax.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
            </div>
            
            <div style={{ width: "100%", height: "1px", backgroundColor: "var(--border-color)", marginBottom: "24px" }}></div>
            
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "32px", fontSize: "18px", fontWeight: "600", color: "var(--text-main)" }}>
              <span>Total</span>
              <span>₹{grandTotal.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
            </div>
            
            <button type="submit" form="checkout-form" className="btn btn-primary" style={{ width: "100%", padding: "16px", fontSize: "14px", cursor: "pointer", border: "none" }}>
              PLACE ORDER
            </button>
            <p style={{ textAlign: "center", fontSize: "12px", color: "var(--text-muted)", marginTop: "16px" }}>
              Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
