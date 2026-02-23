import React, { useEffect, useState } from 'react';

const SplashScreen = ({ onStart }) => {
    const [showPulse, setShowPulse] = useState(true);

    // Simple blink effect for the text
    useEffect(() => {
        const interval = setInterval(() => {
            setShowPulse((p) => !p);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div
            className="h-screen w-full flex flex-col items-center justify-center cursor-pointer relative overflow-hidden"
            onClick={onStart}
        >
            {/* Decorative background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[var(--color-primary-cyan)]/10 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="z-10 text-center flex flex-col items-center">
                {/* Logo/Title Area */}
                <p className="text-[var(--color-primary-cyan)] tracking-[0.3em] text-sm md:text-base font-bold mb-2 uppercase text-neon-cyan">
                    The Food Resto
                </p>
                <h1 className="text-7xl md:text-9xl font-black mb-12 tracking-tight text-neon-cyan">
                    MENU
                </h1>

                {/* Center Graphic (Placeholder for the fried chicken or Humita cover) */}
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full glass-panel flex items-center justify-center p-4 mb-12 box-neon-cyan-strong">
                    <img
                        src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=400&auto=format&fit=crop"
                        alt="Featured Dish"
                        className="w-full h-full object-cover rounded-full mix-blend-luminosity opacity-80"
                    />
                </div>

                {/* Call to action */}
                <div className={`transition-opacity duration-500 ${showPulse ? 'opacity-100' : 'opacity-30'}`}>
                    <p className="text-xl md:text-2xl font-tech text-neon-pink tracking-widest uppercase">
                        👉 Tocá para comenzar
                    </p>
                </div>
            </div>

            {/* Footer info (like in kiosk) */}
            <div className="absolute bottom-8 text-center text-xs md:text-sm text-gray-500 opacity-60">
                <p>OPEN 12 PM - 12 AM</p>
                <p>Avenida Norte 1234, Ciudad</p>
            </div>
        </div>
    );
};

export default SplashScreen;
