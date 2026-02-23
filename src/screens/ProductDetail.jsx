import React, { useEffect, useState } from 'react';

const ProductDetail = ({ product, onBack }) => {
    const [showQRModal, setShowQRModal] = useState(false);
    const [toastMessage, setToastMessage] = useState('');

    // Toast effect
    useEffect(() => {
        if (toastMessage) {
            const timer = setTimeout(() => setToastMessage(''), 3000);
            return () => clearTimeout(timer);
        }
    }, [toastMessage]);

    const handleToggleAR = () => {
        console.log("Button clicked!");
        setToastMessage("Iniciando experiencia AR...");

        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

        if (isMobile) {
            const mv = document.querySelector("model-viewer");
            if (mv && mv.canActivateAR) {
                mv.activateAR();
            } else {
                setToastMessage("AR no disponible. Mostrando código QR.");
                setShowQRModal(true);
            }
        } else {
            setShowQRModal(true);
        }
    };

    const currentUrl = window.location.href;
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(currentUrl)}`;

    return (
        <div className="h-screen w-full flex flex-col relative overflow-hidden bg-[var(--color-dark-bg)]">

            {/* Top Navigation */}
            <div className="absolute top-0 left-0 w-full p-4 z-40 flex justify-between items-center bg-gradient-to-b from-black/80 to-transparent">
                <button
                    onClick={onBack}
                    className="w-10 h-10 rounded-full glass-panel box-neon-cyan flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                >
                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6"></path></svg>
                </button>
                <div className="status-badge bg-[var(--color-primary-cyan)]/10 text-neon-cyan px-3 py-1 rounded-full box-neon-cyan flex items-center gap-2 text-xs font-bold tracking-widest">
                    <span className="w-2 h-2 rounded-full bg-[var(--color-primary-cyan)] animate-pulse shadow-[0_0_15px_var(--color-primary-cyan)]"></span>
                    DISPONIBLE
                </div>
            </div>

            {/* 3D Viewer Area */}
            <div className="flex-1 relative w-full flex justify-center items-center">
                {product.modelGlb ? (
                    <model-viewer
                        src={product.modelGlb}
                        poster={product.image}
                        alt={product.name}
                        ar
                        ar-modes="webxr scene-viewer quick-look"
                        camera-controls
                        auto-rotate
                        shadow-intensity="1.5"
                        exposure="1.2"
                        environment-image="neutral"
                        interaction-prompt="auto"
                        loading="eager"
                        className="w-full h-full"
                        style={{ '--progress-bar-color': 'var(--color-primary-cyan)' }}
                    >
                        <div className="progress-bar hide" slot="progress-bar">
                            <div className="update-bar"></div>
                            <div className="text-[var(--color-primary-cyan)] font-tech text-xs mt-2 text-center uppercase tracking-widest animate-pulse">
                                Cargando 3D...
                            </div>
                        </div>
                    </model-viewer>
                ) : (
                    <div className="w-full h-full p-8 flex items-center justify-center">
                        <img src={product.image} alt={product.name} className="w-full max-w-sm rounded-[2rem] shadow-2xl glass-panel-heavy object-cover aspect-square" />
                        <div className="absolute bottom-1/3 left-1/2 -translate-x-1/2 bg-black/60 px-4 py-2 rounded-full text-sm text-gray-300 backdrop-blur-md border border-white/10">
                            Modelo 3D no disponible aún
                        </div>
                    </div>
                )}
            </div>

            {/* Info Panel Bottom */}
            <div className="glass-panel-heavy border-t border-[var(--glass-border)] rounded-t-[40px] p-6 relative z-30 shadow-[0_-20px_50px_rgba(0,0,0,0.5)] transform transition-transform">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-white/10 rounded-full mt-3"></div>

                <div className="flex justify-between items-end mb-4 mt-2">
                    <div>
                        <h2 className="font-tech text-3xl m-0 uppercase leading-none text-neon-cyan">{product.name}</h2>
                        <span className="text-neon-pink text-xs font-bold tracking-wider mt-1 block">{product.subtitle}</span>
                    </div>
                    <div className="text-right">
                        <span className="font-tech text-3xl font-bold text-neon-cyan block leading-none">${product.price}</span>
                        <span className="text-[10px] text-gray-400 uppercase tracking-widest">{product.currency}</span>
                    </div>
                </div>

                <div className="flex gap-2 mb-4 overflow-x-auto hide-scrollbar">
                    {product.tags.map((tag, i) => (
                        <div key={i} className={`whitespace-nowrap text-xs px-3 py-1 rounded-md flex items-center gap-1 border ${tag.highlight
                            ? 'border-[var(--color-primary-cyan)] text-[var(--color-primary-cyan)] bg-[var(--color-primary-cyan)]/5'
                            : 'border-white/5 text-gray-300 bg-white/5'
                            }`}>
                            {tag.text}
                        </div>
                    ))}
                </div>

                <p className="text-sm leading-relaxed text-gray-400 mb-6 line-clamp-3">
                    {product.description}
                    {product.modelGlb && (
                        <><br /><span className="text-[var(--color-primary-cyan)] text-[10px]">* Toca la pantalla para rotar 360°</span></>
                    )}
                </p>

                <div className="relative mt-8">
                    {/* Add a glowing behind the button */}
                    <div className="absolute inset-0 bg-[var(--color-primary-cyan)] blur-[25px] opacity-30 rounded-xl pointer-events-none"></div>
                    <button
                        className="w-full bg-[var(--color-dark-bg)] text-neon-cyan box-neon-cyan-strong font-tech font-bold text-base py-4 rounded-xl flex items-center justify-center gap-3 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,243,255,0.6)] transition-all disabled:opacity-50 disabled:hover:translate-y-0 relative z-10"
                        onClick={handleToggleAR}
                        disabled={!product.modelGlb}
                    >
                        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>
                        {product.modelGlb ? 'PROBAR EN MI MESA (AR)' : 'SOLO IMAGEN'}
                    </button>
                </div>
            </div>

            {/* Modal QR Code */}
            <div className={`fixed inset-0 bg-black/85 backdrop-blur-md z-[1000] flex items-center justify-center transition-opacity duration-300 p-4 ${showQRModal ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                <div className={`glass-panel p-8 rounded-3xl text-center max-w-sm w-full relative transform transition-transform duration-300 ${showQRModal ? 'scale-100' : 'scale-90'} shadow-[0_0_50px_rgba(0,243,255,0.15)]`}>
                    <button
                        className="absolute top-4 right-4 text-white hover:text-[var(--color-primary-cyan)] transition-colors text-2xl"
                        onClick={() => setShowQRModal(false)}
                    >&times;</button>
                    <h3 className="font-tech text-[var(--color-primary-cyan)] text-xl mb-2 mt-0">Experiencia AR</h3>
                    <p className="text-sm text-gray-300 mb-6">Escanea este código con tu celular para ver este modelo 3D en tu mesa.</p>
                    <img src={qrUrl} alt="QR Code" className="w-48 h-48 mx-auto rounded-xl border-2 border-[var(--color-primary-cyan)] p-2 bg-white mb-4" />
                    <p className="text-xs text-gray-500">Asegúrate de estar navegando desde el mismo Wi-Fi si es local.</p>
                </div>
            </div>

            {/* Toast Notification */}
            <div
                className="fixed bottom-24 left-1/2 -translate-x-1/2 bg-[var(--color-primary-cyan)]/90 text-black px-6 py-3 rounded-full font-tech font-bold z-[2000] shadow-[0_0_20px_rgba(0,243,255,0.5)] transition-opacity duration-300 pointer-events-none"
                style={{ opacity: toastMessage ? 1 : 0 }}
            >
                {toastMessage}
            </div>

        </div>
    );
};

export default ProductDetail;
