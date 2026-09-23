import React, { useState } from "react";
import { testimonialsData } from "../data";
import { Star, Quote } from "lucide-react";

export const Testimonials: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const topRow = testimonialsData.slice(0, 3);
  const bottomRow = testimonialsData.slice(3, 5);

  const renderCard = (item: (typeof testimonialsData)[0]) => {
    const isSelected = selectedId === item.id;
    return (
      <div
        key={item.id}
        id={`testimonial-card-${item.id}`}
        onClick={() => setSelectedId(isSelected ? null : item.id)}
        className={`bg-white rounded-3xl p-5 sm:p-6 border transition-all duration-300 shadow-sm hover:shadow-lg flex items-center gap-4 cursor-pointer max-w-sm ${
          isSelected
            ? "border-[#f95700] ring-2 ring-orange-200 shadow-md"
            : "border-neutral-100 hover:border-orange-200"
        }`}
      >
        {/* Avatar */}
        <div className="relative flex-shrink-0">
          <img
            src={item.avatar}
            alt={item.name}
            className="w-12 h-12 rounded-full object-cover ring-2 ring-orange-100"
          />
        </div>

        {/* Content */}
        <div className="min-w-0">
          <h3 className="text-sm font-bold text-neutral-900 leading-tight">
            {item.name}
          </h3>

          {/* Star Rating */}
          <div className="flex items-center gap-0.5 my-1">
            {[...Array(item.rating)].map((_, i) => (
              <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
            ))}
          </div>

          <p className="text-xs text-neutral-500 leading-relaxed truncate max-w-[200px] sm:max-w-none">
            {item.comment}
          </p>
        </div>
      </div>
    );
  };

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center">
            <span
              id="testimonial-badge"
              className="px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-linear-to-r from-[#2587FF] to-[#8B3DFF] tracking-wide"
            >
              Testimonial
            </span>
          </div>

          <h2
            id="testimonial-heading"
            className="text-3xl sm:text-4xl lg:text-[44px] font-black text-neutral-900 tracking-tight leading-[1.2]"
          >
            What Clients Say About Us
          </h2>

          <p
            id="testimonial-subtitle"
            className="text-neutral-500 text-xs sm:text-sm leading-relaxed"
          >
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do
            Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua.
          </p>
        </div>

        {/* Testimonials staggered layout */}
        <div className="flex flex-col gap-6 md:gap-8 max-w-5xl mx-auto px-4 sm:px-6">
          {/* Top row with 3 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 w-full">
            {topRow.map((item) => renderCard(item))}
          </div>

          {/* Bottom row with 2 centered cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 w-full max-w-2xl mx-auto">
            {bottomRow.map((item) => renderCard(item))}
          </div>
        </div>
      </div>
    </section>
  );
};
