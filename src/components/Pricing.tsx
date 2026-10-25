
import React, { useState } from "react";
import { pricingPlans } from "../data";
import { Check, X, Sparkles } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

interface PricingProps {
  onSelectPlan: (planName: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectPlan }) => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annually">(
    "monthly",
  );

  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-[#F8FAFF] py-20 sm:py-24 lg:py-28"
    >
      {/* Background Glow */}
      <div className="absolute -left-40 top-20 w-96 h-96 rounded-full bg-[#1E3A5F]/10 blur-3xl pointer-events-none" />

      <div className="absolute -right-40 bottom-0 w-[450px] h-[450px] rounded-full bg-[#E26D13]/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ================= HEADER ================= */}
        <ScrollReveal y={25} duration={1000}>
          <div className="text-center max-w-3xl mx-auto mb-14">
            {/* Label */}
            <div className="inline-flex items-center gap-2 mb-5">
              <span className="w-10 h-[2px] bg-linear-to-r from-[#E26D13] to-[#EAA412]" />

              <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.22em] text-[#1E3A5F]">
                Our Pricing
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[52px] font-black text-[#111114] leading-[1.1]">
              Flexible Packages
              <br />

              <span className="bg-linear-to-r from-[#121E36] via-[#1E3A5F] to-[#E26D13] bg-clip-text text-transparent">
                For Every Business.
              </span>
            </h2>

            {/* Description */}
            <p className="mt-5 text-sm sm:text-base text-[#667085] leading-7">
              Pilih paket yang sesuai dengan kebutuhan bisnis Anda. Semua paket
              dapat dikustomisasi sesuai skala proyek dan tujuan digital Anda.
            </p>

            {/* Toggle */}
            <div className="mt-8 inline-flex items-center gap-3 rounded-full bg-white border border-[#E3EAF6] p-2 shadow-sm">
              <button
                onClick={() => setBillingCycle("monthly")}
                className={`px-5 py-2 rounded-full text-sm font-bold transition ${
                  billingCycle === "monthly"
                    ? "bg-[#121E36] text-white"
                    : "text-[#667085]"
                }`}
              >
                Monthly
              </button>

              <button
                onClick={() => setBillingCycle("annually")}
                className={`px-5 py-2 rounded-full text-sm font-bold transition flex items-center gap-2 ${
                  billingCycle === "annually"
                    ? "bg-[#121E36] text-white"
                    : "text-[#667085]"
                }`}
              >
                Project

                <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/20">
                  Save 20%
                </span>
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* ================= CARDS ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 items-stretch">
          {pricingPlans.map((plan, index) => {
            const isPopular = plan.highlighted;

            const finalPrice =
              billingCycle === "annually" && plan.price > 0
                ? Math.round(plan.price * 0.8)
                : plan.price;

            return (
              <ScrollReveal
                key={plan.id}
                delay={index * 150}
                y={25}
                duration={1000}
              >
                <div
                  className={`
                    relative
                    h-full
                    overflow-hidden
                    rounded-[32px]
                    p-8
                    flex
                    flex-col
                    transition-all
                    duration-500
                    ${
                      isPopular
                        ? `
                          bg-linear-to-br
                          from-[#121E36]
                          via-[#1E3A5F]
                          to-[#E26D13]
                          text-white
                          shadow-[0_25px_60px_rgba(18,30,54,0.28)]
                          lg:-translate-y-4
                        `
                        : `
                          bg-white
                          border
                          border-[#E4EBF8]
                          shadow-[0_12px_35px_rgba(25,55,100,0.06)]
                          hover:-translate-y-2
                          hover:shadow-[0_20px_45px_rgba(226,109,19,0.10)]
                        `
                    }
                  `}
                >
                  {/* Popular Badge */}
                  {isPopular && (
                    <div className="absolute top-5 right-5 inline-flex items-center gap-1 rounded-full bg-white/15 backdrop-blur px-3 py-1 text-[11px] font-bold">
                      <Sparkles className="w-3 h-3" />
                      MOST POPULAR
                    </div>
                  )}

                  {/* Plan */}
                  <div>
                    <h3
                      className={`text-2xl font-black ${
                        isPopular ? "text-white" : "text-[#111114]"
                      }`}
                    >
                      {plan.name}
                    </h3>

                    <p
                      className={`mt-2 text-sm leading-6 ${
                        isPopular ? "text-white/75" : "text-[#667085]"
                      }`}
                    >
                      {plan.tagline}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="my-8">
                    <div className="flex items-end gap-1">
                      <span
                        className={`text-5xl font-black ${
                          isPopular ? "text-white" : "text-[#111114]"
                        }`}
                      >
                        ${finalPrice}
                      </span>

                      <span
                        className={`mb-2 text-sm ${
                          isPopular ? "text-white/70" : "text-[#98A2B3]"
                        }`}
                      >
                        /month
                      </span>
                    </div>

                    <p
                      className={`mt-2 text-xs ${
                        isPopular ? "text-white/70" : "text-[#98A2B3]"
                      }`}
                    >
                      {billingCycle === "annually"
                        ? "Billed as a complete project"
                        : "Monthly collaboration plan"}
                    </p>
                  </div>

                  {/* Button */}
                  <button
                    onClick={() => onSelectPlan(plan.name)}
                    className={`
                      relative
                      w-full
                      py-3.5
                      rounded-full
                      font-bold
                      text-sm
                      transition-all
                      ${
                        isPopular
                          ? `
                            bg-white
                            text-[#1E3A5F]
                            hover:bg-[#F5F8FF]
                          `
                          : `
                            overflow-hidden
                            group
                            text-white
                            bg-linear-to-r
                            from-[#E26D13]
                            to-[#EAA412]
                            shadow-lg
                            shadow-[#E26D13]/20
                            hover:shadow-[#EAA412]/30
                            hover:-translate-y-0.5
                            transition-all
                            duration-300
                            cursor-pointer
                          `
                      }
                    `}
                  >
                    <span className="relative z-10">
                      Start This Plan
                    </span>

                    {!isPopular && (
                      <span className="absolute inset-0 bg-linear-to-r from-[#EAA412] to-[#E26D13] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    )}
                  </button>

                  {/* Divider */}
                  <div
                    className={`my-8 h-px ${
                      isPopular ? "bg-white/15" : "bg-[#EDF2FA]"
                    }`}
                  />

                  {/* Features */}
                  <div className="space-y-4 flex-1">
                    {plan.features.map((feature, featureIndex) => {
                      const included = feature.included;

                      return (
                        <div
                          key={featureIndex}
                          className="flex items-start gap-3"
                        >
                          <div
                            className={`
                              w-6
                              h-6
                              rounded-full
                              flex
                              items-center
                              justify-center
                              mt-0.5
                              ${
                                included
                                  ? isPopular
                                    ? "bg-white/15"
                                    : "bg-[#FFF0E5]"
                                  : isPopular
                                    ? "bg-white/10"
                                    : "bg-[#F4F6FA]"
                              }
                            `}
                          >
                            {included ? (
                              <Check
                                className={`w-3.5 h-3.5 ${
                                  isPopular
                                    ? "text-white"
                                    : "text-[#E26D13]"
                                }`}
                              />
                            ) : (
                              <X
                                className={`w-3.5 h-3.5 ${
                                  isPopular
                                    ? "text-white/40"
                                    : "text-[#C2C8D3]"
                                }`}
                              />
                            )}
                          </div>

                          <span
                            className={`text-sm leading-6 ${
                              included
                                ? isPopular
                                  ? "text-white"
                                  : "text-[#344054]"
                                : isPopular
                                  ? "text-white/45"
                                  : "text-[#98A2B3]"
                            }`}
                          >
                            {feature.text}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
