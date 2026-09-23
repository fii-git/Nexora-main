import React from "react";
import { Play, ArrowUpRight } from "lucide-react";

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

      <div className="absolute -top-32 right-[-150px] w-[450px] h-[450px] rounded-full bg-blue-50/70 blur-[100px] pointer-events-none" />

      <div className="absolute bottom-[-200px] left-[-150px] w-[450px] h-[450px] rounded-full bg-purple-50/60 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        {/* =================================================
            TOP CONTENT
        ================================================== */}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end mb-12 sm:mb-14">
          {/* LEFT */}
          <div className="lg:col-span-7">
            {/* Small label */}
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-[2px] bg-gradient-to-r from-[#2587FF] to-[#8B3DFF]" />

              <span className="text-xs font-bold tracking-[0.18em] uppercase text-[#2587FF]">
                About NEXORA
              </span>
            </div>

            {/* Heading */}
            <h2
              id="grow-business-heading"
              className="text-4xl sm:text-5xl lg:text-[52px] font-black text-[#111114] tracking-[-0.035em] leading-[1.05]"
            >
              We Turn Ideas Into{" "}
              <span className="bg-gradient-to-r from-[#168DFF] via-[#4265FF] to-[#A52BFF] bg-clip-text text-transparent">
                Digital Experiences.
              </span>
            </h2>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-5">
            <p className="text-slate-500 text-sm sm:text-base leading-7">
              NEXORA is a digital agency focused on creating meaningful digital
              experiences through strategy, design, and technology. We help
              businesses turn ideas into digital products that are useful,
              memorable, and built for what's next.
            </p>

            {/* Our Story */}
            <button
              id="our-story-btn"
              type="button"
              onClick={onOurStory}
              className="overflow-hidden group mt-6 inline-flex items-center gap-3 px-6 py-3 rounded-full text-white bg-linear-to-r from-[#2587FF] to-[#8B3DFF] shadow-lg shadow-[#2587FF]/20 hover:shadow-[#8B3DFF]/30 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
            >
              <span className="relative z-10">Our Story</span>
              <span className="absolute inset-0 bg-linear-to-r from-[#8B3DFF] to-[#2587FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center">
                <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
              </span>
            </button>
          </div>
        </div>

        {/* =================================================
            VIDEO BANNER
        ================================================== */}

        <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-2xl border border-slate-100 group">
          {/* Image */}
          <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full bg-slate-900 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1800&auto=format&fit=crop"
              alt="NEXORA team collaborating"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />

            {/* Navy / blue overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#07152F]/60 via-[#07152F]/20 to-[#3D2A70]/30" />

            {/* Bottom dark gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

            {/* Subtle blue glow */}
            <div className="absolute inset-0 bg-[#2587FF]/5 mix-blend-screen" />
          </div>

          {/* =================================================
              CENTER PLAY BUTTON
          ================================================== */}

          <div className="absolute inset-0 flex items-center justify-center">
            <button
              id="banner-play-video-btn"
              type="button"
              onClick={onPlayVideo}
              aria-label="Play NEXORA presentation video"
              className="group/play w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/95 hover:bg-white text-[#2587FF] flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 cursor-pointer"
            >
              <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-[#2587FF] text-[#2587FF] translate-x-0.5" />
            </button>
          </div>

          {/* =================================================
              BOTTOM LEFT LABEL
          ================================================== */}

          <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8">
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] font-bold text-blue-200">
              NEXORA DIGITAL AGENCY
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

        {/* =================================================
            BOTTOM DESCRIPTION
        ================================================== */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-10 sm:mt-12">
          <div>
            <p className="text-2xl font-black text-[#111114]">Strategy</p>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              We start by understanding your goals, audience, and opportunities.
            </p>
          </div>

          <div>
            <p className="text-2xl font-black text-[#111114]">Design</p>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              We create intuitive and memorable experiences around your brand.
            </p>
          </div>

          <div>
            <p className="text-2xl font-black text-[#111114]">Technology</p>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              We turn ideas into fast, responsive, and scalable digital
              products.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
