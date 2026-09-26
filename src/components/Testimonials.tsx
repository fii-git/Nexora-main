import React, { useEffect, useState } from "react";
import { testimonialsData } from "../data";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export const Testimonials: React.FC = () => {
  const totalItems = testimonialsData.length;

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
   *
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
   * Ketika mencapai duplicate section,
   * reset ke posisi awal tanpa animasi.
   *
   * Karena data duplicate sama persis,
   * user tidak akan melihat lompatan.
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
            hover:border-[#C9D8FF]
            hover:shadow-[0_20px_45px_rgba(37,99,235,0.10)]
          "
        >
          {/* Decorative Glow */}
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
              from-[#2587FF]/10
              to-[#8B3DFF]/10
              blur-3xl
              transition-transform
              duration-700
              group-hover:scale-150
            "
          />

          {/* Quote Icon */}
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
              from-[#2587FF]/10
              to-[#8B3DFF]/10
              text-[#4168FF]
            "
          >
            <Quote
              className="h-5 w-5"
              strokeWidth={2.2}
            />
          </div>

          {/* Client */}
          <div className="relative flex items-center gap-4">
            {/* Avatar */}
            <div className="relative flex-shrink-0">
              <div
                className="
                  absolute
                  -inset-1
                  rounded-full
                  bg-gradient-to-br
                  from-[#2587FF]
                  to-[#8B3DFF]
                  opacity-20
                  blur-sm
                "
              />

              <img
                src={item.avatar}
                alt={item.name}
                className="
                  relative
                  h-14
                  w-14
                  rounded-full
                  object-cover
                  ring-2
                  ring-white
                "
              />
            </div>

            {/* Name */}
            <div className="min-w-0 pr-10">
              <h3
                className="
                  truncate
                  text-base
                  font-bold
                  text-slate-900
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
                NEXORA Client
              </p>
            </div>
          </div>

          {/* Rating */}
          <div className="mt-5 flex items-center gap-1">
            {[...Array(item.rating)].map((_, i) => (
              <Star
                key={i}
                className="
                  h-4
                  w-4
                  fill-[#FFC83D]
                  text-[#FFC83D]
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

          {/* Comment */}
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

          {/* Bottom Accent */}
          <div className="mt-5 flex items-center gap-2">
            <span
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-[#2587FF]
              "
            />

            <span
              className="
                h-px
                flex-1
                bg-gradient-to-r
                from-[#2587FF]/20
                via-[#8B3DFF]/10
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
      {/* Background Glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-[-120px]
          top-20
          h-72
          w-72
          rounded-full
          bg-[#2587FF]/8
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
          bg-[#8B3DFF]/8
          blur-3xl
        "
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* =========================================
            HEADER
        ========================================== */}

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
                  border-[#D9E6FF]
                  bg-[#F5F8FF]
                  px-4
                  py-1.5
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.12em]
                  text-[#4168FF]
                "
              >
                <span
                  className="
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-gradient-to-r
                    from-[#2587FF]
                    to-[#8B3DFF]
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
                text-slate-900
                sm:text-4xl
                lg:text-[46px]
              "
            >
              What Our Clients{" "}

              <span
                className="
                  bg-gradient-to-r
                  from-[#2587FF]
                  via-[#5B6CFF]
                  to-[#8B3DFF]
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
              NEXORA untuk membangun solusi digital yang lebih baik.
            </p>
          </div>
        </ScrollReveal>

        {/* =========================================
            CAROUSEL
        ========================================== */}

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
                text-slate-600
                shadow-[0_10px_25px_rgba(15,23,42,0.10)]
                transition-all
                duration-300
                hover:border-[#C9D8FF]
                hover:bg-[#F5F8FF]
                hover:text-[#4168FF]
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
                text-slate-600
                shadow-[0_10px_25px_rgba(15,23,42,0.10)]
                transition-all
                duration-300
                hover:border-[#C9D8FF]
                hover:bg-[#F5F8FF]
                hover:text-[#4168FF]
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

        {/* =========================================
            NAVIGATION
        ========================================== */}

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
                text-slate-500
                shadow-sm
                transition-all
                hover:border-[#C9D8FF]
                hover:bg-[#F5F8FF]
                hover:text-[#4168FF]
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
                        ? "w-7 bg-gradient-to-r from-[#2587FF] to-[#8B3DFF]"
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
                text-slate-500
                shadow-sm
                transition-all
                hover:border-[#C9D8FF]
                hover:bg-[#F5F8FF]
                hover:text-[#4168FF]
                lg:hidden
              "
            >
              <ChevronRight className="h-4 w-4" />
            </button>

          </div>
        </ScrollReveal>

        {/* Auto Slide Status */}
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