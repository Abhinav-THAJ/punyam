"use client";

import { Calendar, Video, Phone } from "lucide-react";

export default function ConsultationPage() {
  return (
    <div className="container section-padding text-center">
      <h1 style={{ fontSize: '42px', color: '#222', marginBottom: '15px' }}>Book a Consultation</h1>
      <p style={{ color: '#666', fontSize: '18px', maxWidth: '600px', margin: '0 auto', marginBottom: '40px' }}>
        Connect directly with our verified, expert Vedic Astrologers to find guidance and clarity for your life's journey.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
        
        {/* Mock Astrologer Card */}
        <div style={{ background: '#fff', border: '1px solid #eaeaea', borderRadius: '12px', padding: '30px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
          <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: '#f5f5f5', margin: '0 auto 15px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: '32px' }}>👨‍⚕️</span>
          </div>
          <h3 style={{ fontSize: '20px', marginBottom: '5px' }}>Acharya Sharma</h3>
          <p style={{ color: '#c19b63', fontSize: '14px', fontWeight: 600, marginBottom: '15px' }}>Vedic Astrology & Vastu</p>
          <p style={{ color: '#666', fontSize: '14px', marginBottom: '20px' }}>15+ Years Experience • English, Hindi</p>
          <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
             <button className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '5px', padding: '8px 12px' }}><Video size={16}/> Video</button>
             <button className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '5px', padding: '8px 12px' }}><Calendar size={16}/> Book Now</button>
          </div>
        </div>

      </div>
    </div>
  );
}
