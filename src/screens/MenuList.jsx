import React from 'react';

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

const MenuList = ({ category, items, onSelectProduct, onBack }) => {
    const filteredItems = items.filter(item => item.category === category.id);

    return (
        <div className="min-h-screen w-full flex flex-col pt-8 pb-20 px-4 md:px-8 max-w-lg mx-auto relative"
            style={{ background: BG }}>

            {/* Grid – white lines */}
            <div className="fixed inset-0 pointer-events-none z-0" style={GRID} />

            {/* Ambient glow */}
            <div className="fixed bottom-[-10%] left-[-10%] w-80 h-80 rounded-full pointer-events-none z-0"
                style={{ background: `radial-gradient(circle, rgba(224,80,216,0.16) 0%, transparent 65%)`, filter: 'blur(55px)' }} />

            <div className="relative z-10 flex flex-col flex-1">

                {/* ── Header ── */}
                <header className="mb-6 flex items-center gap-4">
                    <button
                        onClick={onBack}
                        className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-all duration-200 hover:scale-105 active:scale-95"
                        style={{
                            background: 'rgba(255,255,255,0.07)',
                            backdropFilter: 'blur(12px)',
                            border: `1px solid rgba(255,16,96,0.40)`,
                            boxShadow: `0 0 12px rgba(255,16,96,0.20)`,
                            color: CREAM
                        }}
                    >
                        <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path d="M15 18l-6-6 6-6" />
                        </svg>
                    </button>

                    <div className="flex-1">
                        <h2 className="text-xl font-tech font-bold tracking-wider uppercase"
                            style={{ color: CREAM, textShadow: `0 0 12px rgba(255,16,96,0.28)` }}>
                            {category.name}
                        </h2>
                        <p className="text-[10px] font-tech uppercase tracking-widest font-semibold"
                            style={{ color: NW, textShadow: `0 0 6px ${NW}` }}>
                            ◈ {filteredItems.length} opciones disponibles
                        </p>
                    </div>
                </header>

                {/* Neon divider */}
                <div style={{
                    height: '1.5px', marginBottom: '20px',
                    background: `linear-gradient(90deg, transparent, ${NW}, ${NP}, transparent)`,
                    boxShadow: `0 0 8px rgba(255,16,96,0.55)`
                }} />

                {/* ── Products ── */}
                <div className="flex flex-col gap-4">
                    {filteredItems.length === 0 ? (
                        <p className="text-center py-10 font-tech text-sm" style={{ color: CREAM_MT }}>
                            Categoría en construcción...
                        </p>
                    ) : (
                        filteredItems.map((item) => (
                            <div
                                key={item.id}
                                className="rounded-2xl p-4 flex gap-4 items-center cursor-pointer relative overflow-hidden transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] group"
                                style={{
                                    background: 'rgba(255,255,255,0.07)',
                                    backdropFilter: 'blur(14px)',
                                    border: `1px solid rgba(255,16,96,0.22)`,
                                    boxShadow: '0 4px 16px rgba(0,0,0,0.30), inset 0 1px 0 rgba(255,255,255,0.06)'
                                }}
                                onClick={() => onSelectProduct(item)}
                            >
                                {/* Left neon bar */}
                                <div className="absolute left-0 top-4 bottom-4 w-0.5 rounded-full"
                                    style={{
                                        background: `linear-gradient(to bottom, ${NW}, ${NP})`,
                                        boxShadow: `0 0 8px ${NW}`
                                    }} />

                                {/* Thumbnail */}
                                <div className="w-24 h-24 rounded-xl overflow-hidden shrink-0 relative"
                                    style={{ border: `1px solid rgba(255,16,96,0.30)` }}>
                                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-25 transition-opacity duration-300"
                                        style={{ background: `linear-gradient(135deg, ${NW}, ${NP})`, mixBlendMode: 'overlay' }} />
                                </div>

                                {/* Info */}
                                <div className="flex-1 min-w-0 py-1 pl-1">
                                    <h3 className="font-tech font-bold text-base leading-tight mb-1 truncate"
                                        style={{ color: CREAM }}>
                                        {item.name}
                                    </h3>
                                    <p className="text-xs line-clamp-2 mb-2 leading-relaxed" style={{ color: CREAM_M }}>
                                        {item.description}
                                    </p>
                                    <div className="font-tech text-lg font-bold price-pulse">
                                        ${item.price}
                                    </div>
                                </div>

                                {/* + button */}
                                <button
                                    className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl hover:scale-110 active:scale-95 transition-all shrink-0"
                                    style={{
                                        background: `linear-gradient(135deg, ${NW}, ${NP})`,
                                        color: '#ffffff',
                                        boxShadow: `0 0 16px rgba(255,16,96,0.50)`
                                    }}
                                    onClick={(e) => { e.stopPropagation(); onSelectProduct(item); }}
                                >
                                    +
                                </button>

                                {/* 3D Badge */}
                                {item.modelGlb && (
                                    <div className="absolute -top-2 -left-2 text-[10px] px-2 py-0.5 rounded-full font-tech font-bold tracking-widest z-10"
                                        style={{
                                            background: 'rgba(44,10,24,0.95)',
                                            border: `1px solid ${NW}`,
                                            color: NW,
                                            textShadow: `0 0 6px ${NW}`,
                                            boxShadow: `0 0 10px rgba(255,16,96,0.35)`
                                        }}>
                                        3D / AR
                                    </div>
                                )}

                                {/* Corner LED */}
                                <div className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full"
                                    style={{ background: NW, boxShadow: `0 0 6px ${NW}` }} />
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default MenuList;
