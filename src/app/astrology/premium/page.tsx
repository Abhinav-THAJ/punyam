"use client";

import { Sparkles, CheckCircle, ArrowRight } from "lucide-react";

export default function PremiumAstrologyPage() {
  return (
    <div className="container section-padding text-center">
      <div style={{ marginBottom: '40px' }}>
        <h1 style={{ fontSize: '42px', color: '#222', marginBottom: '15px' }}>
          <Sparkles style={{ color: '#c19b63', marginRight: '10px' }} />
          Premium Daily Astrology
        </h1>
        <p style={{ color: '#666', fontSize: '18px', maxWidth: '600px', margin: '0 auto' }}>
          Unlock daily personalized horoscopes, detailed panchang, and unique astrological insights tailored to your exact birth chart.
        </p>
      </div>
      
      <div style={{ background: '#fff', border: '1px solid #eaeaea', borderRadius: '12px', padding: '40px', maxWidth: '500px', margin: '0 auto', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
        <h2 style={{ fontSize: '24px', marginBottom: '20px' }}>Subscription Benefits</h2>
        <ul style={{ textAlign: 'left', listStyle: 'none', padding: 0, margin: '0 0 30px 0', color: '#444' }}>
          <li style={{ marginBottom: '15px', display: 'flex', gap: '10px' }}><CheckCircle color="#c19b63" size={20} /> Daily Personalized Horoscope</li>
          <li style={{ marginBottom: '15px', display: 'flex', gap: '10px' }}><CheckCircle color="#c19b63" size={20} /> Daily Detailed Panchang & Muhurtham</li>
          <li style={{ marginBottom: '15px', display: 'flex', gap: '10px' }}><CheckCircle color="#c19b63" size={20} /> Planetary Transit Alerts</li>
          <li style={{ marginBottom: '15px', display: 'flex', gap: '10px' }}><CheckCircle color="#c19b63" size={20} /> Priority Consultations</li>
        </ul>
        <button className="btn btn-primary" style={{ width: '100%', padding: '15px', fontSize: '16px' }}>Subscribe Now - ₹499/mo</button>
      </div>
    </div>
  );
}
