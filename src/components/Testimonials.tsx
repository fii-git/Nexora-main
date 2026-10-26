
import React, { useEffect, useState } from "react";
import { testimonialsData } from "../data";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export const Testimonials: React.FC = () => {
  const totalItems = testimonialsData.length;

  /*
   * Mengambil inisial dari nama client.
   */
  const getInitials = (name: string) => {
    return name
      .trim()
      .split(/\s+/)
      .slice(0, 2)
      .map((word) => word.charAt(0).toUpperCase())
      .join("");
  };

  /*
   * Duplicate data untuk membuat infinite carousel.
   */
  const sliderItems = [
    ...testimonialsData,
    ...testimonialsData,
    ...testimonialsData,
  ];

  const [currentIndex, setCurrentIndex] = useState(totalItems);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(true);

  /*
   * Posisi card berdasarkan ukuran viewport.
   * Mobile  : 1 card
   * Tablet  : 2 cards
   * Desktop : 3 cards
   */
  const getTranslateValue = () => {
    if (typeof window === "undefined") {
      return currentIndex * 100;
    }

    if (window.innerWidth >= 1024) {
      return currentIndex * (100 / 3);
    }

    if (window.innerWidth >= 640) {
      return currentIndex * 50;
    }

    return currentIndex * 100;
  };

  const [translateValue, setTranslateValue] = useState(
    getTranslateValue()
  );

  /*
   * Update posisi ketika index berubah.
   */
  useEffect(() => {
    setTranslateValue(getTranslateValue());
  }, [currentIndex]);

  /*
   * Update posisi ketika ukuran browser berubah.
   */
  useEffect(() => {
    const handleResize = () => {
      setTranslateValue(getTranslateValue());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [currentIndex]);

  /*
   * Auto slider.
   */
  useEffect(() => {
    if (isPaused || totalItems <= 1) {
      return;
    }

    const interval = window.setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 4500);

    return () => {
      window.clearInterval(interval);
    };
  }, [isPaused, totalItems]);

  /*
   * Reset ke posisi awal tanpa animasi
   * ketika mencapai bagian duplikat.
   */
  useEffect(() => {
    if (currentIndex >= totalItems * 2) {
      const timeout = window.setTimeout(() => {
        setIsTransitioning(false);

        setCurrentIndex(totalItems);

        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setIsTransitioning(true);
          });
        });
      }, 850);

      return () => {
        window.clearTimeout(timeout);
      };
    }
  }, [currentIndex, totalItems]);

  /*
   * Next button.
   */
  const handleNext = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  /*
   * Previous button.
   */
  const handlePrevious = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  /*
   * Indicator index.
   */
  const activeDot =
    (((currentIndex - totalItems) % totalItems) + totalItems) %
    totalItems;

  /*
   * Render testimonial card.
   */
  const renderCard = (
    item: (typeof testimonialsData)[0],
    index: number
  ) => {
    return (
      <div
        key={`${item.id}-${index}`}
        className="
          box-border
          w-full
          shrink-0
          px-2
          py-6
          sm:w-1/2
          lg:w-1/3
        "
      >
        <article
          className="
            group
            relative
            h-full
            min-h-[255px]
            overflow-hidden
            rounded-[28px]
            border
            border-slate-200/80
            bg-white
            p-6
            shadow-[0_10px_35px_rgba(15,23,42,0.06)]
            transition-all
            duration-300
            hover:-translate-y-1
            hover:border-[#EAA412]/50
            hover:shadow-[0_20px_45px_rgba(226,109,19,0.10)]
          "
        >
          {/* DECORATIVE GLOW */}

          <div
            className="
              pointer-events-none
              absolute
              -right-16
              -top-16
              h-36
              w-36
              rounded-full
              bg-gradient-to-br
              from-[#E26D13]/10
              to-[#EAA412]/10
              blur-3xl
              transition-transform
              duration-700
              group-hover:scale-150
            "
          />

          {/* QUOTE ICON */}

          <div
            className="
              absolute
              right-5
              top-5
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              bg-gradient-to-br
              from-[#E26D13]/10
              to-[#EAA412]/10
              text-[#E26D13]
            "
          >
            <Quote
              className="h-5 w-5"
              strokeWidth={2.2}
            />
          </div>

          {/* CLIENT */}

          <div className="relative flex items-center gap-4">
            {/* Avatar Initial */}
            <div className="relative flex-shrink-0">
              {/* Avatar Glow */}
              <div
                className="
                  absolute
                  -inset-1
                  rounded-full
                  bg-gradient-to-br
                  from-[#E26D13]
                  to-[#EAA412]
                  opacity-20
                  blur-sm
                "
              />

              {/* Avatar */}
              <div
                className="
                  relative
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-full
                  bg-gradient-to-br
                  from-[#121E36]
                  to-[#1E3A5F]
                  text-sm
                  font-extrabold
                  tracking-wide
                  text-white
                  ring-2
                  ring-white
                  shadow-[0_8px_20px_rgba(18,30,54,0.20)]
                  transition-transform
                  duration-300
                  group-hover:scale-105
                "
                aria-label={`Avatar ${item.name}`}
              >
                {getInitials(item.name)}
              </div>
            </div>

            {/* Name */}
            <div className="min-w-0 pr-10">
              <h3
                className="
                  truncate
                  text-base
                  font-bold
                  text-[#121E36]
                "
              >
                {item.name}
              </h3>

              <p
                className="
                  mt-0.5
                  text-xs
                  font-medium
                  text-slate-400
                "
              >
                YANKI Client
              </p>
            </div>
          </div>

          {/* RATING */}

          <div className="mt-5 flex items-center gap-1">
            {[...Array(item.rating)].map((_, i) => (
              <Star
                key={i}
                className="
                  h-4
                  w-4
                  fill-[#EAA412]
                  text-[#EAA412]
                "
              />
            ))}

            <span
              className="
                ml-1
                text-xs
                font-semibold
                text-slate-400
              "
            >
              {item.rating}.0
            </span>
          </div>

          {/* COMMENT */}

          <p
            className="
              mt-4
              min-h-[88px]
              text-sm
              leading-7
              text-slate-500
            "
          >
            “{item.comment}”
          </p>

          {/* BOTTOM ACCENT */}

          <div className="mt-5 flex items-center gap-2">
            <span
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-[#E26D13]
              "
            />

            <span
              className="
                h-px
                flex-1
                bg-gradient-to-r
                from-[#E26D13]/30
                via-[#EAA412]/20
                to-transparent
              "
            />
          </div>
        </article>
      </div>
    );
  };

  return (
    <section
      id="testimonials"
      className="
        relative
        overflow-hidden
        bg-white
        py-20
        lg:py-28
      "
    >
      {/* BACKGROUND GLOW */}

      <div
        className="
          pointer-events-none
          absolute
          left-[-120px]
          top-20
          h-72
          w-72
          rounded-full
          bg-[#E26D13]/[0.08]
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-10
          right-[-120px]
          h-80
          w-80
          rounded-full
          bg-[#1E3A5F]/[0.08]
          blur-3xl
        "
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* HEADER */}

        <ScrollReveal
          y={25}
          duration={1000}
        >
          <div
            className="
              mx-auto
              mb-12
              max-w-3xl
              text-center
              sm:mb-14
            "
          >
            {/* Badge */}
            <div className="mb-4 inline-flex items-center">
              <span
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-[#EAA412]/30
                  bg-[#F3F4F6]
                  px-4
                  py-1.5
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.12em]
                  text-[#1E3A5F]
                "
              >
                <span
                  className="
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-gradient-to-r
                    from-[#E26D13]
                    to-[#EAA412]
                  "
                />

                Client Stories
              </span>
            </div>

            {/* Heading */}
            <h2
              className="
                text-3xl
                font-black
                leading-tight
                tracking-tight
                text-[#121E36]
                sm:text-4xl
                lg:text-[46px]
              "
            >
              What Our Clients{" "}

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
                Say.
              </span>
            </h2>

            {/* Subtitle */}
            <p
              className="
                mx-auto
                mt-4
                max-w-2xl
                text-sm
                leading-7
                text-slate-500
                sm:text-base
              "
            >
              Pengalaman dan cerita dari mereka yang telah bekerja bersama
              YANKI untuk membangun solusi digital yang lebih baik.
            </p>
          </div>
        </ScrollReveal>

        {/* CAROUSEL */}

        <ScrollReveal
          delay={150}
          y={25}
          duration={1000}
        >
          <div
            className="relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Left Arrow */}
            <button
              type="button"
              onClick={handlePrevious}
              aria-label="Previous testimonial"
              className="
                absolute
                left-0
                top-1/2
                z-20
                hidden
                h-11
                w-11
                -translate-x-1/2
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                border
                border-slate-200
                bg-white
                text-[#1E3A5F]
                shadow-[0_10px_25px_rgba(15,23,42,0.10)]
                transition-all
                duration-300
                hover:border-[#EAA412]
                hover:bg-[#F3F4F6]
                hover:text-[#E26D13]
                lg:flex
              "
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {/* Right Arrow */}
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next testimonial"
              className="
                absolute
                right-0
                top-1/2
                z-20
                hidden
                h-11
                w-11
                translate-x-1/2
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                border
                border-slate-200
                bg-white
                text-[#1E3A5F]
                shadow-[0_10px_25px_rgba(15,23,42,0.10)]
                transition-all
                duration-300
                hover:border-[#EAA412]
                hover:bg-[#F3F4F6]
                hover:text-[#E26D13]
                lg:flex
              "
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            {/* Viewport */}
            <div className="overflow-hidden px-0 sm:px-1">
              {/* Track */}
              <div
                className="-mx-2 flex"
                style={{
                  transform: `translate3d(-${translateValue}%, 0, 0)`,
                  transition: isTransitioning
                    ? "transform 850ms cubic-bezier(0.22, 1, 0.36, 1)"
                    : "none",
                  willChange: "transform",
                }}
              >
                {sliderItems.map((item, index) =>
                  renderCard(item, index)
                )}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* NAVIGATION */}

        <ScrollReveal
          delay={250}
          y={20}
          duration={1000}
        >
          <div className="mt-8 flex items-center justify-center gap-4">
            {/* Mobile Previous */}
            <button
              type="button"
              onClick={handlePrevious}
              aria-label="Previous testimonial"
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-slate-200
                bg-white
                text-[#1E3A5F]
                shadow-sm
                transition-all
                hover:border-[#EAA412]
                hover:bg-[#F3F4F6]
                hover:text-[#E26D13]
                lg:hidden
              "
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-1.5">
              {testimonialsData.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    setIsTransitioning(true);
                    setCurrentIndex(totalItems + index);
                  }}
                  aria-label={`Go to testimonial ${index + 1}`}
                  className={`
                    h-2
                    rounded-full
                    transition-all
                    duration-500

                    ${
                      activeDot === index
                        ? "w-7 bg-gradient-to-r from-[#E26D13] to-[#EAA412]"
                        : "w-2 bg-slate-200 hover:bg-slate-300"
                    }
                  `}
                />
              ))}
            </div>

            {/* Mobile Next */}
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next testimonial"
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-slate-200
                bg-white
                text-[#1E3A5F]
                shadow-sm
                transition-all
                hover:border-[#EAA412]
                hover:bg-[#F3F4F6]
                hover:text-[#E26D13]
                lg:hidden
              "
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </ScrollReveal>

        {/* AUTO SLIDE STATUS */}

        <ScrollReveal
          delay={350}
          y={15}
          duration={1000}
        >
          <div className="mt-4 text-center">
            <span className="text-[11px] font-medium text-slate-400">
              {isPaused
                ? "Slider dijeda"
                : "Testimonial bergerak otomatis"}
            </span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
