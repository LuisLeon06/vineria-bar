import React, { useEffect, useState } from 'react';

const SplashScreen = ({ onStart }) => {
    const [showPulse, setShowPulse] = useState(true);
    const [showWelcome, setShowWelcome] = useState(false);
    const [showSlogan, setShowSlogan] = useState(false);

    // Timing logic for the 4-second automatic transition
    useEffect(() => {
        // Show Welcome Message at 0.5s
        const welcomeTimer = setTimeout(() => {
            setShowWelcome(true);
        }, 500);

        // Show Slogan at 2s
        const sloganTimer = setTimeout(() => {
            setShowSlogan(true);
        }, 2000);

        // Automatic navigation to menu after 4 seconds total
        const navigateTimer = setTimeout(() => {
            onStart();
        }, 4000);

        return () => {
            clearTimeout(welcomeTimer);
            clearTimeout(sloganTimer);
            clearTimeout(navigateTimer);
        };
    }, [onStart]);

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
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[var(--color-primary-fire)]/15 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="z-10 text-center flex flex-col items-center">
                {/* Center Graphic with Rotating Neon Border */}
                <div className="w-72 h-72 md:w-96 md:h-96 neon-rotating-border fire-glow mb-8">
                    <div className="neon-rotating-content bg-black/40 flex flex-col items-center justify-center p-8">
                        {/* Internal Fire Image */}
                        <img
                            src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=400&auto=format&fit=crop"
                            alt="Los Leños"
                            className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay"
                        />

                        {/* Branding inside the circle */}
                        <div className="relative z-10 flex flex-col items-center">
                            <p className="text-[var(--color-primary-fire)] tracking-[0.4em] text-sm md:text-base font-bold mb-1 uppercase text-neon-fire">
                                Los Leños
                            </p>
                            <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-neon-fire leading-none">
                                PARRILLA
                            </h1>
                        </div>
                    </div>
                </div>

                {/* Messages Area */}
                <div className="flex flex-col items-center justify-center min-h-[100px] gap-2">
                    <div className={`transition-all duration-1000 transform ${showWelcome ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                        <p className="text-xl md:text-2xl font-tech text-neon-amber tracking-widest uppercase text-center px-4">
                            !Disfrute su estancia!
                        </p>
                    </div>

                    <div className={`transition-all duration-1000 transform ${showSlogan ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                        <p className={`text-lg md:text-xl font-body text-neon-fire tracking-wide italic font-bold uppercase text-center px-4 ${showPulse ? 'opacity-100' : 'opacity-70'}`}>
                            !Sabor que enciende!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SplashScreen;
