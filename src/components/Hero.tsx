
import React from "react";
import {
  ArrowRight,
  Play,
  Music2,
  Instagram,
  BarChart3,
} from "lucide-react";

import heroImage1 from "../assets/image/hero-image1.png";
import heroImage2 from "../assets/image/hero-image2.png";
import logo from "../assets/LOGO3.png";

interface HeroProps {
  onWatchVideo: () => void;
  onGetStarted: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onWatchVideo,
  onGetStarted,
}) => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-white"
    >
      {/* BACKGROUND DECORATION */}
      <div className="absolute -top-40 -left-40 w-[550px] h-[550px] rounded-full bg-[#1E3A5F]/10 blur-[120px] pointer-events-none" />

      <div className="absolute top-20 right-[-180px] w-[600px] h-[600px] rounded-full bg-[#E26D13]/10 blur-[120px] pointer-events-none" />

      <div className="absolute top-[35%] left-[45%] w-[350px] h-[350px] rounded-full bg-[#EAA412]/10 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-32 sm:pt-36 lg:pt-40 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-8 items-center">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-7">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F3F4F6] border border-[#1E3A5F]/15 text-[#1E3A5F] mb-7">
              <span className="w-2 h-2 rounded-full bg-[#E26D13]" />
              <span className="text-xs sm:text-sm font-bold tracking-wide">
                #GrowTogether
              </span>
            </div>

            {/* HEADING */}
            <h1 className="max-w-190 text-[48px] sm:text-[62px] lg:text-[72px] xl:text-[78px] font-black leading-[1.15] tracking-[-0.045em] text-[#101014]">
              <span className="block">
                Digital Product
              </span>

              <span className="block">
                <span className="inline bg-linear-to-r from-[#121E36] via-[#1E3A5F] to-[#E26D13] bg-clip-text text-transparent">
                  Agency
                </span>
                {" "}Marketing
              </span>
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-170 text-base sm:text-lg leading-8 text-slate-500">
              YANKI is a digital agency focused on creating modern websites,
              digital products, and experiences that help ambitious brands move
              forward.
            </p>

            {/* CTA */}
            <div className="flex flex-wrap items-center gap-5 mt-9">

              <button
                id="hero-get-started-btn"
                type="button"
                onClick={onGetStarted}
                className="overflow-hidden group inline-flex items-center gap-4 px-7 py-4 rounded-full bg-linear-to-r from-[#E26D13] to-[#EAA412] text-white font-bold text-sm sm:text-base shadow-lg shadow-[#E26D13]/20 hover:shadow-xl hover:shadow-[#EAA412]/30 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
              >
                <span className="relative z-10">
                  Get Started
                </span>

                <span className="absolute inset-0 bg-linear-to-r from-[#EAA412] to-[#E26D13] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                id="hero-watch-video-btn"
                type="button"
                onClick={onWatchVideo}
                className="group inline-flex items-center gap-3 text-[#151515] font-bold text-sm sm:text-base cursor-pointer"
              >
                <span className="w-12 h-12 rounded-full flex items-center justify-center bg-linear-to-br from-[#121E36] to-[#1E3A5F] text-white shadow-md shadow-slate-300 group-hover:scale-105 transition-transform">
                  <Play className="w-4 h-4 fill-white translate-x-[1px]" />
                </span>

                <span>Watch Video</span>
              </button>
            </div>

            {/* STATS */}
            <div className="mt-10 pt-7 border-t border-slate-200 max-w-[700px]">
              <div className="grid grid-cols-3">

                <div className="pr-4 sm:pr-8">
                  <p className="text-2xl sm:text-3xl font-black text-[#111114]">
                    20+
                  </p>
                  <p className="mt-1 text-xs sm:text-sm text-slate-500">
                    Digital Projects
                  </p>
                </div>

                <div className="px-4 sm:px-8 border-l border-slate-200">
                  <p className="text-2xl sm:text-3xl font-black text-[#111114]">
                    15+
                  </p>
                  <p className="mt-1 text-xs sm:text-sm text-slate-500">
                    Happy Clients
                  </p>
                </div>

                <div className="pl-4 sm:pl-8 border-l border-slate-200">
                  <p className="text-2xl sm:text-3xl font-black text-[#111114]">
                    100%
                  </p>
                  <p className="mt-1 text-xs sm:text-sm text-slate-500">
                    Digital Focus
                  </p>
                </div>

              </div>
            </div>

            {/* Trusted block commented out, preserve it as-is */}
          </div>

          {/* RIGHT VISUAL */}
          <div className="lg:col-span-5 relative min-h-[560px] sm:min-h-[620px]">

            {/* Big circular background */}
            <div className="absolute top-8 right-[-30px] w-[430px] h-[430px] sm:w-[500px] sm:h-[500px] rounded-full bg-linear-to-br from-[#F3F4F6] via-[#EAA412]/15 to-[#E26D13]/10 opacity-80" />

            {/* Smaller circle */}
            <div className="absolute bottom-10 left-0 w-32 h-32 rounded-full bg-[#F3F4F6]" />

            {/* LEFT IMAGE */}
            <div className="absolute left-0 top-20 w-[55%] h-[390px] sm:h-[450px] rounded-[28px] overflow-hidden border-[6px] border-white shadow-2xl z-20">
              <img
                src={heroImage1}
                alt="Creative workspace"
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent" />

              {/* Music icon */}
              <div className="absolute -top-5 -right-5 w-12 h-12 rounded-full bg-black flex items-center justify-center shadow-lg">
                <Music2 className="w-5 h-5 text-[#EAA412]" />
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="absolute right-0 top-0 w-[58%] h-[470px] sm:h-[530px] rounded-[28px] overflow-hidden border-[6px] border-white shadow-2xl z-30">
              <img
                src={heroImage2}
                alt="Digital product development"
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent" />

              {/* Instagram badge */}
              <div className="absolute -top-3 right-4 w-12 h-12 rounded-full bg-linear-to-br from-pink-500 via-red-500 to-orange-400 flex items-center justify-center shadow-lg">
                <Instagram className="w-6 h-6 text-white" />
              </div>

              {/* Quote */}
              <div className="absolute top-7 left-5 right-5">
                <div className="bg-white/95 backdrop-blur-sm rounded-[22px] px-5 py-4 shadow-xl">
                  <p className="text-xs sm:text-sm font-bold leading-5 text-slate-800">
                    "We design and develop experiences that make people lives
                    simpler."
                  </p>
                </div>
              </div>

              {/* Designer card */}
              <div className="absolute bottom-5 right-5 left-5">
                <div className="flex items-center gap-3 bg-white/95 backdrop-blur-sm rounded-[22px] px-4 py-3 shadow-xl">

                  <div className="w-11 h-11 rounded-full justify-items-center overflow-hidden border-2 border-[#EAA412]">
                    <img
                      src={logo}
                      alt="logo"
                      className="w-10 h-10 object-center"
                    />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-slate-900">
                      YANKI Team
                    </p>
                    <p className="text-xs text-slate-500">
                      Digital Product Agency
                    </p>
                  </div>

                </div>
              </div>
            </div>

            {/* GROWTH CARD */}
            <div className="absolute -left-2.5 bottom-24 sm:bottom-16 z-40 bg-white rounded-[22px] px-4 py-4 shadow-xl border border-slate-100">
              <div className="flex items-center gap-3">

                <div className="w-11 h-11 rounded-full bg-[#F3F4F6] flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-[#E26D13]" />
                </div>

                <div>
                  <p className="text-xl font-black text-slate-900">
                    2.5x
                  </p>
                  <p className="text-[11px] text-slate-500">
                    Faster Growth
                  </p>
                </div>

              </div>
            </div>

            {/* DECORATIVE DOTS */}
            <div
              className="absolute -right-5 bottom-16 w-32 h-32 opacity-60"
              style={{
                backgroundImage:
                  "radial-linear(#E26D13 1.5px, transparent 1.5px)",
                backgroundSize: "12px 12px",
              }}
            />

            {/* Decorative handwritten text */}
            <div className="absolute bottom-0 right-4 translate-y-4 hidden sm:block text-[#E26D13] rotate-[-5deg]">
              <p className="text-lg font-semibold italic">
                Creative Solutions
              </p>
              <p className="text-lg font-semibold italic ml-8">
                Real Results
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
