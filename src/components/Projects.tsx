import React, { useMemo, useRef, useState } from 'react';
import { projectItems } from '../data';
import { ProjectItem } from '../types';
import {
  ArrowUpRight,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

interface ProjectsProps {
  onSelectProject?: (project: ProjectItem) => void;
}

export const Projects: React.FC<ProjectsProps> = ({
  onSelectProject,
}) => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filterRef = useRef<HTMLDivElement>(null);

  // =========================================================
  // PROJECT CATEGORIES
  // =========================================================

  const categories = useMemo(() => {
    const uniqueCategories = Array.from(
      new Set(projectItems.map((project) => project.category))
    );

    return ['All', ...uniqueCategories];
  }, []);

  // =========================================================
  // FILTER PROJECTS
  // =========================================================

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') {
      return projectItems;
    }

    return projectItems.filter(
      (project) => project.category === activeFilter
    );
  }, [activeFilter]);

  // =========================================================
  // SELECT CATEGORY
  // =========================================================

  const handleFilterChange = (category: string) => {
    setActiveFilter(category);

    const container = filterRef.current;

    if (!container) {
      return;
    }

    const buttons = Array.from(
      container.querySelectorAll('button')
    );

    const selectedButton = buttons.find(
      (button) => button.textContent?.trim() === category
    ) as HTMLElement | undefined;

    if (!selectedButton) {
      return;
    }

    const containerRect = container.getBoundingClientRect();
    const buttonRect = selectedButton.getBoundingClientRect();

    const offset =
      buttonRect.left -
      containerRect.left -
      containerRect.width / 2 +
      buttonRect.width / 2;

    container.scrollBy({
      left: offset,
      behavior: 'smooth',
    });
  };

  return (
    <section
      id="projects"
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
          top-20
          h-96
          w-96
          rounded-full
          bg-[#2587FF]/10
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
          bg-[#8B3DFF]/10
          blur-3xl
        "
      />

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

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
            mb-10
            grid
            grid-cols-1
            gap-7
            lg:mb-14
            lg:grid-cols-12
            lg:items-end
          "
        >
          {/* LEFT SIDE */}

          <div className="lg:col-span-7">
            {/* Section Label */}

            <div
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
                Our Projects
              </span>
            </div>

            {/* Heading */}

            <h2
              id="projects-heading"
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
              Work That Speaks

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
                For Itself.
              </span>
            </h2>
          </div>

          {/* RIGHT SIDE */}

          <div className="lg:col-span-5 lg:pb-1">
            <p
              className="
                max-w-xl
                text-sm
                leading-7
                text-[#667085]
                sm:text-base
              "
            >
              Beberapa project yang kami kerjakan untuk membantu bisnis
              membangun brand, website, dan pengalaman digital yang lebih
              modern.
            </p>
          </div>
        </div>

        {/* =====================================================
            FILTER CATEGORY
        ====================================================== */}

        <div className="relative mb-10">
          <div
            ref={filterRef}
            className="
              flex
              items-center
              gap-2
              overflow-x-auto
              scroll-smooth
              px-1
              py-1
              [scrollbar-width:none]
              [-ms-overflow-style:none]
              [&::-webkit-scrollbar]:hidden

              sm:flex-wrap
              sm:overflow-visible
            "
          >
            {categories.map((category) => {
              const isActive = activeFilter === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => handleFilterChange(category)}
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
                          bg-[#111114]
                          text-white
                          shadow-lg
                          shadow-black/10
                        `
                        : `
                          border
                          border-[#DFE7F4]
                          bg-white
                          text-[#667085]
                          hover:border-[#BDD3FF]
                          hover:bg-[#F4F8FF]
                          hover:text-[#4168FF]
                        `
                    }
                  `}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            PROJECT GRID
        ====================================================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-5
            sm:grid-cols-2
            sm:gap-6
            lg:grid-cols-4
          "
        >
          {filteredProjects.map((project, index) => {
            const projectNumber = String(index + 1).padStart(2, '0');

            return (
              <div
                key={project.id}
                id={`project-card-${project.id}`}
                onClick={() => onSelectProject?.(project)}
                className="
                  group
                  relative
                  aspect-[3/3.35]
                  cursor-pointer
                  overflow-hidden
                  rounded-[26px]
                  border
                  border-white
                  bg-[#111827]
                  shadow-[0_15px_40px_rgba(25,55,100,0.10)]
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:shadow-[0_25px_55px_rgba(37,99,235,0.16)]

                  sm:aspect-[3/4]
                  sm:rounded-[30px]
                "
              >
                {/* =================================================
                    PROJECT IMAGE
                ================================================== */}

                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-110
                  "
                  loading="lazy"
                />

                {/* =================================================
                    IMAGE OVERLAY
                ================================================== */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[#080B14]/95
                    via-[#080B14]/25
                    to-transparent
                    transition-all
                    duration-500
                    group-hover:from-[#080B14]/90
                    group-hover:via-[#4168FF]/20
                  "
                />

                {/* =================================================
                    PROJECT NUMBER
                ================================================== */}

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
                    border-white/20
                    bg-black/20
                    px-2
                    text-xs
                    font-bold
                    text-white
                    backdrop-blur-md

                    sm:left-5
                    sm:top-5
                  "
                >
                  {projectNumber}
                </div>

                {/* =================================================
                    PROJECT ARROW
                ================================================== */}

                <div
                  className="
                    absolute
                    right-4
                    top-4
                    flex
                    h-9
                    w-9
                    translate-y-2
                    items-center
                    justify-center
                    rounded-full
                    bg-white
                    text-[#111114]
                    opacity-0
                    shadow-xl
                    transition-all
                    duration-300
                    group-hover:translate-y-0
                    group-hover:opacity-100

                    sm:right-5
                    sm:top-5
                    sm:h-10
                    sm:w-10
                  "
                >
                  <ArrowUpRight className="h-4 w-4" />
                </div>

                {/* =================================================
                    PROJECT CONTENT
                ================================================== */}

                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    right-0
                    p-4

                    sm:p-6
                  "
                >
                  {/* Category */}

                  <div className="mb-1.5 sm:mb-2">
                    <span
                      className="
                        inline-flex
                        rounded-full
                        border
                        border-white/15
                        bg-white/10
                        px-2.5
                        py-1
                        text-[9px]
                        font-bold
                        uppercase
                        tracking-[0.12em]
                        text-white/80
                        backdrop-blur-md

                        sm:px-3
                        sm:text-[10px]
                        sm:tracking-[0.15em]
                      "
                    >
                      {project.category}
                    </span>
                  </div>

                  {/* Title */}

                  <h3
                    className="
                      text-base
                      font-black
                      leading-tight
                      text-white
                      transition-transform
                      duration-300
                      group-hover:-translate-y-0.5

                      sm:text-lg
                    "
                  >
                    {project.title}
                  </h3>

                  {/* View Project */}

                  <div
                    className="
                      mt-2
                      flex
                      items-center
                      gap-2
                      text-[11px]
                      font-semibold
                      text-white/60
                      transition-all
                      duration-300
                      group-hover:text-white

                      sm:mt-3
                      sm:text-xs
                    "
                  >
                    <span>View Project</span>

                    <ArrowRight
                      className="
                        h-3.5
                        w-3.5
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                      "
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* =====================================================
            EMPTY STATE
        ====================================================== */}

        {filteredProjects.length === 0 && (
          <div
            className="
              rounded-[28px]
              border
              border-[#E3EAF6]
              bg-white
              p-10
              text-center
              shadow-sm

              sm:p-12
            "
          >
            <p className="text-sm font-semibold text-[#667085]">
              Belum ada project pada kategori ini.
            </p>
          </div>
        )}

        {/* =====================================================
            BOTTOM CTA
        ====================================================== */}

        <div
          className="
            mt-10
            flex
            flex-col
            items-start
            justify-between
            gap-5
            rounded-[28px]
            border
            border-[#E3EAF6]
            bg-white/80
            p-5
            shadow-[0_15px_40px_rgba(25,55,100,0.05)]
            backdrop-blur-xl

            sm:mt-12
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
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-gradient-to-br
                from-[#2587FF]
                to-[#8B3DFF]
                text-white

                sm:h-11
                sm:w-11
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
                Punya project seperti ini?
              </h3>

              <p
                className="
                  mt-1
                  text-xs
                  text-[#7A8496]
                  sm:text-sm
                "
              >
                Mari buat solusi digital untuk bisnis Anda.
              </p>
            </div>
          </div>

          {/* CTA BUTTON */}

          <button
            type="button"
            onClick={() => {
              const firstProject = projectItems[0];

              if (firstProject) {
                onSelectProject?.(firstProject);
              }
            }}
            className="
              inline-flex
              cursor-pointer
              items-center
              justify-center
              gap-2
              rounded-full
              bg-gradient-to-r
            from-[#2587FF]
            to-[#8B3DFF]
              px-6
              py-3
              text-sm
              font-bold
            text-white
              shadow-[0_10px_25px_rgba(65,104,255,0.20)]
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:shadow-[0_14px_30px_rgba(65,104,255,0.28)]
            "
          >
            <span className="relative z-10">Explore Projects</span>
            <span className="absolute inset-0 bg-linear-to-r from-[#8B3DFF] to-[#2587FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <ArrowRight className="h-4 w-4 relative z-10" /> 
          </button>
        </div>
      </div>
    </section>
  );
};