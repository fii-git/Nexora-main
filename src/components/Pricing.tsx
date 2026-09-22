import React, { useState } from 'react';
import { pricingPlans } from '../data';
import { Check, X } from 'lucide-react';

interface PricingProps {
  onSelectPlan: (planName: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectPlan }) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annually'>('monthly');

  return (
    <section id="pricing" className="py-20 lg:py-28 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center">
            <span
              id="pricing-tag-badge"
              className="px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold text-[#f95700] bg-[#fff1ec] tracking-wide"
            >
              Pricing List
            </span>
          </div>

          <h2
            id="pricing-heading"
            className="text-3xl sm:text-4xl lg:text-[44px] font-black text-neutral-900 tracking-tight leading-[1.2]"
          >
            Our Pricing Plan
          </h2>

          <p
            id="pricing-subtitle"
            className="text-neutral-500 text-xs sm:text-sm sm:leading-relaxed"
          >
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod
            Tempor Incididunt Ut Labore Et Dolore Magna Aliqua.
          </p>

          {/* Interactive Billing Cycle Toggle */}
          <div className="pt-2 flex items-center justify-center gap-3">
            <span
              className={`text-xs sm:text-sm font-bold cursor-pointer transition-colors ${
                billingCycle === 'monthly' ? 'text-neutral-900' : 'text-neutral-400'
              }`}
              onClick={() => setBillingCycle('monthly')}
            >
              Monthly
            </span>
            <button
              type="button"
              role="switch"
              aria-checked={billingCycle === 'annually'}
              onClick={() =>
                setBillingCycle(billingCycle === 'monthly' ? 'annually' : 'monthly')
              }
              className="w-12 h-6 rounded-full bg-neutral-200 p-1 flex items-center transition-colors focus:outline-none"
            >
              <div
                className={`w-4 h-4 rounded-full bg-[#f95700] shadow-sm transform transition-transform ${
                  billingCycle === 'annually' ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
            <span
              className={`text-xs sm:text-sm font-bold cursor-pointer transition-colors flex items-center gap-1.5 ${
                billingCycle === 'annually' ? 'text-neutral-900' : 'text-neutral-400'
              }`}
              onClick={() => setBillingCycle('annually')}
            >
              Annually <span className="text-[10px] bg-orange-100 text-[#f95700] px-2 py-0.5 rounded-full font-extrabold">-20%</span>
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {pricingPlans.map((plan) => {
            const isHighlight = plan.highlighted;
            const finalPrice =
              billingCycle === 'annually' && plan.price > 0
                ? Math.round(plan.price * 0.8)
                : plan.price;

            return (
              <div
                key={plan.id}
                id={`pricing-card-${plan.id}`}
                className={`rounded-[32px] p-8 sm:p-9 transition-all duration-300 flex flex-col justify-between ${
                  isHighlight
                    ? 'bg-[#f95700] text-white shadow-2xl shadow-orange-500/35 transform lg:-translate-y-3 z-10'
                    : 'bg-white text-neutral-900 border border-neutral-100 shadow-md shadow-neutral-100/60 hover:shadow-xl'
                }`}
              >
                <div>
                  {/* Plan Name & Tagline */}
                  <h3
                    className={`text-xl font-black mb-2 ${
                      isHighlight ? 'text-white' : 'text-neutral-900'
                    }`}
                  >
                    {plan.name}
                  </h3>

                  <p
                    className={`text-xs leading-relaxed mb-6 ${
                      isHighlight ? 'text-orange-100' : 'text-neutral-500'
                    }`}
                  >
                    {plan.tagline}
                  </p>

                  {/* Price */}
                  <div className="flex items-baseline gap-1.5 mb-8">
                    <span
                      className={`text-4xl sm:text-5xl font-black tracking-tight ${
                        isHighlight ? 'text-white' : 'text-neutral-900'
                      }`}
                    >
                      ${finalPrice}
                    </span>
                    <span
                      className={`text-xs font-semibold ${
                        isHighlight ? 'text-orange-200' : 'text-neutral-400'
                      }`}
                    >
                      / {billingCycle === 'annually' ? 'Month (Billed Annually)' : plan.period}
                    </span>
                  </div>

                  {/* CTA Button */}
                  <button
                    id={`pricing-plan-btn-${plan.id}`}
                    type="button"
                    onClick={() => onSelectPlan(plan.name)}
                    className={`w-full py-3.5 px-6 rounded-full font-bold text-sm tracking-wide transition-all transform hover:-translate-y-0.5 cursor-pointer shadow-md mb-8 ${
                      isHighlight
                        ? 'bg-white text-[#f95700] hover:bg-neutral-50 shadow-black/10'
                        : 'bg-[#f95700] hover:bg-[#e44d00] text-white shadow-orange-500/20'
                    }`}
                  >
                    Get Started Now
                  </button>

                  {/* Features List */}
                  <div className="space-y-3.5 pt-2">
                    {plan.features.map((feat, idx) => {
                      const isIncluded = feat.included;
                      return (
                        <div key={idx} className="flex items-center gap-3">
                          {/* Check / Cross Icon */}
                          <div
                            className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                              isHighlight
                                ? isIncluded
                                  ? 'bg-white/20 text-white'
                                  : 'bg-black/10 text-white/60'
                                : isIncluded
                                ? 'bg-orange-50 text-[#f95700]'
                                : 'bg-neutral-100 text-neutral-400'
                            }`}
                          >
                            {isIncluded ? (
                              <Check className="w-3 h-3 stroke-[3]" />
                            ) : (
                              <X className="w-3 h-3 stroke-[2.5]" />
                            )}
                          </div>

                          <span
                            className={`text-xs leading-snug ${
                              isHighlight
                                ? isIncluded
                                  ? 'text-white font-medium'
                                  : 'text-orange-200/70'
                                : isIncluded
                                ? 'text-neutral-800 font-medium'
                                : 'text-neutral-400'
                            }`}
                          >
                            {feat.text}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
