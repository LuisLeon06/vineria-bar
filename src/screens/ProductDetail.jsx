import React, { useEffect, useState } from 'react';

const BG = '#3A0D1E';
const NW = '#FF1060';
const NP = '#E050D8';
const CREAM = '#F5E0D8';
const CREAM_M = '#D4A8A0';
const CREAM_MT = '#A07078';

const GRID = {
    backgroundImage: 'linear-gradient(rgba(255,255,255,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.10) 1px, transparent 1px)',
    backgroundSize: '36px 36px'
};

const ProductDetail = ({ product, onBack }) => {
    const [showQRModal, setShowQRModal] = useState(false);
    const [toastMessage, setToastMessage] = useState('');

    useEffect(() => {
        if (toastMessage) {
            const timer = setTimeout(() => setToastMessage(''), 3000);
            return () => clearTimeout(timer);
        }
    }, [toastMessage]);

    const handleToggleAR = () => {
        setToastMessage('Iniciando experiencia AR...');
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        if (isMobile) {
            const mv = document.querySelector('model-viewer');
            if (mv && mv.canActivateAR) { mv.activateAR(); }
            else { setToastMessage('AR no disponible. Mostrando código QR.'); setShowQRModal(true); }
        } else { setShowQRModal(true); }
    };

    const currentUrl = window.location.href;
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(currentUrl)}`;

    return (
        <div className="h-screen w-full flex flex-col relative overflow-hidden" style={{ background: BG }}>

            {/* Grid – white lines */}
            <div className="absolute inset-0 pointer-events-none z-0" style={GRID} />

            {/* Ambient glows */}
            <div className="absolute top-[-20%] right-[-15%] w-72 h-72 rounded-full pointer-events-none"
                style={{ background: `radial-gradient(circle, rgba(255,16,96,0.22) 0%, transparent 60%)`, filter: 'blur(60px)' }} />
            <div className="absolute bottom-[25%] left-[-15%] w-64 h-64 rounded-full pointer-events-none"
                style={{ background: `radial-gradient(circle, rgba(224,80,216,0.18) 0%, transparent 60%)`, filter: 'blur(55px)' }} />

            {/* ── Top Nav ── */}
            <div className="absolute top-0 left-0 w-full p-4 z-40 flex justify-between items-center">
                <button
                    onClick={onBack}
                    className="w-11 h-11 rounded-xl flex items-center justify-center transition-all hover:scale-105 active:scale-95"
                    style={{
                        background: 'rgba(255,255,255,0.07)',
                        backdropFilter: 'blur(12px)',
                        border: `1px solid rgba(255,16,96,0.40)`,
                        boxShadow: `0 0 12px rgba(255,16,96,0.22)`,
                        color: CREAM
                    }}
                >
                    <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M15 18l-6-6 6-6" />
                    </svg>
                </button>

                <div className="px-3 py-1 rounded-full flex items-center gap-2 text-[10px] font-tech font-bold tracking-widest"
                    style={{
                        background: 'rgba(44,10,24,0.70)',
                        border: `1px solid ${NW}`,
                        color: NW,
                        textShadow: `0 0 6px ${NW}`,
                        boxShadow: `0 0 14px rgba(255,16,96,0.32)`,
                        backdropFilter: 'blur(10px)'
                    }}>
                    <span className="w-2 h-2 rounded-full animate-pulse"
                        style={{ background: NW, boxShadow: `0 0 6px ${NW}` }} />
                    DISPONIBLE
                </div>
            </div>

            {/* ── Image / 3D ── */}
            <div className="flex-1 relative w-full flex justify-center items-center z-10">
                {product.modelGlb ? (
                    <model-viewer
                        src={product.modelGlb} poster={product.image} alt={product.name}
                        ar ar-modes="webxr scene-viewer quick-look"
                        camera-controls auto-rotate
                        shadow-intensity="1.5" exposure="1.2"
                        environment-image="neutral" interaction-prompt="auto" loading="eager"
                        className="w-full h-full"
                        style={{ '--progress-bar-color': NW }}
                    >
                        <div className="progress-bar hide" slot="progress-bar">
                            <div className="update-bar" />
                            <div className="text-xs mt-2 text-center uppercase tracking-widest animate-pulse font-tech"
                                style={{ color: NW }}>
                                Cargando 3D...
                            </div>
                        </div>
                    </model-viewer>
                ) : (
                    <div className="w-full h-full p-8 flex items-center justify-center">
                        <div className="relative">
                            <img
                                src={product.image} alt={product.name}
                                className="w-full max-w-sm rounded-[2rem] object-cover aspect-square img-flicker"
                                style={{
                                    boxShadow: `0 0 32px rgba(255,16,96,0.28), 0 8px 32px rgba(0,0,0,0.40)`,
                                    border: `1.5px solid rgba(255,16,96,0.35)`
                                }}
                            />
                            {/* Corner LEDs */}
                            {['top-2 left-2', 'top-2 right-2', 'bottom-2 left-2', 'bottom-2 right-2'].map((pos, i) => (
                                <div key={i} className={`absolute ${pos} w-3 h-3 rounded-full`}
                                    style={{ background: NW, boxShadow: `0 0 8px ${NW}, 0 0 16px rgba(255,16,96,0.60)`, opacity: .85 }} />
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* ── Info Panel ── */}
            <div
                className="rounded-t-[40px] p-6 relative z-30"
                style={{
                    background: 'rgba(44,10,24,0.94)',
                    backdropFilter: 'blur(24px)',
                    borderTop: `2px solid ${NW}`,
                    boxShadow: `0 -16px 40px rgba(255,16,96,0.16), 0 -4px 16px rgba(0,0,0,0.40)`
                }}
            >
                {/* Handle */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-1 rounded-full"
                    style={{
                        background: `linear-gradient(90deg, ${NW}, ${NP})`,
                        boxShadow: `0 0 10px rgba(255,16,96,0.60)`
                    }} />

                <div className="flex justify-between items-end mb-4 mt-2">
                    <div>
                        <h2 className="font-tech text-3xl m-0 uppercase leading-none font-black"
                            style={{ color: CREAM, textShadow: `0 0 14px rgba(255,16,96,0.28)` }}>
                            {product.name}
                        </h2>
                        <span className="text-xs font-tech font-semibold tracking-wider mt-1 block"
                            style={{ color: NP, textShadow: `0 0 6px ${NP}` }}>
                            {product.subtitle}
                        </span>
                    </div>
                    <div className="text-right">
                        <span className="font-tech text-3xl font-bold block leading-none price-pulse">
                            ${product.price}
                        </span>
                        <span className="text-[10px] uppercase tracking-widest" style={{ color: CREAM_MT }}>
                            {product.currency}
                        </span>
                    </div>
                </div>

                {/* Tags */}
                <div className="flex gap-2 mb-4 overflow-x-auto hide-scrollbar">
                    {product.tags.map((tag, i) => (
                        <div key={i}
                            className="whitespace-nowrap text-xs px-3 py-1 rounded-md flex items-center gap-1 font-tech"
                            style={tag.highlight ? {
                                border: `1px solid ${NW}`,
                                color: NW,
                                background: 'rgba(255,16,96,0.10)',
                                textShadow: `0 0 4px rgba(255,16,96,0.45)`,
                                boxShadow: `0 0 8px rgba(255,16,96,0.16)`
                            } : {
                                border: '1px solid rgba(255,16,96,0.20)',
                                color: CREAM_M,
                                background: 'rgba(255,255,255,0.05)'
                            }}>
                            {tag.text}
                        </div>
                    ))}
                </div>

                <p className="text-sm leading-relaxed mb-6 line-clamp-3" style={{ color: CREAM_M }}>
                    {product.description}
                    {product.modelGlb && (
                        <><br /><span className="text-[10px] font-tech" style={{ color: NW }}>* Toca la pantalla para rotar 360°</span></>
                    )}
                </p>
            </div>

            {/* ── QR Modal ── */}
            <div className={`fixed inset-0 backdrop-blur-md z-[1000] flex items-center justify-center transition-opacity duration-300 p-4 ${showQRModal ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                style={{ background: 'rgba(20,4,12,0.60)' }}>
                <div className={`p-8 rounded-3xl text-center max-w-sm w-full relative transform transition-transform duration-300 ${showQRModal ? 'scale-100' : 'scale-90'}`}
                    style={{
                        background: 'rgba(44,10,24,0.97)',
                        border: `1.5px solid ${NW}`,
                        boxShadow: `0 0 40px rgba(255,16,96,0.28)`
                    }}>
                    <button className="absolute top-4 right-4 text-2xl transition-colors"
                        style={{ color: CREAM_MT }}
                        onClick={() => setShowQRModal(false)}>&times;</button>
                    <h3 className="font-tech font-bold text-xl mb-2 mt-0"
                        style={{ color: NW, textShadow: `0 0 8px ${NW}` }}>
                        Experiencia AR
                    </h3>
                    <p className="text-sm mb-6" style={{ color: CREAM_M }}>
                        Escanea este código con tu celular para ver este modelo 3D en tu mesa.
                    </p>
                    <img src={qrUrl} alt="QR Code"
                        className="w-48 h-48 mx-auto rounded-xl p-2 bg-white mb-4"
                        style={{ border: `2px solid ${NW}`, boxShadow: `0 0 16px rgba(255,16,96,0.35)` }} />
                    <p className="text-xs" style={{ color: CREAM_MT }}>
                        Asegúrate de estar navegando desde el mismo Wi-Fi si es local.
                    </p>
                </div>
            </div>

            {/* ── Toast ── */}
            <div className="fixed bottom-24 left-1/2 -translate-x-1/2 px-6 py-3 rounded-full font-tech font-bold z-[2000] transition-opacity duration-300 pointer-events-none text-sm"
                style={{
                    background: `linear-gradient(135deg, ${NW}, ${NP})`,
                    color: '#fff',
                    boxShadow: `0 0 22px rgba(255,16,96,0.55)`,
                    opacity: toastMessage ? 1 : 0
                }}>
                {toastMessage}
            </div>
        </div>
    );
};

export default ProductDetail;
