import React from 'react';

export const Partners: React.FC = () => {
  return (
    <section id="partners" className="py-14 bg-white border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3
          id="partners-heading"
          className="text-center text-xl sm:text-2xl font-black text-neutral-900 mb-8 sm:mb-10 tracking-tight"
        >
          Trusted By Many Company
        </h3>

        {/* Logos Grid / Flex */}
        <div className="flex flex-wrap items-center justify-center sm:justify-between gap-6 sm:gap-8 opacity-75 grayscale hover:grayscale-0 transition-all duration-300">
          {/* Logo 1 */}
          <div className="flex items-center gap-2 hover:opacity-100 transition-opacity">
            <svg className="w-7 h-7 text-neutral-800" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
            <span className="font-extrabold text-lg tracking-wider text-neutral-800">LOGO<span className="text-neutral-500 font-light">IPSUM</span></span>
          </div>

          {/* Logo 2 */}
          <div className="flex items-center gap-2 hover:opacity-100 transition-opacity">
            <div className="w-5 h-5 rounded-full border-2 border-neutral-800 flex items-center justify-center">
              <div className="w-2 h-2 bg-neutral-800 rounded-full" />
            </div>
            <span className="font-bold text-sm tracking-widest text-neutral-700">LOGOIPSUM</span>
          </div>

          {/* Logo 3 */}
          <div className="flex items-center gap-2 hover:opacity-100 transition-opacity">
            <div className="flex gap-1">
              <span className="w-2 h-5 bg-neutral-800 rounded-full inline-block" />
              <span className="w-2 h-3.5 bg-neutral-800 rounded-full inline-block mt-1" />
            </div>
            <span className="font-bold text-base tracking-tight text-neutral-800">logoipsum*</span>
          </div>

          {/* Logo 4 */}
          <div className="flex items-center gap-2 hover:opacity-100 transition-opacity">
            <div className="w-6 h-6 rounded-full border-2 border-neutral-800 flex items-center justify-center text-[10px] font-bold">
              L
            </div>
            <span className="font-semibold text-sm tracking-wide text-neutral-700">logoipsum</span>
          </div>

          {/* Logo 5 */}
          <div className="flex items-center gap-1.5 hover:opacity-100 transition-opacity">
            <span className="px-1.5 py-0.5 border border-neutral-800 text-xs font-black">L</span>
            <span className="font-black text-lg tracking-widest text-neutral-900">LOGO</span>
          </div>

          {/* Logo 6 */}
          <div className="flex items-center gap-2 hover:opacity-100 transition-opacity">
            <div className="w-6 h-6 rounded-full border-2 border-dashed border-neutral-800 flex items-center justify-center">
              <div className="w-2.5 h-2.5 bg-neutral-800 rounded-full" />
            </div>
            <span className="font-bold text-sm tracking-tight text-neutral-800">logoipsum</span>
          </div>
        </div>
      </div>
    </section>
  );
};
