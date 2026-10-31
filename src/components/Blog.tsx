import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { blogPostsData } from '../data';
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
} from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const Blog: React.FC = () => {

  const [activeCategory, setActiveCategory] = useState("All Articles");

  const categories = [
    "All Articles",
    ...Array.from(
      new Set(blogPostsData.map((post) => post.category))
    ),
  ];

  const filteredPosts =
    activeCategory === "All Articles"
      ? blogPostsData
      : blogPostsData.filter(
          (post) => post.category === activeCategory
        );

  return (
    <section
      id="blog"
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
          BACKGROUND DECORATION
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-48
          top-10
          h-96
          w-96
          rounded-full
          bg-[#1E3A5F]/10
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-48
          bottom-0
          h-[450px]
          w-[450px]
          rounded-full
          bg-[#E26D13]/10
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
            HEADER
        ====================================================== */}

        <div
          className="
            mb-12
            grid
            grid-cols-1
            gap-8
            lg:mb-14
            lg:grid-cols-12
            lg:items-end
          "
        >
          {/* =================================================
              LEFT HEADER
          ================================================== */}

          <ScrollReveal
            className="lg:col-span-7"
            y={25}
            duration={1000}
          >
            {/* Label */}
            <div
              id="blog-tag-badge"
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
                  from-[#E26D13]
                  to-[#EAA412]
                "
              />

              <span
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.22em]
                  text-[#1E3A5F]
                  sm:text-sm
                "
              >
                Insights & Articles
              </span>
            </div>

            {/* Heading */}
            <h2
              id="blog-heading"
              className="
                max-w-3xl
                text-3xl
                font-black
                leading-[1.1]
                tracking-tight
                text-[#111114]
                sm:text-4xl
                lg:text-[52px]
              "
            >
              Ideas, Insights &{" "}
              <br className="hidden sm:block" />

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
                Digital Stories.
              </span>
            </h2>
          </ScrollReveal>

          {/* =================================================
              RIGHT HEADER
          ================================================== */}

          <ScrollReveal
            className="lg:col-span-5 lg:pb-1"
            delay={150}
            y={25}
            duration={1000}
          >
            <p
              id="blog-subtitle"
              className="
                max-w-xl
                text-sm
                leading-7
                text-[#667085]
                sm:text-base
              "
            >
              Temukan insight, strategi, dan cerita seputar dunia digital
              untuk membantu bisnis Anda terus berkembang dan beradaptasi.
            </p>
          </ScrollReveal>
        </div>

        
        
        {/* =====================================================
            CATEGORY FILTER
        ====================================================== */}

        <ScrollReveal
          delay={100}
          y={15}
          duration={800}
          className="mb-8"
        >
          <div className="flex w-full flex-nowrap items-center gap-3 overflow-x-auto overflow-y-hidden pb-3 sm:flex-wrap sm:overflow-visible [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {categories.map((category) => {
              const isActive = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`
                    flex
                    shrink-0
                    cursor-pointer
                    items-center
                    justify-center
                    whitespace-nowrap
                    rounded-full
                    px-5
                    py-2.5
                    text-xs
                    font-bold
                    transition-all
                    duration-300
                    sm:text-sm
                    ${
                      isActive
                      ? `
                       bg-[#121E36]
                       text-white
                       shadow-lg
                       shadow-[#121E36]/10
                       `
                       : `
                       border
                       border-[#DFE7F4]
                       bg-white
                       text-[#667085]
                       hover:border-[#E26D13]/40
                       hover:bg-[#FFF7F0]
                       hover:text-[#E26D13]
                       `
                    }
                  `}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        
        {/* =====================================================
            BLOG GRID
        ====================================================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-6
            md:grid-cols-3
          "
        >
          {filteredPosts.length > 0 ? (
           filteredPosts.map((post, index) => (
            <ScrollReveal
              key={post.id}
              delay={index * 150}
              y={25}
              duration={1000}
            >
              <Link
                id={`blog-card-${post.id}`}
                to={`/blog/${post.id}`}
                className="
                  group
                  flex
                  cursor-pointer
                  flex-col
                  overflow-hidden
                  rounded-[28px]
                  border
                  border-[#E3EAF6]
                  bg-white
                  shadow-[0_12px_35px_rgba(25,55,100,0.05)]
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-[#E26D13]/30
                  hover:shadow-[0_22px_50px_rgba(226,109,19,0.12)]
                "
              >
                {/* =================================================
                    IMAGE
                ================================================== */}

                <div
                  className="
                    relative
                    aspect-[16/10]
                    overflow-hidden
                    bg-[#EEF3FA]
                  "
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-105
                    "
                    loading="lazy"
                  />

                  {/* Image Overlay */}
                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/40
                      via-transparent
                      to-transparent
                      opacity-60
                      transition-opacity
                      duration-500
                      group-hover:opacity-80
                    "
                  />

                  {/* Article Number */}
                  <div
                    className="
                      absolute
                      left-4
                      top-4
                      flex
                      h-9
                      min-w-9
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/25
                      bg-black/20
                      px-2
                      text-xs
                      font-bold
                      text-white
                      backdrop-blur-md
                    "
                  >
                    0{index + 1}
                  </div>

                  {/* Category */}
                  <div
                    className="
                      absolute
                      bottom-4
                      left-4
                      rounded-full
                      border
                      border-white/20
                      bg-white/15
                      px-3
                      py-1.5
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.12em]
                      text-white
                      backdrop-blur-md
                    "
                  >
                    {post.category}
                  </div>

                  {/* Open Icon */}
                  <div
                    className="
                      absolute
                      right-4
                      top-4
                      flex
                      h-10
                      w-10
                      translate-y-2
                      items-center
                      justify-center
                      rounded-full
                      bg-white
                      text-[#121E36]
                      opacity-0
                      shadow-xl
                      transition-all
                      duration-300
                      group-hover:translate-y-0
                      group-hover:opacity-100
                    "
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>

                {/* =================================================
                    CONTENT
                ================================================== */}

                <div className="flex flex-1 flex-col p-6">
                  {/* Title */}
                  <h3
                    className="
                      text-lg
                      font-extrabold
                      leading-snug
                      tracking-tight
                      text-[#111114]
                      transition-colors
                      duration-300
                      group-hover:text-[#E26D13]
                      sm:text-xl
                    "
                  >
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p
                    className="
                      mt-3
                      line-clamp-3
                      text-sm
                      leading-6
                      text-[#737B8C]
                    "
                  >
                    {post.excerpt}
                  </p>

                  {/* Read More */}
                  <div
                    className="
                      mt-auto
                      flex
                      items-center
                      justify-between
                      border-t
                      border-[#EDF1F7]
                      pt-5
                      mt-6
                    "
                  >
                    {/* YANKI */}
                    <div className="flex items-center gap-2">
                      <div
                        className="
                          flex
                          h-8
                          w-8
                          items-center
                          justify-center
                          rounded-full
                          bg-gradient-to-br
                          from-[#E26D13]
                          to-[#EAA412]
                          text-white
                        "
                      >
                        <Sparkles className="h-3.5 w-3.5" />
                      </div>

                      <span
                        className="
                          text-[10px]
                          font-bold
                          uppercase
                          tracking-[0.1em]
                          text-[#98A2B3]
                        "
                      >
                        YANKI 
                      </span>
                    </div>

                    {/* Read More */}
                    <span
                      className="
                        inline-flex
                        cursor-pointer
                        items-center
                        gap-1.5
                        text-xs
                        font-bold
                        text-[#1E3A5F]
                        transition-colors
                        duration-300
                        group-hover:text-[#E26D13]
                      "
                    >
                      <span>Read More</span>

                      <ArrowRight
                        className="
                          h-3.5
                          w-3.5
                          transition-transform
                          duration-300
                          group-hover:translate-x-1
                        "
                      />
                    </span>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))
        ) : (
          <div className="col-span-full py-16 text-center">
            <p className="text-lg font-bold text-[#121E36]">
              Belum ada artikel dalam kategori ini.
            </p>

            <p className="mt-2 text-sm text-[#737B8C]">
              Silakan pilih kategori lainnya.
            </p>
          </div>
        )}
        </div>

        {/* =====================================================
            BOTTOM CTA
        ====================================================== */}

        <ScrollReveal
          delay={150}
          y={20}
          duration={1000}
          className="
            mt-10
            flex
            items-center
            justify-center
          "
        >
          <div
            className="
              inline-flex
              items-center
              gap-3
              rounded-full
              border
              border-[#DFE7F4]
              bg-white
              px-5
              py-3
              shadow-[0_8px_25px_rgba(25,55,100,0.05)]
            "
          >
            <span
              className="
                h-2
                w-2
                rounded-full
                bg-gradient-to-r
                from-[#E26D13]
                to-[#EAA412]
              "
            />

            <span
              className="
                text-xs
                font-semibold
                text-[#667085]
                sm:text-sm
              "
            >
              Stay curious. Keep growing.
            </span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
