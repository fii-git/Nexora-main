import React, { useMemo, useState } from 'react';
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

          {/* LEFT */}
          <div className="lg:col-span-7">

            {/* Label */}
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

          {/* RIGHT */}
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
            FILTER
        ====================================================== */}

        <div
          className="
            mb-10
            flex
            flex-wrap
            items-center
            gap-2
          "
        >

          {categories.map((category) => {
            const isActive = activeFilter === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveFilter(category)}
                className={`
                  cursor-pointer
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

        {/* =====================================================
            PROJECT GRID
        ====================================================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-6
            sm:grid-cols-2
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
                  aspect-[3/4.4]
                  cursor-pointer
                  overflow-hidden
                  rounded-[30px]
                  border
                  border-white
                  bg-[#111827]
                  shadow-[0_15px_40px_rgba(25,55,100,0.10)]
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:shadow-[0_25px_55px_rgba(37,99,235,0.16)]
                "
              >

                {/* =================================================
                    IMAGE
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
                    GRADIENT OVERLAY
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
                    TOP NUMBER
                ================================================== */}

                <div
                  className="
                    absolute
                    left-5
                    top-5
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
                  "
                >
                  {projectNumber}
                </div>

                {/* =================================================
                    TOP ARROW
                ================================================== */}

                <div
                  className="
                    absolute
                    right-5
                    top-5
                    flex
                    h-10
                    w-10
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
                  "
                >
                  <ArrowUpRight className="h-4 w-4" />
                </div>

                {/* =================================================
                    CONTENT
                ================================================== */}

                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    right-0
                    p-5
                    sm:p-6
                  "
                >

                  {/* Category */}
                  <div className="mb-2">

                    <span
                      className="
                        inline-flex
                        rounded-full
                        border
                        border-white/15
                        bg-white/10
                        px-3
                        py-1
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-[0.15em]
                        text-white/80
                        backdrop-blur-md
                      "
                    >
                      {project.category}
                    </span>

                  </div>

                  {/* Title */}
                  <h3
                    className="
                      text-lg
                      font-black
                      leading-tight
                      text-white
                      transition-transform
                      duration-300
                      group-hover:-translate-y-0.5
                    "
                  >
                    {project.title}
                  </h3>

                  {/* View Project */}
                  <div
                    className="
                      mt-3
                      flex
                      items-center
                      gap-2
                      text-xs
                      font-semibold
                      text-white/60
                      transition-all
                      duration-300
                      group-hover:text-white
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
              p-12
              text-center
              shadow-sm
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
            mt-12
            flex
            flex-col
            items-start
            justify-between
            gap-5
            rounded-[28px]
            border
            border-[#E3EAF6]
            bg-white/80
            p-6
            shadow-[0_15px_40px_rgba(25,55,100,0.05)]
            backdrop-blur-xl
            sm:flex-row
            sm:items-center
            sm:p-7
          "
        >

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
              gap-2
              rounded-full
              bg-[#111114]
              px-6
              py-3
              text-sm
              font-bold
              text-white
              shadow-lg
              shadow-black/10
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-[#2587FF]
            "
          >
            <span>Explore Projects</span>
            <ArrowRight className="h-4 w-4" />
          </button>

        </div>

      </div>

    </section>
  );
};