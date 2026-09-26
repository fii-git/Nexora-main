import React from "react";
import { servicesData } from "../data";
import {
  Laptop,
  Instagram,
  PenLine,
  Search,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

interface ServicesProps {
  selectedService?: string | null;
  onSelectService?: (serviceTitle: string) => void;
  onSeeDetail?: () => void;
}

export const Services: React.FC<ServicesProps> = ({
  selectedService,
  onSelectService,
  onSeeDetail,
}) => {
  const getIcon = (name: string) => {
    const iconClass = "w-6 h-6";

    switch (name) {
      case "Laptop":
        return <Laptop className={iconClass} />;

      case "Instagram":
        return <Instagram className={iconClass} />;

      case "PenLine":
        return <PenLine className={iconClass} />;

      case "Search":
        return <Search className={iconClass} />;

      default:
        return <Laptop className={iconClass} />;
    }
  };

  return (
    <section
      id="services"
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
          DECORATIVE BACKGROUND
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          top-20
          h-80
          w-80
          rounded-full
          bg-[#2587FF]/10
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-0
          h-96
          w-96
          rounded-full
          bg-[#8B3DFF]/10
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
            SECTION HEADER
        ====================================================== */}

        <div
          className="
            mb-14
            grid
            grid-cols-1
            gap-8
            lg:mb-16
            lg:grid-cols-12
            lg:items-end
          "
        >
          {/* LEFT */}

          <ScrollReveal className="lg:col-span-7">
            {/* Label */}

            <div
              id="services-tag-badge"
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
                  from-[#2587FF]
                  to-[#8B3DFF]
                "
              />

              <span
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.22em]
                  text-[#2587FF]
                  sm:text-sm
                "
              >
                Our Services
              </span>
            </div>

            {/* Heading */}

            <h2
              id="services-heading"
              className="
                max-w-3xl
                text-3xl
                font-black
                leading-[1.12]
                tracking-tight
                text-[#111114]
                sm:text-4xl
                lg:text-[52px]
              "
            >
              Digital Solutions
              <br className="hidden sm:block" />

              <span
                className="
                  bg-gradient-to-r
                  from-[#2587FF]
                  via-[#4168FF]
                  to-[#A52BFF]
                  bg-clip-text
                  text-transparent
                "
              >
                Built For Your Growth.
              </span>
            </h2>
          </ScrollReveal>

          {/* RIGHT */}

          <ScrollReveal
            delay={120}
            y={25}
            className="lg:col-span-5 lg:pb-1"
          >
            <p
              id="services-description"
              className="
                max-w-xl
                text-sm
                leading-7
                text-[#667085]
                sm:text-base
              "
            >
              Dari website hingga strategi digital, NEXORA membantu bisnis
              membangun pengalaman digital yang modern, efektif, dan siap
              berkembang.
            </p>
          </ScrollReveal>
        </div>

        {/* =====================================================
            SERVICES GRID
        ====================================================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-5
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >
          {servicesData.map((service, index) => {
            // Apakah card sedang dipilih?
            const isSelected = selectedService === service.title;

            return (
              <ScrollReveal
                key={service.id}
                delay={index * 150}
                y={25}
              >
                <div
                  id={`service-card-${service.id}`}
                  onClick={() => onSelectService?.(service.title)}
                  className={`
                    group
                    relative
                    min-h-[290px]
                    cursor-pointer
                    overflow-hidden
                    rounded-[28px]
                    p-7
                    transition-all
                    duration-500
                    ease-out

                    ${
                      isSelected
                        ? `
                          -translate-y-2
                          bg-gradient-to-br
                          from-[#2587FF]
                          via-[#4168FF]
                          to-[#8B3DFF]
                          text-white
                          shadow-[0_20px_50px_rgba(65,104,255,0.30)]
                        `
                        : `
                          border
                          border-[#E7EDFA]
                          bg-white
                          text-[#111114]
                          shadow-[0_12px_35px_rgba(25,55,100,0.06)]
                          hover:-translate-y-1
                          hover:border-[#CFE0FF]
                          hover:shadow-[0_20px_45px_rgba(37,99,235,0.12)]
                        `
                    }
                  `}
                >
                  {/* =================================================
                      ACTIVE CARD DECORATION
                  ================================================== */}

                  {isSelected && (
                    <>
                      <div
                        className="
                          pointer-events-none
                          absolute
                          -right-12
                          -top-12
                          h-32
                          w-32
                          rounded-full
                          bg-white/10
                          blur-2xl
                        "
                      />

                      <div
                        className="
                          pointer-events-none
                          absolute
                          -bottom-16
                          -left-10
                          h-40
                          w-40
                          rounded-full
                          bg-white/10
                          blur-3xl
                        "
                      />
                    </>
                  )}

                  {/* =================================================
                      NUMBER
                  ================================================== */}

                  <div
                    className={`
                      absolute
                      right-6
                      top-5
                      text-5xl
                      font-black
                      transition-all
                      duration-500

                      ${
                        isSelected
                          ? "scale-110 text-white/15"
                          : "text-[#EAF1FF] group-hover:text-[#DDE9FF]"
                      }
                    `}
                  >
                    0{index + 1}
                  </div>

                  {/* =================================================
                      ICON
                  ================================================== */}

                  <div
                    className={`
                      relative
                      mb-8
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-2xl
                      transition-all
                      duration-500

                      ${
                        isSelected
                          ? `
                            scale-110
                            rotate-3
                            bg-white/15
                            text-white
                            shadow-lg
                            shadow-black/5
                            backdrop-blur-sm
                          `
                          : `
                            bg-gradient-to-br
                            from-[#EAF3FF]
                            to-[#F3ECFF]
                            text-[#4168FF]
                            group-hover:scale-105
                            group-hover:rotate-2
                          `
                      }
                    `}
                  >
                    {getIcon(service.iconName)}
                  </div>

                  {/* =================================================
                      CONTENT
                  ================================================== */}

                  <div className="relative">
                    <h3
                      className={`
                        mb-3
                        text-lg
                        font-extrabold
                        transition-colors
                        duration-300

                        ${
                          isSelected
                            ? "text-white"
                            : "text-[#111114]"
                        }
                      `}
                    >
                      {service.title}
                    </h3>

                    <p
                      className={`
                        text-sm
                        leading-6
                        transition-colors
                        duration-300

                        ${
                          isSelected
                            ? "text-white/80"
                            : "text-[#737B8C]"
                        }
                      `}
                    >
                      {service.description}
                    </p>
                  </div>

                  {/* =================================================
                      ARROW
                  ================================================== */}

                  <div
                    className={`
                      absolute
                      bottom-7
                      right-7
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      transition-all
                      duration-500

                      ${
                        isSelected
                          ? `
                            translate-x-1
                            bg-white/15
                            text-white
                          `
                          : `
                            bg-[#F1F5FF]
                            text-[#4168FF]
                            group-hover:translate-x-1
                            group-hover:bg-[#4168FF]
                            group-hover:text-white
                          `
                      }
                    `}
                  >
                    <ArrowRight className="h-4 w-4" />
                  </div>

                  {/* =================================================
                      ACTIVE INDICATOR
                  ================================================== */}

                  {isSelected && (
                    <div
                      className="
                        absolute
                        bottom-0
                        left-7
                        right-7
                        h-[3px]
                        rounded-full
                        bg-white/40
                      "
                    />
                  )}
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* =====================================================
            BOTTOM CTA
        ====================================================== */}

        <ScrollReveal
          delay={150}
          y={25}
        >
          <div
            className="
              mt-12
              flex
              flex-col
              items-start
              justify-between
              gap-5
              rounded-[28px]
              border
              border-[#E4EBF8]
              bg-white/80
              p-6
              shadow-[0_15px_40px_rgba(25,55,100,0.05)]
              backdrop-blur-xl
              sm:flex-row
              sm:items-center
              sm:p-7
            "
          >
            {/* CTA TEXT */}

            <div className="flex items-center gap-4">
              <div
                className="
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-gradient-to-br
                  from-[#2587FF]
                  to-[#8B3DFF]
                  text-white
                "
              >
                <Sparkles className="h-5 w-5" />
              </div>

              <div>
                <h3
                  className="
                    text-sm
                    font-extrabold
                    text-[#111114]
                    sm:text-base
                  "
                >
                  Punya project digital?
                </h3>

                <p
                  className="
                    mt-1
                    text-xs
                    text-[#7A8496]
                    sm:text-sm
                  "
                >
                  Mari diskusikan bagaimana NEXORA bisa membantu.
                </p>
              </div>
            </div>

            {/* CTA BUTTON */}

            <button
              id="services-see-detail-btn"
              type="button"
              onClick={onSeeDetail}
              className="
                inline-flex
                cursor-pointer
                items-center
                gap-2
                rounded-full
                px-6
                py-3
                text-sm
                font-bold
                overflow-hidden
                group
                text-white
                bg-linear-to-r
                from-[#2587FF]
                to-[#8B3DFF]
                shadow-lg
                shadow-[#2587FF]/20
                hover:shadow-[#8B3DFF]/30
                hover:-translate-y-0.5
                transition-all
                duration-300
                hover:bg-[#2587FF]
              "
            >
              <span className="relative z-10">
                See Our Services
              </span>

              <span
                className="
                  absolute
                  inset-0
                  bg-linear-to-r
                  from-[#8B3DFF]
                  to-[#2587FF]
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity
                  duration-300
                "
              />

              <ArrowRight className="h-4 w-4 relative z-10" />
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};