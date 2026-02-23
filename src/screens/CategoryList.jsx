import React from 'react';

const CategoryList = ({ categories, onSelectCategory }) => {
    return (
        <div className="min-h-screen w-full flex flex-col pt-8 pb-12 px-4 md:px-8 max-w-lg mx-auto bg-[var(--color-dark-bg)] text-white">

            {/* Header */}
            <header className="mb-8 flex justify-between items-center px-2">
                <h2 className="text-4xl font-bold font-tech text-neon-cyan tracking-widest">MENÚ</h2>
                <div className="w-10 h-10 rounded-full glass-panel box-neon-cyan flex flex-col justify-center items-center gap-1 cursor-pointer hover:shadow-[0_0_20px_rgba(0,243,255,0.6)] transition-shadow">
                    <span className="w-4 h-0.5 bg-white rounded shadow-[0_0_5px_#fff]"></span>
                    <span className="w-4 h-0.5 bg-white rounded shadow-[0_0_5px_#fff]"></span>
                    <span className="w-4 h-0.5 bg-white rounded shadow-[0_0_5px_#fff]"></span>
                </div>
            </header>

            {/* Category List */}
            <div className="flex flex-col gap-4 flex-1">
                {categories.map((cat) => (
                    <div
                        key={cat.id}
                        className="w-full h-44 rounded-[2rem] cursor-pointer relative overflow-hidden glass-panel transform transition-all duration-300 hover:scale-[1.02] hover:bg-white/5 hover:border-[var(--color-primary-cyan)] hover:shadow-[0_0_40px_rgba(0,243,255,0.4)] active:scale-95 group box-border"
                        onClick={() => onSelectCategory(cat)}
                    >
                        {/* Background Image (right side) */}
                        <div className="absolute right-0 top-0 bottom-0 w-3/5 opacity-50 transition-opacity duration-300 group-hover:opacity-80">
                            {/* Gradient to blend image smoothly into the glass panel on the left */}
                            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0a0f1e] to-transparent z-10"></div>
                            <img src={cat.image} alt={cat.name} className="w-full h-full object-cover origin-center" />
                            <div className="absolute inset-0 bg-[var(--color-primary-cyan)] mix-blend-overlay z-10 opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                        </div>

                        {/* Text Overlay */}
                        <div className="absolute inset-0 p-6 flex flex-col justify-center z-20 w-3/4">
                            <h3 className="font-tech text-3xl font-bold mb-2 tracking-tight text-white group-hover:text-neon-cyan transition-colors drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">{cat.name}</h3>
                            <p className="text-sm text-gray-300 leading-snug line-clamp-2 pr-4 drop-shadow-md">
                                {cat.subtitle}
                            </p>

                            {/* Button */}
                            <div className="mt-5 text-xs font-bold tracking-widest uppercase text-[var(--color-primary-cyan)] flex items-center gap-2 transform translate-x-0 group-hover:translate-x-2 group-hover:text-neon-cyan transition-all duration-300">
                                Explorar
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoryList;
