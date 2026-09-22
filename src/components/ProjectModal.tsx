import React from 'react';
import { ProjectItem } from '../types';
import {
  X,
  ExternalLink,
  ArrowUpRight,
} from 'lucide-react';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onConsult: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onConsult,
}) => {
  if (!project) return null;

  return (
    <div
      id="project-modal-backdrop"
      className="
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
        overflow-hidden
      bg-black/65
        p-4
        backdrop-blur-sm
        sm:p-6
      "
        onClick={onClose}
    >
      <div
        id="project-modal-container"
        className="
          relative
          w-full
          max-w-xl
          overflow-hidden
          rounded-[28px]
          border
        border-white/60
        bg-white
          shadow-[0_30px_80px_rgba(0,0,0,0.25)]
        "
          onClick={(e) => e.stopPropagation()}
      >

        {/* =====================================================
            CLOSE BUTTON
        ====================================================== */}

        <button
          id="close-project-modal-btn"
          type="button"
          onClick={onClose}
          aria-label="Close project detail"
          className="
            absolute
            right-4
            top-4
            z-30
            flex
            h-9
            w-9
            cursor-pointer
            items-center
            justify-center
            rounded-full
            border
            border-white/20
            bg-black/50
            text-white
            backdrop-blur-md
            transition-all
            duration-300
            hover:scale-105
            hover:bg-black/70
          "
        >
          <X className="h-4 w-4" />
        </button>

        {/* =====================================================
            PROJECT IMAGE
        ====================================================== */}

        <div
          className="
            relative
            aspect-[16/8]
            w-full
            overflow-hidden
            bg-[#111827]
          "
        >

          <img
            src={project.image}
            alt={project.title}
            className="
              h-full
              w-full
              object-cover
              transition-transform
              duration-700
              hover:scale-[1.03]
            "
          />

          {/* Image Gradient */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black/60
              via-black/5
              to-transparent
            "
          />

          {/* Category */}
          <div
            className="
              absolute
              bottom-4
              left-4
              rounded-full
              border
              border-white/20
              bg-black/45
              px-3.5
              py-1.5
              text-[10px]
              font-bold
              uppercase
              tracking-[0.12em]
              text-white
              backdrop-blur-md
            "
          >
            {project.category}
          </div>

        </div>

        {/* =====================================================
            PROJECT DETAILS
        ====================================================== */}

        <div className="p-5 sm:p-6">

          {/* Title */}
          <h3
            className="
              pr-8
              text-xl
              font-black
              leading-tight
              tracking-tight
              text-[#111114]
              sm:text-2xl
            "
          >
            {project.title}
          </h3>

          {/* Main Description */}
          <p
            className="
              mt-3
              text-sm
              leading-6
              text-[#667085]
            "
          >
            {project.description}
          </p>

          {/* Additional Description */}
          <p
            className="
              mt-3
              text-xs
              leading-5
              text-[#98A2B3]
            "
          >
            Designed and engineered for optimum user retention, brand
            resonance, and flawless cross-device performance.
          </p>

          {/* =================================================
              DIVIDER
          ================================================== */}

          <div
            className="
              my-5
              h-px
              bg-[#EDF1F7]
            "
          />

          {/* =================================================
              FOOTER
          ================================================== */}

          <div
            className="
              flex
              flex-col
              gap-4
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >

            {/* Case Study Label */}
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
                  from-[#2587FF]
                  to-[#8B3DFF]
                  text-white
                "
              >
                <ArrowUpRight className="h-3.5 w-3.5" />
              </div>

              <div>
                <span
                  className="
                    block
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.12em]
                    text-[#98A2B3]
                  "
                >
                  NEXORA
                </span>

                <span
                  className="
                    block
                    text-xs
                    font-semibold
                    text-[#667085]
                  "
                >
                  Agency Case Study
                </span>
              </div>

            </div>

            {/* Buttons */}
            <div
              className="
                flex
                items-center
                gap-2
              "
            >

              {/* Close */}
              <button
                type="button"
                onClick={onClose}
                className="
                  cursor-pointer
                  rounded-full
                  px-4
                  py-2.5
                  text-xs
                  font-bold
                  text-[#667085]
                  transition-all
                  duration-300
                  hover:bg-[#F2F5FA]
                  hover:text-[#111114]
                "
              >
                Close
              </button>

              {/* Request Project */}
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onConsult();
                }}
                className="
                  inline-flex
                  cursor-pointer
                  items-center
                  gap-1.5
                  rounded-full
                  bg-gradient-to-r
                  from-[#2587FF]
                  to-[#8B3DFF]
                  px-4
                  py-2.5
                  text-xs
                  font-bold
                  text-white
                  shadow-lg
                  shadow-[#4168FF]/20
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:shadow-xl
                  hover:shadow-[#4168FF]/25
                "
              >
                <span>Request Similar Project</span>

                <ExternalLink className="h-3.5 w-3.5" />
              </button>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
};