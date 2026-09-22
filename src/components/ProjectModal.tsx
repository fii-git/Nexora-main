import React from 'react';
import { ProjectItem } from '../types';
import { X, ExternalLink } from 'lucide-react';

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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        id="project-modal-container"
        className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-neutral-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="close-project-modal-btn"
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Project Image */}
        <div className="relative aspect-[16/10] w-full bg-neutral-900">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/20 text-white text-xs font-bold">
            {project.category}
          </div>
        </div>

        {/* Project Details */}
        <div className="p-6 sm:p-8 space-y-4">
          <h3 className="text-2xl font-black text-neutral-900 leading-snug">
            {project.title}
          </h3>

          <p className="text-sm text-neutral-600 leading-relaxed">
            {project.description}
          </p>

          <p className="text-xs text-neutral-500 leading-relaxed">
            Designed and engineered for optimum user retention, brand resonance,
            and flawless cross-device performance.
          </p>

          <div className="pt-4 flex items-center justify-between border-t border-neutral-100">
            <span className="text-xs font-semibold text-neutral-400">
              Agency Case Study
            </span>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-full text-xs font-bold text-neutral-600 hover:bg-neutral-100 transition-colors cursor-pointer"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onConsult();
                }}
                className="px-5 py-2.5 rounded-full bg-[#f95700] hover:bg-[#e44d00] text-white text-xs font-bold transition-all shadow-md shadow-orange-500/20 cursor-pointer inline-flex items-center gap-1.5"
              >
                <span>Request Similar Project</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
