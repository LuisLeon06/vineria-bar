import React from 'react';

const MenuList = ({ category, items, onSelectProduct, onBack }) => {
    // Filter items by the selected category ID
    const filteredItems = items.filter(item => item.category === category.id);

    return (
        <div className="min-h-screen w-full flex flex-col pt-8 pb-20 px-4 md:px-8 max-w-lg mx-auto bg-[var(--color-dark-bg)]">

            {/* Header */}
            <header className="mb-6 flex items-center gap-4">
                <button
                    onClick={onBack}
                    className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-white shrink-0 hover:bg-white/10 box-neon-cyan transition-colors"
                >
                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6"></path></svg>
                </button>
                <div className="flex-1">
                    <h2 className="text-xl font-bold tracking-wider font-tech text-neon-cyan uppercase drop-shadow-[0_0_10px_rgba(0,243,255,0.5)]">{category.name}</h2>
                    <p className="text-xs text-[var(--color-primary-cyan)] uppercase tracking-widest font-bold">{filteredItems.length} opciones</p>
                </div>
            </header>

            {/* List of Products */}
            <div className="flex flex-col gap-4">
                {filteredItems.length === 0 ? (
                    <p className="text-center text-gray-500 py-10 font-tech">Categoría en construcción...</p>
                ) : (
                    filteredItems.map((item) => (
                        <div
                            key={item.id}
                            className="glass-panel rounded-2xl p-4 flex gap-4 items-center cursor-pointer hover:bg-white/5 transition-colors relative"
                            onClick={() => onSelectProduct(item)}
                        >
                            {/* Image Thumbnail */}
                            <div className="w-24 h-24 rounded-xl overflow-hidden shrink-0 bg-black/50">
                                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                            </div>

                            {/* Info */}
                            <div className="flex-1 min-w-0 py-1">
                                <h3 className="font-bold text-lg leading-tight mb-1 truncate text-white">{item.name}</h3>
                                <p className="text-xs text-gray-400 line-clamp-2 mb-2 leading-relaxed">
                                    {item.description}
                                </p>
                                <div className="font-tech text-xl text-neon-cyan font-bold">
                                    ${item.price}
                                </div>
                            </div>

                            {/* Action Button */}
                            <button
                                className="w-10 h-10 rounded-full bg-[var(--color-dark-bg)] text-neon-cyan box-neon-cyan-strong flex items-center justify-center font-bold text-2xl hover:scale-110 transition-transform shrink-0"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    onSelectProduct(item);
                                }}
                            >
                                +
                            </button>

                            {/* 3D Badge Indicator */}
                            {item.modelGlb && (
                                <div className="absolute -top-2 -left-2 bg-[var(--color-dark-bg)] border border-[var(--color-accent-pink)] text-neon-pink text-[10px] px-2 py-0.5 rounded-full shadow-[0_0_15px_var(--color-accent-pink)] font-bold tracking-widest z-10">
                                    3D / AR
                                </div>
                            )}
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default MenuList;
