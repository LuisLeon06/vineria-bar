import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Contactanos = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const kpiData = {
    phone: '+54 9 11 1234-5678',
    email: 'info@vineria.com',
    hours: 'Lun - Dom: 12:00 - 00:00 hs',
    address: 'Av. Principal 1234, Ciudad'
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <Link to="/" className="back-button">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          Volver
        </Link>

        <div className="contact-card">
          <div className="contact-header">
            <h1 className="contact-title">Contáctanos</h1>
            <div className="title-decoration"></div>
            <p className="contact-subtitle">Estamos aquí para atenderte</p>
          </div>

          <div className="kpi-container">
            <div className="kpi-card main">
              <div className="kpi-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div className="kpi-content">
                <span className="kpi-label">Teléfono</span>
                <span className="kpi-value">{kpiData.phone}</span>
              </div>
            </div>

            <div className="kpi-card">
              <div className="kpi-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div className="kpi-content">
                <span className="kpi-label">Email</span>
                <span className="kpi-value">{kpiData.email}</span>
              </div>
            </div>

            <div className="kpi-card">
              <div className="kpi-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <div className="kpi-content">
                <span className="kpi-label">Horario</span>
                <span className="kpi-value">{kpiData.hours}</span>
              </div>
            </div>

            <div className="kpi-card">
              <div className="kpi-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div className="kpi-content">
                <span className="kpi-label">Dirección</span>
                <span className="kpi-value">{kpiData.address}</span>
              </div>
            </div>
          </div>

          <div className="live-time">
            <div className="time-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <span>{currentTime.toLocaleTimeString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactanos;