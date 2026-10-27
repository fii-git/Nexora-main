
import React from "react";
import { Play, ArrowUpRight } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

interface VideoSectionProps {
  onPlayVideo: () => void;
  onOurStory: () => void;
}

export const VideoSection: React.FC<VideoSectionProps> = ({
  onPlayVideo,
  onOurStory,
}) => {
  return (
    <section
      id="about"
      className="relative py-20 sm:py-24 lg:py-28 bg-white overflow-hidden"
    >
      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <div className="absolute -top-32 right-[-150px] w-[450px] h-[450px] rounded-full bg-[#1E3A5F]/10 blur-[100px] pointer-events-none" />

      <div className="absolute bottom-[-200px] left-[-150px] w-[450px] h-[450px] rounded-full bg-[#E26D13]/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        {/* =================================================
            TOP CONTENT
        ================================================== */}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end mb-12 sm:mb-14">
          {/* LEFT */}

          <ScrollReveal className="lg:col-span-7">
            {/* Small label */}

            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-[2px] bg-gradient-to-r from-[#E26D13] to-[#EAA412]" />

              <span className="text-xs font-bold tracking-[0.18em] uppercase text-[#1E3A5F]">
                About YANKI
              </span>
            </div>

            {/* Heading */}

            <h2
              id="grow-business-heading"
              className="text-4xl sm:text-5xl lg:text-[52px] font-black text-[#111114] tracking-[-0.035em] leading-[1.05]"
            >
              We Turn Ideas Into{" "}
              <span className="bg-gradient-to-r from-[#121E36] via-[#1E3A5F] to-[#E26D13] bg-clip-text text-transparent">
                Digital Experiences.
              </span>
            </h2>
          </ScrollReveal>

          {/* RIGHT */}

          <ScrollReveal
            className="lg:col-span-5"
            delay={150}
            y={25}
          >
            <p className="text-slate-500 text-sm sm:text-base leading-7">
              Kami percaya setiap ide memiliki potensi untuk menjadi sesuatu yang luar biasa. YANKI menggabungkan kreativitas, strategi, dan teknologi untuk membangun solusi digital yang memperkuat brand, mendorong pertumbuhan bisnis, dan menciptakan masa depan yang lebih baik.
            </p>

            {/* Our Story */}

            <button
              id="our-story-btn"
              type="button"
              onClick={onOurStory}
              className="overflow-hidden group mt-6 inline-flex items-center gap-3 px-6 py-3 rounded-full text-white bg-linear-to-r from-[#E26D13] to-[#EAA412] shadow-lg shadow-[#E26D13]/20 hover:shadow-[#EAA412]/30 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
            >
              <span className="relative z-10">Our Story</span>

              <span className="absolute inset-0 bg-linear-to-r from-[#EAA412] to-[#E26D13] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <span className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center">
                <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
              </span>
            </button>
          </ScrollReveal>
        </div>

        {/* =================================================
            VIDEO BANNER
        ================================================== */}

        <ScrollReveal
          y={30}
          duration={1000}
        >
          <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-2xl border border-slate-100 group">
            {/* Image */}

            <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full bg-slate-900 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1800&auto=format&fit=crop"
                alt="YANKI team collaborating"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />

              {/* Navy / brand overlay */}

              <div className="absolute inset-0 bg-gradient-to-r from-[#121E36]/60 via-[#121E36]/20 to-[#1E3A5F]/30" />

              {/* Bottom dark gradient */}

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

              {/* Subtle brand glow */}

              <div className="absolute inset-0 bg-[#E26D13]/5 mix-blend-screen" />
            </div>

            {/* =================================================
                CENTER PLAY BUTTON
            ================================================== */}

            <div className="absolute inset-0 flex items-center justify-center">
              <button
                id="banner-play-video-btn"
                type="button"
                onClick={onPlayVideo}
                aria-label="Play YANKI presentation video"
                className="group/play w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/95 hover:bg-white text-[#E26D13] flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 cursor-pointer"
              >
                <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-[#E26D13] text-[#E26D13] translate-x-0.5" />
              </button>
            </div>

            {/* =================================================
                BOTTOM LEFT LABEL
            ================================================== */}

            <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8">
              <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] font-bold text-[#EAA412]">
                YANKI DIGITAL AGENCY
              </p>

              <p className="mt-1 text-lg sm:text-2xl font-bold text-white">
                Built for what's next.
              </p>
            </div>

            {/* =================================================
                TOP RIGHT LABEL
            ================================================== */}

            <div className="absolute top-6 right-6 sm:top-8 sm:right-8">
              <div className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                <span className="text-[10px] sm:text-xs font-semibold text-white">
                  Strategy • Design • Technology
                </span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* =================================================
            BOTTOM DESCRIPTION
        ================================================== */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-10 sm:mt-12">
          {/* Strategy */}

          <ScrollReveal delay={0} y={25}>
            <div>
              <p className="text-2xl font-black text-[#111114]">
                Strategy
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Kami mulai dengan memahami tujuan, audiens, dan
                peluang Anda.
              </p>
            </div>
          </ScrollReveal>

          {/* Design */}

          <ScrollReveal delay={150} y={25}>
            <div>
              <p className="text-2xl font-black text-[#111114]">
                Design
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Kami menciptakan pengalaman yang intuitif dan berkesan mengenai brands Anda.
              </p>
            </div>
          </ScrollReveal>

          {/* Technology */}

          <ScrollReveal delay={300} y={25}>
            <div>
              <p className="text-2xl font-black text-[#111114]">
                Technology
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Kami mengubah ide menjadi produk digital yang cepat, responsive, dan scalable.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
