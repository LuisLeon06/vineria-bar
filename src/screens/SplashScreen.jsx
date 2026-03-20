import { useState, useEffect } from 'react';

const SplashScreen = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 2;
      });
    }, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="splash-screen">
      <div className="splash-content">
        <div className="loading-circle">
          <div className="circle-outer"></div>
          <div className="circle-inner"></div>
          <div className="circle-glow"></div>
        </div>
        <h1 className="splash-title">Vineria Bar</h1>
        <p className="splash-subtitle">Menú Digital</p>
        <div className="loading-bar">
          <div className="loading-progress" style={{ width: `${progress}%` }}></div>
        </div>
        <p className="loading-text">Cargando experiencia...</p>
      </div>
    </div>
  );
};

export default SplashScreen;