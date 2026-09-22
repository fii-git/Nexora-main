import React, { useState } from 'react';
import { projectItems } from '../data';
import { ProjectItem } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface ProjectsProps {
  onSelectProject?: (project: ProjectItem) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState('All');

  return (
    <section id="projects" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-xl">
            <h2
              id="projects-heading"
              className="text-3xl sm:text-4xl lg:text-[42px] font-black text-neutral-900 tracking-tight leading-[1.2]"
            >
              Awesome Project <br className="hidden sm:inline" />
              We've Ever Worked On
            </h2>
          </div>

          <div className="max-w-md flex flex-col sm:items-start md:items-end gap-4">
            <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed md:text-right">
              Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod
              Tempor Incididunt Ut Labore Et Dolore Magna Aliqua.
            </p>
            <a
              id="all-projects-btn"
              href="#projects"
              className="px-6 py-2.5 rounded-full bg-[#f95700] hover:bg-[#e44d00] text-white text-xs sm:text-sm font-bold shadow-md shadow-orange-500/20 transition-all cursor-pointer inline-flex items-center gap-1.5"
            >
              <span>All Project</span>
            </a>
          </div>
        </div>

        {/* 4 Vertical Gallery Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projectItems.map((project, index) => {
            const isFirst = index === 0;
            return (
              <div
                key={project.id}
                id={`project-card-${project.id}`}
                onClick={() => onSelectProject && onSelectProject(project)}
                className="group relative rounded-3xl overflow-hidden shadow-lg border border-neutral-100 bg-neutral-900 cursor-pointer aspect-[3/4.6] transform hover:-translate-y-1.5 transition-all duration-300"
              >
                {/* Background Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  loading="lazy"
                />

                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/90 transition-colors" />

                {/* Floating card content */}
                {isFirst ? (
                  /* First card has highlighted custom badge box matching image */
                  <div className="absolute inset-x-4 bottom-4 bg-black/60 backdrop-blur-md p-4 rounded-2xl border border-white/20">
                    <h3 className="text-base font-bold text-white mb-1">
                      Web Design
                    </h3>
                    <p className="text-[11px] text-neutral-300 leading-tight">
                      Lorem Ipsum Dolor Sit Amet, Consectetur
                    </p>
                  </div>
                ) : (
                  <div className="absolute inset-x-4 bottom-4 p-2 transition-transform duration-300">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#ff7a29] block mb-0.5">
                          {project.category}
                        </span>
                        <h3 className="text-sm font-bold text-white leading-tight">
                          {project.title}
                        </h3>
                      </div>
                      <span className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                        <ArrowUpRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
