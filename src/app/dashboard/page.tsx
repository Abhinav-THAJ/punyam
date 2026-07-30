"use client";

import { LayoutDashboard, FileText, Calendar as CalendarIcon, LogOut } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="container section-padding">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '36px', color: '#222' }}>My Dashboard</h1>
        <button className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <LogOut size={16} /> Logout
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
        
        <div style={{ background: '#fff', border: '1px solid #eaeaea', borderRadius: '12px', padding: '25px', display: 'flex', gap: '15px' }}>
          <div style={{ background: 'rgba(193, 155, 99, 0.1)', color: '#c19b63', width: '50px', height: '50px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <FileText size={24} />
          </div>
          <div>
            <h3 style={{ fontSize: '18px', marginBottom: '5px' }}>Saved Reports</h3>
            <p style={{ color: '#888', fontSize: '14px', marginBottom: '10px' }}>View your previously generated Kundli PDFs.</p>
            <a href="#" style={{ color: '#c19b63', fontWeight: 600, fontSize: '14px' }}>View Reports →</a>
          </div>
        </div>

        <div style={{ background: '#fff', border: '1px solid #eaeaea', borderRadius: '12px', padding: '25px', display: 'flex', gap: '15px' }}>
          <div style={{ background: 'rgba(193, 155, 99, 0.1)', color: '#c19b63', width: '50px', height: '50px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <CalendarIcon size={24} />
          </div>
          <div>
            <h3 style={{ fontSize: '18px', marginBottom: '5px' }}>Upcoming Consultations</h3>
            <p style={{ color: '#888', fontSize: '14px', marginBottom: '10px' }}>You have 0 scheduled calls.</p>
            <a href="/consultation" style={{ color: '#c19b63', fontWeight: 600, fontSize: '14px' }}>Book a Call →</a>
          </div>
        </div>

      </div>
    </div>
  );
}
