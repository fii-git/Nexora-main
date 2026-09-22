import React from 'react';
import { whyChooseUsFeatures } from '../data';
import { Globe, Wallet, Users, ShieldCheck } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const getFeatureIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe':
        return <Globe className="w-5 h-5 text-white" />;
      case 'Wallet':
        return <Wallet className="w-5 h-5 text-white" />;
      case 'Users':
        return <Users className="w-5 h-5 text-white" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-white" />;
      default:
        return <Globe className="w-5 h-5 text-white" />;
    }
  };

  return (
    <section id="why-us" className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Arch-Shaped Visual with Orange Accent */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[360px] sm:max-w-[420px]">
              {/* Backing Coral Accent Shape */}
              <div
                className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-full h-full rounded-t-full bg-[#f95700]/90 z-0"
                style={{ borderTopLeftRadius: '220px', borderTopRightRadius: '220px' }}
              />

              {/* Arch Image Container */}
              <div
                className="relative z-10 w-full overflow-hidden shadow-2xl border-4 border-white bg-neutral-100"
                style={{
                  borderTopLeftRadius: '220px',
                  borderTopRightRadius: '220px',
                  borderBottomLeftRadius: '32px',
                  borderBottomRightRadius: '32px',
                  aspectRatio: '1 / 1.25',
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop"
                  alt="Team brainstorming business strategy"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Text & 2x2 Features Grid */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            <div className="inline-flex items-center">
              <span
                id="why-choose-us-badge"
                className="px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold text-[#f95700] bg-[#fff1ec] tracking-wide"
              >
                Why Choose Us
              </span>
            </div>

            <h2
              id="why-choose-us-heading"
              className="text-3xl sm:text-4xl lg:text-[44px] font-black text-neutral-900 tracking-tight leading-[1.2]"
            >
              The Best Decision For <br className="hidden sm:inline" />
              Your Business Strategy
            </h2>

            <p
              id="why-choose-us-desc"
              className="text-neutral-500 text-sm sm:text-base leading-relaxed"
            >
              Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod
              Tempor Incididunt Ut Labore Et Dolore Magna Aliqua.
            </p>

            {/* 2x2 Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 pt-4">
              {whyChooseUsFeatures.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  {/* Round orange icon button */}
                  <div className="w-12 h-12 rounded-full bg-[#f95700] flex-shrink-0 flex items-center justify-center shadow-md shadow-orange-500/20">
                    {getFeatureIcon(feat.iconName)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-neutral-900 mb-1">
                      {feat.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed">
                      {feat.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
