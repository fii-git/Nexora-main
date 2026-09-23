import React from 'react';

export const Partners: React.FC = () => {
  /*
   * Logo dibuat dua kali agar animasi bisa berjalan
   * secara seamless / infinite tanpa terlihat reset.
   */
  const logos = [
    {
      type: 'layers',
      name: 'LOGO',
      suffix: 'IPSUM',
    },
    {
      type: 'circle',
      name: 'LOGOIPSUM',
      suffix: '',
    },
    {
      type: 'bars',
      name: 'logoipsum*',
      suffix: '',
    },
    {
      type: 'clock',
      name: 'logoipsum',
      suffix: '',
    },
    {
      type: 'square',
      name: 'LOGO',
      suffix: '',
    },
    {
      type: 'dashed',
      name: 'logoipsum',
      suffix: '',
    },
  ];

  /*
   * Satu set logo.
   */
  const LogoSet = () => (
    <div
      className="
        flex
        shrink-0
        items-center
        gap-14
        pr-14
        sm:gap-20
        sm:pr-20
        lg:gap-24
        lg:pr-24
      "
    >
      {logos.map((logo, index) => (
        <div
          key={`${logo.name}-${index}`}
          className="
            flex
            shrink-0
            items-center
            gap-2.5
            whitespace-nowrap
            text-slate-500
            transition-all
            duration-300
            hover:text-slate-900
          "
        >
          {/* Logo 1 */}
          {logo.type === 'layers' && (
            <svg
              className="h-7 w-7"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          )}

          {/* Logo 2 */}
          {logo.type === 'circle' && (
            <div
              className="
                flex
                h-6
                w-6
                items-center
                justify-center
                rounded-full
                border-2
                border-current
              "
            >
              <div className="h-2.5 w-2.5 rounded-full bg-current" />
            </div>
          )}

          {/* Logo 3 */}
          {logo.type === 'bars' && (
            <div className="flex items-center gap-1">
              <span className="h-6 w-2 rounded-full bg-current" />
              <span className="h-4 w-2 rounded-full bg-current" />
            </div>
          )}

          {/* Logo 4 */}
          {logo.type === 'clock' && (
            <div
              className="
                flex
                h-7
                w-7
                items-center
                justify-center
                rounded-full
                border-2
                border-current
                text-[10px]
                font-bold
              "
            >
              L
            </div>
          )}

          {/* Logo 5 */}
          {logo.type === 'square' && (
            <span
              className="
                flex
                h-6
                w-6
                items-center
                justify-center
                border-2
                border-current
                text-[10px]
                font-black
              "
            >
              L
            </span>
          )}

          {/* Logo 6 */}
          {logo.type === 'dashed' && (
            <div
              className="
                flex
                h-7
                w-7
                items-center
                justify-center
                rounded-full
                border-2
                border-dashed
                border-current
              "
            >
              <div className="h-2.5 w-2.5 rounded-full bg-current" />
            </div>
          )}

          {/* Logo Text */}
          <span
            className={`
              ${
                index === 0
                  ? 'text-lg font-extrabold tracking-wider'
                  : index === 1
                  ? 'text-sm font-bold tracking-[0.18em]'
                  : index === 2
                  ? 'text-base font-bold tracking-tight'
                  : index === 3
                  ? 'text-sm font-semibold tracking-wide'
                  : index === 4
                  ? 'text-lg font-black tracking-widest'
                  : 'text-sm font-bold tracking-tight'
              }
            `}
          >
            {logo.name}

            {logo.suffix && (
              <span className="font-light text-slate-400">
                {logo.suffix}
              </span>
            )}
          </span>
        </div>
      ))}
    </div>
  );

  return (
    <section
      id="partners"
      className="
        relative
        overflow-hidden
        border-b
        border-slate-100
        bg-white
        py-14
        sm:py-16
      "
    >
      {/* Subtle Background Glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-32
          w-96
          -translate-x-1/2
          rounded-full
          bg-[#2587FF]/5
          blur-3xl
        "
      />

      <div className="relative">

        {/* =========================================
            HEADING
        ========================================== */}
        <div className="mx-auto mb-9 max-w-7xl px-4 sm:px-6 lg:px-8">
          <h3
            id="partners-heading"
            className="
              text-center
              text-xl
              font-black
              tracking-tight
              text-slate-900
              sm:text-2xl
            "
          >
            Trusted By Many{' '}
            <span
              className="
                bg-gradient-to-r
                from-[#2587FF]
                to-[#8B3DFF]
                bg-clip-text
                text-transparent
              "
            >
              Companies
            </span>
          </h3>
        </div>

        {/* =========================================
            MARQUEE
        ========================================== */}
        <div
          className="
            relative
            w-full
            overflow-hidden
          "
        >
          {/* Left Fade */}
          <div
            className="
              pointer-events-none
              absolute
              left-0
              top-0
              z-10
              h-full
              w-20
              bg-gradient-to-r
              from-white
              to-transparent
              sm:w-32
            "
          />

          {/* Right Fade */}
          <div
            className="
              pointer-events-none
              absolute
              right-0
              top-0
              z-10
              h-full
              w-20
              bg-gradient-to-l
              from-white
              to-transparent
              sm:w-32
            "
          />

          {/* Moving Track */}
          <div
            className="
              flex
              w-max
              animate-[partners-marquee_32s_linear_infinite]
              hover:[animation-play-state:paused]
            "
          >
            {/* First Set */}
            <LogoSet />

            {/* Duplicate Set */}
            <LogoSet />
          </div>
        </div>
      </div>

      {/* =========================================
          MARQUEE ANIMATION
      ========================================== */}
      <style>{`
        @keyframes partners-marquee {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};