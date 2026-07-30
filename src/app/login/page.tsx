"use client";

import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="container section-padding" style={{ display: 'flex', justifyContent: 'center', minHeight: '60vh' }}>
      <div style={{ width: '100%', maxWidth: '400px', background: '#fff', padding: '40px', borderRadius: '12px', border: '1px solid #eaeaea', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
        <h1 style={{ fontSize: '28px', textAlign: 'center', marginBottom: '30px' }}>Welcome Back</h1>
        
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '8px', textTransform: 'uppercase', color: '#444' }}>Email Address</label>
          <input type="email" placeholder="you@example.com" style={{ width: '100%', padding: '12px 15px', border: '1px solid #ddd', borderRadius: '8px', outline: 'none' }} />
        </div>
        
        <div style={{ marginBottom: '30px' }}>
          <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '8px', textTransform: 'uppercase', color: '#444' }}>Password</label>
          <input type="password" placeholder="••••••••" style={{ width: '100%', padding: '12px 15px', border: '1px solid #ddd', borderRadius: '8px', outline: 'none' }} />
        </div>

        <button className="btn btn-primary" style={{ width: '100%', padding: '14px', fontSize: '16px', marginBottom: '20px' }}>Log In</button>
        
        <p style={{ textAlign: 'center', color: '#666', fontSize: '14px' }}>
          Don't have an account? <Link href="/register" style={{ color: '#c19b63', fontWeight: 600 }}>Sign up</Link>
        </p>
      </div>
    </div>
  );
}
