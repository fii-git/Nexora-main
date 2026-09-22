import React from 'react';
import { BlogPost } from '../types';
import { X, Calendar, Tag } from 'lucide-react';

interface ArticleModalProps {
  post: BlogPost | null;
  onClose: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ post, onClose }) => {
  if (!post) return null;

  return (
    <div
      id="article-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="article-modal-container"
        className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl my-8 border border-neutral-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="close-article-modal-btn"
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Article Featured Image */}
        <div className="relative aspect-[16/9] w-full bg-neutral-100">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4 bg-[#f95700] text-white text-xs font-bold px-3 py-1 rounded-full">
            {post.category}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-4 text-xs text-neutral-400">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Tag className="w-3.5 h-3.5" />
              Lumos Insights
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl font-black text-neutral-900 leading-snug">
            {post.title}
          </h2>

          <p className="text-neutral-600 text-sm leading-relaxed">
            {post.excerpt}
          </p>

          <div className="pt-2 text-neutral-700 text-sm leading-relaxed space-y-3 border-t border-neutral-100">
            <p>{post.content}</p>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
          </div>

          <div className="pt-4 flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2.5 rounded-full bg-[#f95700] hover:bg-[#e44d00] text-white text-xs font-bold transition-colors cursor-pointer"
            >
              Done Reading
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
