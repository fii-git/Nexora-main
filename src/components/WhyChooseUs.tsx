
import React from 'react';
import { whyChooseUsFeatures } from '../data';
import {
  Globe,
  Wallet,
  Users,
  ShieldCheck,
  ArrowUpRight,
  Sparkles,
} from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const WhyChooseUs: React.FC = () => {
  const getFeatureIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe':
        return <Globe className="w-5 h-5" />;

      case 'Wallet':
        return <Wallet className="w-5 h-5" />;

      case 'Users':
        return <Users className="w-5 h-5" />;

      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5" />;

      default:
        return <Globe className="w-5 h-5" />;
    }
  };

  return (
    <section
      id="why-us"
      className="
        relative
        overflow-hidden
        bg-[#F8FAFF]
        py-20
        sm:py-24
        lg:py-28
      "
    >
      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-48
          top-20
          h-96
          w-96
          rounded-full
          bg-[#1E3A5F]/10
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-48
          bottom-0
          h-[450px]
          w-[450px]
          rounded-full
          bg-[#E26D13]/10
          blur-3xl
        "
      />

      <div
        className="
          relative
          mx-auto
          max-w-7xl
          px-4
          sm:px-6
          lg:px-8
        "
      >
        {/* =====================================================
            MAIN GRID
        ====================================================== */}

        <div
          className="
            grid
            grid-cols-1
            items-center
            gap-14
            lg:grid-cols-12
            lg:gap-16
          "
        >
          {/* =================================================
              LEFT VISUAL
          ================================================== */}

          <ScrollReveal
            className="lg:col-span-5"
            y={25}
            duration={1000}
          >
            <div className="relative mx-auto w-full max-w-[430px]">

              {/* Glow */}
              <div
                className="
                  absolute
                  -inset-5
                  rounded-[40px]
                  bg-gradient-to-br
                  from-[#1E3A5F]/20
                  to-[#E26D13]/20
                  blur-2xl
                "
              />

              {/* Image Container */}
              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[36px]
                  border
                  border-white
                  bg-white
                  p-2
                  shadow-[0_25px_70px_rgba(25,55,100,0.12)]
                "
              >
                <div
                  className="
                    relative
                    aspect-[4/5]
                    overflow-hidden
                    rounded-[28px]
                  "
                >
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop"
                    alt="NEXORA team collaborating on digital strategy"
                    className="
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-700
                      hover:scale-105
                    "
                    loading="lazy"
                  />

                  {/* Image Overlay */}
                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-[#121E36]/60
                      via-transparent
                      to-transparent
                    "
                  />

                  {/* Image Label */}
                  <div
                    className="
                      absolute
                      bottom-5
                      left-5
                      right-5
                      rounded-2xl
                      border
                      border-white/20
                      bg-white/10
                      p-4
                      backdrop-blur-xl
                    "
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="
                          flex
                          h-10
                          w-10
                          items-center
                          justify-center
                          rounded-full
                          bg-gradient-to-br
                          from-[#E26D13]
                          to-[#EAA412]
                          text-white
                        "
                      >
                        <Sparkles className="h-5 w-5" />
                      </div>

                      <div>
                        <p className="text-xs font-semibold text-white/70">
                          NEXORA DIGITAL AGENCY
                        </p>

                        <p className="mt-0.5 text-sm font-bold text-white">
                          Built for what&apos;s next.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* =================================================
                  FLOATING EXPERIENCE CARD
              ================================================== */}

              <div
                className="
                  absolute
                  -bottom-6
                  -right-5
                  w-[180px]
                  rounded-2xl
                  border
                  border-[#DCE7FA]
                  bg-white/95
                  p-4
                  shadow-[0_15px_40px_rgba(25,55,100,0.12)]
                  backdrop-blur-xl
                  sm:-right-8
                "
              >
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#7A8496]">
                    DIGITAL FOCUS
                  </span>

                  <ArrowUpRight className="h-4 w-4 text-[#E26D13]" />
                </div>

                <div className="flex items-end gap-1">
                  <span
                    className="
                      bg-gradient-to-r
                      from-[#121E36]
                      to-[#E26D13]
                      bg-clip-text
                      text-2xl
                      font-black
                      text-transparent
                    "
                  >
                    100%
                  </span>

                  <span className="mb-1 text-xs text-[#7A8496]">
                    focused
                  </span>
                </div>

                <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-[#EDF2FA]">
                  <div
                    className="
                      h-full
                      w-full
                      rounded-full
                      bg-gradient-to-r
                      from-[#E26D13]
                      to-[#EAA412]
                    "
                  />
                </div>
              </div>

              {/* Decorative Circle */}
              <div
                className="
                  absolute
                  -left-5
                  -top-5
                  h-12
                  w-12
                  rounded-full
                  border
                  border-[#EAA412]/30
                  bg-white
                  shadow-lg
                "
              />

              <div
                className="
                  absolute
                  -left-2
                  -top-2
                  h-6
                  w-6
                  rounded-full
                  bg-gradient-to-br
                  from-[#E26D13]
                  to-[#EAA412]
                "
              />
            </div>
          </ScrollReveal>

          {/* =================================================
              RIGHT CONTENT
          ================================================== */}

          <div className="lg:col-span-7">

            {/* Label */}
            <ScrollReveal
              y={20}
              duration={1000}
            >
              <div
                id="why-choose-us-badge"
                className="
                  mb-5
                  inline-flex
                  items-center
                  gap-2
                "
              >
                <span
                  className="
                    h-[2px]
                    w-10
                    bg-gradient-to-r
                    from-[#E26D13]
                    to-[#EAA412]
                  "
                />

                <span
                  className="
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.22em]
                    text-[#1E3A5F]
                    sm:text-sm
                  "
                >
                  Why Choose NEXORA
                </span>
              </div>
            </ScrollReveal>

            {/* Heading + Description */}
            <ScrollReveal
              delay={100}
              y={25}
              duration={1000}
            >
              <h2
                id="why-choose-us-heading"
                className="
                  max-w-2xl
                  text-3xl
                  font-black
                  leading-[1.12]
                  tracking-tight
                  text-[#111114]
                  sm:text-4xl
                  lg:text-[50px]
                "
              >
                More Than Just
                <br className="hidden sm:block" />

                <span
                  className="
                    bg-gradient-to-r
                    from-[#121E36]
                    via-[#1E3A5F]
                    to-[#E26D13]
                    bg-clip-text
                    text-transparent
                  "
                >
                  A Digital Agency.
                </span>
              </h2>

              <p
                id="why-choose-us-desc"
                className="
                  mt-6
                  max-w-2xl
                  text-sm
                  leading-7
                  text-[#667085]
                  sm:text-base
                "
              >
                Kami bukan hanya membangun produk digital. Kami membantu bisnis menemukan strategi, menciptakan pengalaman, dan menghadirkan solusi digital yang memberikan dampak nyata.
              </p>
            </ScrollReveal>

            {/* =================================================
                FEATURES
            ================================================== */}

            <div
              className="
                mt-10
                grid
                grid-cols-1
                gap-4
                sm:grid-cols-2
              "
            >
              {whyChooseUsFeatures.map((feat, idx) => (
                <ScrollReveal
                  key={idx}
                  delay={idx * 150}
                  y={25}
                  duration={1000}
                >
                  <div
                    className="
                      group
                      relative
                      overflow-hidden
                      rounded-2xl
                      border
                      border-[#E3EAF6]
                      bg-white
                      p-5
                      shadow-[0_8px_25px_rgba(25,55,100,0.04)]
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-[#E26D13]/40
                      hover:shadow-[0_15px_35px_rgba(226,109,19,0.10)]
                    "
                  >
                    {/* Number */}
                    <span
                      className="
                        absolute
                        right-4
                        top-3
                        text-4xl
                        font-black
                        text-[#F0F2F5]
                        transition-colors
                        duration-300
                        group-hover:text-[#EAA412]/20
                      "
                    >
                      0{idx + 1}
                    </span>

                    <div className="relative flex items-start gap-4">

                      {/* Icon */}
                      <div
                        className="
                          flex
                          h-11
                          w-11
                          shrink-0
                          items-center
                          justify-center
                          rounded-xl
                          bg-gradient-to-br
                          from-[#E26D13]
                          to-[#EAA412]
                          text-white
                          shadow-lg
                          shadow-[#E26D13]/15
                          transition-transform
                          duration-300
                          group-hover:scale-105
                        "
                      >
                        {getFeatureIcon(feat.iconName)}
                      </div>

                      {/* Text */}
                      <div>
                        <h3
                          className="
                            mb-1.5
                            text-sm
                            font-extrabold
                            text-[#111114]
                            sm:text-base
                          "
                        >
                          {feat.title}
                        </h3>

                        <p
                          className="
                            text-xs
                            leading-6
                            text-[#737B8C]
                            sm:text-sm
                          "
                        >
                          {feat.description}
                        </p>
                      </div>
                    </div>

                    {/* Bottom Accent */}
                    <div
                      className="
                        absolute
                        bottom-0
                        left-0
                        h-[2px]
                        w-0
                        bg-gradient-to-r
                        from-[#E26D13]
                        to-[#EAA412]
                        transition-all
                        duration-500
                        group-hover:w-full
                      "
                    />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
