import React, { useEffect, useState } from 'react';

const BG = '#3A0D1E';
const NW = '#FF1060';
const NP = '#E050D8';
const NG = '#F5A020';
const CREAM = '#F5E0D8';
const CREAM_M = '#D4A8A0';
const CREAM_MT = '#A07078';

const GRID = {
    backgroundImage: 'linear-gradient(rgba(255,255,255,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.10) 1px, transparent 1px)',
    backgroundSize: '36px 36px'
};

const SplashScreen = ({ onStart }) => {
    const [showWelcome, setShowWelcome] = useState(false);
    const [showSlogan, setShowSlogan] = useState(false);
    const [pulse, setPulse] = useState(true);

    useEffect(() => {
        const t1 = setTimeout(() => setShowWelcome(true), 600);
        const t2 = setTimeout(() => setShowSlogan(true), 2000);
        const t3 = setTimeout(() => onStart(), 4500);
        return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
    }, [onStart]);

    useEffect(() => {
        const iv = setInterval(() => setPulse(p => !p), 900);
        return () => clearInterval(iv);
    }, []);

    return (
        <div
            className="h-screen w-full flex flex-col items-center justify-center cursor-pointer relative overflow-hidden"
            style={{ background: BG }}
            onClick={onStart}
        >
            {/* Grid – white lines */}
            <div className="absolute inset-0 pointer-events-none" style={GRID} />

            {/* Ambient glows */}
            <div className="absolute inset-0 pointer-events-none">
                <div style={{
                    position: 'absolute', top: '-10%', left: '-10%',
                    width: '55vw', height: '55vw', borderRadius: '50%',
                    background: `radial-gradient(circle, rgba(255,16,96,0.22) 0%, transparent 65%)`,
                    filter: 'blur(60px)'
                }} />
                <div style={{
                    position: 'absolute', bottom: '-5%', right: '-5%',
                    width: '45vw', height: '45vw', borderRadius: '50%',
                    background: `radial-gradient(circle, rgba(224,80,216,0.18) 0%, transparent 60%)`,
                    filter: 'blur(55px)'
                }} />
            </div>

            {/* Content */}
            <div className="z-10 text-center flex flex-col items-center px-6">

                {/* Rotating neon ring */}
                <div className="w-64 h-64 md:w-80 md:h-80 neon-rotating-border fire-glow mb-8">
                    <div className="neon-rotating-content">
                        <img
                            src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=400&auto=format&fit=crop"
                            alt="Los Leños"
                            className="w-full h-full object-cover"
                        />
                        <div style={{
                            position: 'absolute', inset: 0, borderRadius: '50%',
                            background: `radial-gradient(circle at 30% 30%, rgba(255,16,96,0.16) 0%, transparent 55%)`
                        }} />
                    </div>
                </div>

                {/* Branding */}
                <p className="tracking-[0.45em] text-xs md:text-sm font-tech font-bold mb-1 uppercase"
                    style={{ color: NW, textShadow: `0 0 8px ${NW}, 0 0 20px rgba(255,16,96,0.40)` }}>
                    ◈ LOS LEÑOS ◈
                </p>

                <h1 className="font-tech text-4xl md:text-6xl font-black tracking-tight leading-none mb-2"
                    style={{
                        color: CREAM,
                        textShadow: `0 0 20px rgba(255,16,96,0.30)`,
                        WebkitTextStroke: `0.5px rgba(255,16,96,0.45)`
                    }}>
                    PARRILLA
                </h1>

                {/* Neon divider */}
                <div style={{
                    width: '130px', height: '2px', margin: '10px auto 20px',
                    background: `linear-gradient(90deg, transparent, ${NW}, ${NP}, transparent)`,
                    boxShadow: `0 0 10px rgba(255,16,96,0.60)`
                }} />

                {/* Messages */}
                <div className="flex flex-col items-center gap-2 min-h-[80px]">
                    <div className={`transition-all duration-1000 ${showWelcome ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                        <p className="text-xl md:text-2xl font-tech tracking-widest uppercase text-center"
                            style={{ color: CREAM, textShadow: `0 0 12px rgba(255,16,96,0.28)` }}>
                            ¡Disfrute su estancia!
                        </p>
                    </div>
                    <div className={`transition-all duration-1000 ${showSlogan ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                        <p className="text-base md:text-lg tracking-wide italic text-center"
                            style={{
                                color: NW,
                                opacity: pulse ? 1 : 0.50,
                                transition: 'opacity 0.5s',
                                textShadow: `0 0 10px rgba(255,16,96,0.55)`
                            }}>
                            [ Sabor que enciende. ]
                        </p>
                    </div>
                </div>

                <p className="mt-8 text-[10px] font-tech tracking-[0.35em] uppercase"
                    style={{ color: CREAM_MT, opacity: pulse ? 0.9 : 0.30, transition: 'opacity 0.8s' }}>
                    ▶ TOCA PARA CONTINUAR
                </p>
            </div>
        </div>
    );
};

export default SplashScreen;
