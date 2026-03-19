import React, { useState, useMemo } from 'react';

const ALL_LANGUAGES = [
    { code: 'pt', label: 'Português', flag: '🇧🇷', priority: true },
    { code: 'fr', label: 'Français', flag: '🇫🇷', priority: true },
    { code: 'it', label: 'Italiano', flag: '🇮🇹', priority: true },
    { code: 'en', label: 'English', flag: '🇬🇧', priority: true },
    { code: 'es', label: 'Español', flag: '🇦🇷', priority: true },
    { code: 'af', label: 'Afrikáans', flag: '🇿🇦' },
    { code: 'sq', label: 'Albanés', flag: '🇦🇱' },
    { code: 'am', label: 'Amárico', flag: '🇪🇹' },
    { code: 'ar', label: 'Árabe', flag: '🇸🇦' },
    { code: 'hy', label: 'Armenio', flag: '🇦🇲' },
    { code: 'az', label: 'Azerbaiyano', flag: '🇦🇿' },
    { code: 'eu', label: 'Vasco (Euskera)', flag: '🏴󠁥󠁳󠁰󠁶󠁿' },
    { code: 'be', label: 'Bielorruso', flag: '🇧🇾' },
    { code: 'bn', label: 'Bengalí', flag: '🇧🇩' },
    { code: 'bs', label: 'Bosanski', flag: '🇧🇦' },
    { code: 'bg', label: 'Búlgaro', flag: '🇧🇬' },
    { code: 'ca', label: 'Catalán', flag: '🏴󠁥󠁳󠁣󠁴󠁿' },
    { code: 'ceb', label: 'Cebuano', flag: '🇵🇭' },
    { code: 'zh-CN', label: 'Chino Simplificado', flag: '🇨🇳' },
    { code: 'zh-TW', label: 'Chino Tradicional', flag: '🇹🇼' },
    { code: 'co', label: 'Corso', flag: '🇫🇷' },
    { code: 'hr', label: 'Croata', flag: '🇭🇷' },
    { code: 'cs', label: 'Checo', flag: '🇨🇿' },
    { code: 'da', label: 'Danés', flag: '🇩🇰' },
    { code: 'nl', label: 'Neerlandés', flag: '🇳🇱' },
    { code: 'eo', label: 'Esperanto', flag: '🌍' },
    { code: 'et', label: 'Estonio', flag: '🇪🇪' },
    { code: 'fi', label: 'Finlandés', flag: '🇫🇮' },
    { code: 'fy', label: 'Frisón', flag: '🇳🇱' },
    { code: 'gl', label: 'Gallego', flag: '🇪🇸' },
    { code: 'ka', label: 'Georgiano', flag: '🇬🇪' },
    { code: 'de', label: 'Alemán', flag: '🇩🇪' },
    { code: 'el', label: 'Griego', flag: '🇬🇷' },
    { code: 'gu', label: 'Gujarati', flag: '🇮🇳' },
    { code: 'ht', label: 'Haitiano', flag: '🇭🇹' },
    { code: 'ha', label: 'Hausa', flag: '🇳🇬' },
    { code: 'haw', label: 'Hawaiano', flag: '🇺🇸' },
    { code: 'iw', label: 'Hebreo', flag: '🇮🇱' },
    { code: 'hi', label: 'Hindi', flag: '🇮🇳' },
    { code: 'hmn', label: 'Hmong', flag: '🌏' },
    { code: 'hu', label: 'Húngaro', flag: '🇭🇺' },
    { code: 'is', label: 'Islandés', flag: '🇮🇸' },
    { code: 'ig', label: 'Igbo', flag: '🇳🇬' },
    { code: 'id', label: 'Indonesio', flag: '🇮🇩' },
    { code: 'ga', label: 'Irlandés', flag: '🇮🇪' },
    { code: 'ja', label: 'Japonés', flag: '🇯🇵' },
    { code: 'jw', label: 'Javanés', flag: '🇮🇩' },
    { code: 'kn', label: 'Kannada', flag: '🇮🇳' },
    { code: 'kk', label: 'Kazajo', flag: '🇰🇿' },
    { code: 'km', label: 'Jemer', flag: '🇰🇭' },
    { code: 'rw', label: 'Kinyarwanda', flag: '🇷🇼' },
    { code: 'ko', label: 'Coreano', flag: '🇰🇷' },
    { code: 'ku', label: 'Kurdo', flag: '🇮🇶' },
    { code: 'ky', label: 'Kirguís', flag: '🇰🇬' },
    { code: 'lo', label: 'Laosiano', flag: '🇱🇦' },
    { code: 'lv', label: 'Letón', flag: '🇱🇻' },
    { code: 'lt', label: 'Lituano', flag: '🇱🇹' },
    { code: 'lb', label: 'Luxemburgués', flag: '🇱🇺' },
    { code: 'mk', label: 'Macedonio', flag: '🇲🇰' },
    { code: 'mg', label: 'Malagasy', flag: '🇲🇬' },
    { code: 'ms', label: 'Malayo', flag: '🇲🇾' },
    { code: 'ml', label: 'Malayalam', flag: '🇮🇳' },
    { code: 'mt', label: 'Maltés', flag: '🇲🇹' },
    { code: 'mi', label: 'Maorí', flag: '🇳🇿' },
    { code: 'mr', label: 'Maratí', flag: '🇮🇳' },
    { code: 'mn', label: 'Mongol', flag: '🇲🇳' },
    { code: 'my', label: 'Birmano', flag: '🇲🇲' },
    { code: 'ne', label: 'Nepalés', flag: '🇳🇵' },
    { code: 'no', label: 'Noruego', flag: '🇳🇴' },
    { code: 'ny', label: 'Chichewa', flag: '🇲🇼' },
    { code: 'or', label: 'Oriya', flag: '🇮🇳' },
    { code: 'ps', label: 'Pastún', flag: '🇦🇫' },
    { code: 'fa', label: 'Persa', flag: '🇮🇷' },
    { code: 'pl', label: 'Polaco', flag: '🇵🇱' },
    { code: 'pa', label: 'Punjabi', flag: '🇮🇳' },
    { code: 'ro', label: 'Rumano', flag: '🇷🇴' },
    { code: 'ru', label: 'Ruso', flag: '🇷🇺' },
    { code: 'sm', label: 'Samoano', flag: '🇼🇸' },
    { code: 'gd', label: 'Gaélico Escocés', flag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿' },
    { code: 'sr', label: 'Serbio', flag: '🇷🇸' },
    { code: 'st', label: 'Sesoto', flag: '🇱🇸' },
    { code: 'sn', label: 'Shona', flag: '🇿🇼' },
    { code: 'sd', label: 'Sindhi', flag: '🇵🇰' },
    { code: 'si', label: 'Cingalés', flag: '🇱🇰' },
    { code: 'sk', label: 'Eslovaco', flag: '🇸🇰' },
    { code: 'sl', label: 'Esloveno', flag: '🇸🇮' },
    { code: 'so', label: 'Somalí', flag: '🇸🇴' },
    { code: 'su', label: 'Sundanés', flag: '🇮🇩' },
    { code: 'sw', label: 'Suajili', flag: '🇰🇪' },
    { code: 'sv', label: 'Sueco', flag: '🇸🇪' },
    { code: 'tl', label: 'Filipino', flag: '🇵🇭' },
    { code: 'tg', label: 'Tayiko', flag: '🇹🇯' },
    { code: 'ta', label: 'Tamil', flag: '🇮🇳' },
    { code: 'tt', label: 'Tártaro', flag: '🇷🇺' },
    { code: 'te', label: 'Telugu', flag: '🇮🇳' },
    { code: 'th', label: 'Tailandés', flag: '🇹🇭' },
    { code: 'tr', label: 'Turco', flag: '🇹🇷' },
    { code: 'tk', label: 'Turcomano', flag: '🇹🇲' },
    { code: 'uk', label: 'Ucraniano', flag: '🇺🇦' },
    { code: 'ur', label: 'Urdu', flag: '🇵🇰' },
    { code: 'ug', label: 'Uigur', flag: '🇨🇳' },
    { code: 'uz', label: "O'zbek", flag: '🇺🇿' },
    { code: 'vi', label: 'Vietnamita', flag: '🇻🇳' },
    { code: 'cy', label: 'Galés', flag: '🏴󠁧󠁢󠁷󠁬󠁳󠁿' },
    { code: 'xh', label: 'isiXhosa', flag: '🇿🇦' },
    { code: 'yi', label: 'Yídish', flag: '🌍' },
    { code: 'yo', label: 'Yoruba', flag: '🇳🇬' },
    { code: 'zu', label: 'Zulú', flag: '🇿🇦' },
];

const changeLanguage = (langCode) => {
    const eraseCookie = (name) => {
        document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=' + window.location.hostname;
    };
    eraseCookie('googtrans');
    if (langCode !== 'es') document.cookie = `googtrans=/es/${langCode}; path=/`;
    window.location.reload();
};

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

const CategoryList = ({ categories, onSelectCategory }) => {
    const [showLangPanel, setShowLangPanel] = useState(false);
    const [activeLang, setActiveLang] = useState('es');
    const [search, setSearch] = useState('');

    const filteredLangs = useMemo(() => {
        const q = search.toLowerCase().trim();
        if (!q) return ALL_LANGUAGES;
        return ALL_LANGUAGES.filter(l => l.label.toLowerCase().includes(q) || l.code.toLowerCase().includes(q));
    }, [search]);

    const handleLangSelect = (code) => {
        setActiveLang(code); changeLanguage(code); setShowLangPanel(false); setSearch('');
    };

    return (
        <div className="min-h-screen w-full flex flex-col pt-8 pb-12 px-4 md:px-8 max-w-lg mx-auto relative"
            style={{ background: BG }}>

            {/* Grid – white lines */}
            <div className="fixed inset-0 pointer-events-none z-0" style={GRID} />

            {/* Ambient glows */}
            <div className="fixed top-[-15%] right-[-10%] w-72 h-72 rounded-full pointer-events-none z-0"
                style={{ background: `radial-gradient(circle, rgba(255,16,96,0.20) 0%, transparent 65%)`, filter: 'blur(60px)' }} />
            <div className="fixed bottom-[-10%] left-[-10%] w-64 h-64 rounded-full pointer-events-none z-0"
                style={{ background: `radial-gradient(circle, rgba(224,80,216,0.15) 0%, transparent 60%)`, filter: 'blur(55px)' }} />

            <div className="relative z-10 flex flex-col flex-1">

                {/* ── Header ── */}
                <header className="mb-8 flex justify-between items-center px-2">
                    <div>
                        <p className="text-[10px] font-tech tracking-[0.4em] uppercase mb-0.5"
                            style={{ color: NW, textShadow: `0 0 8px ${NW}, 0 0 20px rgba(255,16,96,0.35)` }}>
                            ◈ BIENVENIDO ◈
                        </p>
                        <h2 className="text-4xl font-tech font-black tracking-widest leading-none"
                            style={{
                                color: CREAM, textShadow: `0 0 16px rgba(255,16,96,0.28)`,
                                WebkitTextStroke: `0.5px rgba(255,16,96,0.40)`
                            }}>
                            MENÚ
                        </h2>
                    </div>

                    {/* Hamburger */}
                    <div
                        className="w-11 h-11 rounded-xl flex flex-col justify-center items-center gap-[5px] cursor-pointer transition-all duration-200"
                        style={{
                            background: 'rgba(255,255,255,0.07)',
                            backdropFilter: 'blur(12px)',
                            border: `1px solid rgba(255,16,96,0.40)`,
                            boxShadow: `0 0 12px rgba(255,16,96,0.20)`
                        }}
                        onClick={() => { setShowLangPanel(v => !v); setSearch(''); }}
                    >
                        <span className="w-4 h-0.5 rounded" style={{ background: CREAM }} />
                        <span className="w-4 h-0.5 rounded" style={{ background: CREAM }} />
                        <span className="w-3 h-0.5 rounded" style={{ background: CREAM }} />
                    </div>
                </header>

                {/* Neon divider */}
                <div style={{
                    height: '1.5px', marginBottom: '24px', marginLeft: '8px', marginRight: '8px',
                    background: `linear-gradient(90deg, transparent, ${NW}, ${NP}, transparent)`,
                    boxShadow: `0 0 8px rgba(255,16,96,0.55)`
                }} />

                {/* ── Language Panel ── */}
                {showLangPanel && (
                    <div className="fixed inset-0 z-50 flex items-end justify-center"
                        onClick={() => setShowLangPanel(false)}>
                        <div
                            className="w-full max-w-lg rounded-t-[2rem] p-5 pb-8 shadow-2xl"
                            style={{
                                background: 'rgba(44,10,24,0.97)',
                                backdropFilter: 'blur(20px)',
                                borderTop: `2px solid ${NW}`,
                                boxShadow: `0 -16px 50px rgba(255,16,96,0.22)`
                            }}
                            onClick={e => e.stopPropagation()}
                        >
                            <div className="w-12 h-1 rounded-full mx-auto mb-4"
                                style={{
                                    background: `linear-gradient(90deg, ${NW}, ${NP})`,
                                    boxShadow: `0 0 10px rgba(255,16,96,0.60)`
                                }} />

                            <p className="text-[10px] font-tech uppercase tracking-[0.3em] font-bold text-center mb-3"
                                style={{ color: NW, textShadow: `0 0 6px ${NW}` }}>
                                🌐 Seleccioná el idioma
                            </p>

                            <div className="relative mb-3">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm" style={{ color: NW }}>🔍</span>
                                <input
                                    type="text" value={search}
                                    onChange={e => setSearch(e.target.value)}
                                    placeholder="Buscar idioma..."
                                    className="w-full rounded-xl py-2.5 pl-9 pr-4 text-sm focus:outline-none"
                                    style={{
                                        background: 'rgba(255,255,255,0.07)',
                                        border: `1px solid rgba(255,16,96,0.30)`,
                                        color: CREAM
                                    }}
                                />
                            </div>

                            <div className="flex flex-col gap-2 overflow-y-auto max-h-64 hide-scrollbar">
                                {filteredLangs.length === 0 && (
                                    <p className="text-center py-4 text-sm" style={{ color: CREAM_M }}>
                                        No se encontró ningún idioma
                                    </p>
                                )}
                                {filteredLangs.map(lang => (
                                    <button
                                        key={lang.code}
                                        onClick={() => handleLangSelect(lang.code)}
                                        className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-semibold tracking-wide transition-all duration-150"
                                        style={activeLang === lang.code ? {
                                            background: `rgba(255,16,96,0.15)`,
                                            border: `1px solid ${NW}`,
                                            color: CREAM,
                                            boxShadow: `0 0 10px rgba(255,16,96,0.18)`
                                        } : {
                                            background: 'rgba(255,255,255,0.05)',
                                            border: `1px solid rgba(255,16,96,0.20)`,
                                            color: CREAM_M
                                        }}
                                    >
                                        <span className="text-xl w-7 shrink-0">{lang.flag}</span>
                                        <span className="truncate">{lang.label}</span>
                                        {activeLang === lang.code && (
                                            <span className="ml-auto" style={{ color: NW, textShadow: `0 0 6px ${NW}` }}>✓</span>
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* ── Category Cards ── */}
                <div className="flex flex-col gap-4 flex-1">
                    {categories.map((cat) => (
                        <div key={cat.id} className="card-rotating-border w-full">
                            <div
                                className="w-full h-44 rounded-[1.9rem] cursor-pointer relative overflow-hidden transform transition-all duration-300 hover:scale-[1.01] active:scale-95 group"
                                style={{
                                    background: 'rgba(255,255,255,0.07)',
                                    backdropFilter: 'blur(14px)',
                                    border: '1px solid rgba(255,255,255,0.10)',
                                    boxShadow: '0 4px 20px rgba(0,0,0,0.30), inset 0 1px 0 rgba(255,255,255,0.08)'
                                }}
                                onClick={() => onSelectCategory(cat)}
                            >
                                {/* Image */}
                                <div className="absolute right-0 top-0 bottom-0 w-3/5 opacity-50 transition-opacity duration-300 group-hover:opacity-70">
                                    <div className="absolute inset-y-0 left-0 w-36 z-10"
                                        style={{ background: `linear-gradient(to right, rgba(50,12,26,0.95), transparent)` }} />
                                    <img src={cat.image} alt={cat.name} className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-25 transition-opacity duration-500"
                                        style={{ background: `linear-gradient(135deg, ${NW}, ${NP})`, mixBlendMode: 'overlay' }} />
                                </div>

                                {/* Text */}
                                <div className="absolute inset-0 p-6 flex flex-col justify-center z-20 w-3/4">
                                    <h3 className="font-tech text-2xl font-bold mb-2 tracking-tight"
                                        style={{ color: CREAM }}>
                                        {cat.name}
                                    </h3>
                                    <p className="text-sm leading-snug line-clamp-2 pr-4" style={{ color: CREAM_M }}>
                                        {cat.subtitle}
                                    </p>
                                    <div
                                        className="mt-4 text-xs font-tech font-bold tracking-widest uppercase flex items-center gap-2 transform translate-x-0 group-hover:translate-x-2 transition-all duration-300"
                                        style={{ color: NW, textShadow: `0 0 8px rgba(255,16,96,0.55)` }}
                                    >
                                        Explorar
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Corner LED */}
                                <div className="absolute top-3 right-3 w-2 h-2 rounded-full z-30"
                                    style={{ background: NW, boxShadow: `0 0 8px ${NW}, 0 0 18px rgba(255,16,96,0.60)` }} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CategoryList;
