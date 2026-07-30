"use client";

import { useState } from 'react';
import { Sparkles, MapPin, Calendar, Clock, Loader2, ArrowRight, User, Mail, Phone, FileText } from 'lucide-react';
import styles from './instant.module.css';

const CITIES = [
  { name: 'New Delhi', coords: '28.6139,77.2090' },
  { name: 'Mumbai', coords: '19.0760,72.8777' },
  { name: 'Bangalore', coords: '12.9716,77.5946' },
  { name: 'Chennai', coords: '13.0827,80.2707' },
  { name: 'Kolkata', coords: '22.5726,88.3639' },
];

export default function InstantReportPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    gender: 'male',
    date: new Date().toISOString().split('T')[0],
    time: '12:00',
    city: CITIES[0].coords
  });
  
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const handleGenerateReport = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResultData(null);

    try {
      const datetime = `${formData.date}T${formData.time}:00Z`;
      
      const res = await fetch(`/api/astrology/birth-details?coordinates=${formData.city}&datetime=${datetime}`);
      
      const contentType = res.headers.get("content-type");
      if (!res.ok || (contentType && contentType.indexOf("text/html") !== -1)) {
         throw new Error("Next.js API is unavailable. Ensure local server is running.");
      }
      
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to fetch data');
      }

      setResultData(data);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unknown error occurred');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container section-padding">
      <div className={`text-center ${styles.heroSection}`}>
        <div className={styles.subtitle}>
          <span className={styles.line}></span> 
          <Sparkles size={16} />
          INSTANT ASTRO REPORT
          <span className={styles.line}></span>
        </div>
        <h1 className={styles.title}>Your Personalized Kundli</h1>
        <p className={styles.description}>
          Enter your birth details accurately to generate an instant, comprehensive birth chart and astrological report utilizing the ProKerala Engine.
        </p>
      </div>

      <div className="grid-2">
        {/* Input Form */}
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>
            <FileText className={styles.cardTitleIcon} size={28} /> Birth Details Form
          </h2>
          <form onSubmit={handleGenerateReport}>
            
            <div className={styles.formGroup}>
              <label className={styles.label}>Full Name</label>
              <div className={styles.inputWrapper}>
                <User className={styles.inputIcon} size={20} />
                <input 
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className={styles.input}
                  required
                />
              </div>
            </div>

            <div className={styles.formGrid}>
              <div className={styles.formGroup}>
                <label className={styles.label}>Email Address</label>
                <div className={styles.inputWrapper}>
                  <Mail className={styles.inputIcon} size={20} />
                  <input 
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className={styles.input}
                    required
                  />
                </div>
              </div>
              
              <div className={styles.formGroup}>
                <label className={styles.label}>Phone Number</label>
                <div className={styles.inputWrapper}>
                  <Phone className={styles.inputIcon} size={20} />
                  <input 
                    type="tel"
                    placeholder="+91 9876543210"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className={styles.input}
                    required
                  />
                </div>
              </div>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Gender</label>
              <div className={styles.selectGroup}>
                <label className={styles.radioLabel}>
                  <input 
                    type="radio" 
                    name="gender" 
                    value="male"
                    checked={formData.gender === 'male'}
                    onChange={(e) => setFormData({...formData, gender: e.target.value})}
                  /> Male
                </label>
                <label className={styles.radioLabel}>
                  <input 
                    type="radio" 
                    name="gender" 
                    value="female"
                    checked={formData.gender === 'female'}
                    onChange={(e) => setFormData({...formData, gender: e.target.value})}
                  /> Female
                </label>
              </div>
            </div>

            <div className={styles.formGrid}>
              <div className={styles.formGroup}>
                <label className={styles.label}>Date of Birth</label>
                <div className={styles.inputWrapper}>
                  <Calendar className={styles.inputIcon} size={20} />
                  <input 
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                    className={styles.input}
                    required
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Time of Birth</label>
                <div className={styles.inputWrapper}>
                  <Clock className={styles.inputIcon} size={20} />
                  <input 
                    type="time"
                    value={formData.time}
                    onChange={(e) => setFormData({...formData, time: e.target.value})}
                    className={styles.input}
                    required
                  />
                </div>
              </div>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Place of Birth</label>
              <div className={styles.inputWrapper}>
                <MapPin className={styles.inputIcon} size={20} />
                <select 
                  value={formData.city}
                  onChange={(e) => setFormData({...formData, city: e.target.value})}
                  className={styles.input}
                >
                  {CITIES.map(c => (
                    <option key={c.name} value={c.coords}>{c.name}</option>
                  ))}
                </select>
              </div>
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className={`btn btn-primary ${styles.submitBtn}`}
              style={{ opacity: loading ? 0.7 : 1 }}
            >
              {loading ? <Loader2 size={20} className={styles.spin} /> : 'Generate Report - ₹299'}
              {!loading && <ArrowRight size={20} />}
            </button>
          </form>
        </div>

        {/* Results Area */}
        <div className={`${styles.card} ${styles.resultsArea}`}>
          {error && (
            <div className={styles.errorState}>
              <p style={{ fontWeight: 600, marginBottom: '5px' }}>Generation Failed</p>
              <p>{error}</p>
            </div>
          )}

          {!resultData && !error && !loading && (
            <div className={styles.emptyState}>
              <FileText size={48} className={styles.emptyIcon} />
              <p>Complete the payment to instantly view and download your 30+ page PDF astrology report.</p>
            </div>
          )}

          {loading && (
            <div className={styles.emptyState}>
              <Loader2 size={40} className={`${styles.emptyIcon} ${styles.spin}`} style={{ color: 'var(--primary-color)' }} />
              <p>Synthesizing Astrological Data...</p>
            </div>
          )}

          {resultData && !loading && (
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <h3 className={styles.resultTitle}>Astrology Snapshot for {formData.name || 'User'}</h3>
              
              <div className={styles.resultSection}>
                <div className={styles.resultGrid}>
                  <div className={styles.dataPoint}>
                    <div className={styles.dataLabel}>Nakshatra (Birth Star)</div>
                    <div className={styles.dataValue}>{resultData.nakshatra?.name || 'N/A'}</div>
                    <div className={styles.dataSub}>Lord: {resultData.nakshatra?.lord?.name || 'N/A'}</div>
                  </div>
                  <div className={styles.dataPoint}>
                    <div className={styles.dataLabel}>Rasi (Moon Sign)</div>
                    <div className={styles.dataValue}>{resultData.rasi?.name || 'N/A'}</div>
                    <div className={styles.dataSub}>Lord: {resultData.rasi?.lord?.name || 'N/A'}</div>
                  </div>
                  <div className={styles.dataPoint}>
                    <div className={styles.dataLabel}>Zodiac (Sun Sign)</div>
                    <div className={styles.dataValue}>{resultData.zodiac?.name || 'N/A'}</div>
                    <div className={styles.dataSub}>Lord: {resultData.zodiac?.lord?.name || 'N/A'}</div>
                  </div>
                  <div className={styles.dataPoint}>
                    <div className={styles.dataLabel}>Tithi</div>
                    <div className={styles.dataValue}>{resultData.tithi?.name || 'N/A'}</div>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: 'auto', textAlign: 'center' }}>
                <p style={{ marginBottom: '15px', color: '#666' }}>Your full 30-page PDF report is ready for download.</p>
                <button className="btn btn-primary" style={{ width: '100%' }}>Download Full PDF Report</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
