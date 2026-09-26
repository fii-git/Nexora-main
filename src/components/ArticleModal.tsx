import React from "react";
import { BlogPost } from "../types";
import { X, Calendar, Tag } from "lucide-react";

interface ArticleModalProps {
  post: BlogPost | null;
  onClose: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({
  post,
  onClose,
}) => {
  if (!post) return null;

  return (
    <div
      id="article-modal-backdrop"
      className="
        fixed inset-0 z-50
        flex items-center justify-center
        overflow-hidden
        bg-black/75
        p-4
        backdrop-blur-sm
        sm:p-6
      "
      onClick={onClose}
    >
      <div
        id="article-modal-container"
        className="
          relative
          flex
          w-full
          max-w-2xl
          max-h-[78vh]
          flex-col
          overflow-hidden
          rounded-[26px]
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
          id="close-article-modal-btn"
          type="button"
          onClick={onClose}
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
            bg-black/60
            text-white
            transition-all
            duration-300
            hover:bg-black
            hover:scale-105
          "
        >
          <X className="h-5 w-5" />
        </button>

        {/* =====================================================
            ARTICLE FEATURED IMAGE
        ====================================================== */}

        <div
          className="
            relative
            h-[180px]
            w-full
            shrink-0
            bg-neutral-100
            sm:h-[210px]
          "
        >
          <img
            src={post.image}
            alt={post.title}
            className="h-full w-full object-cover"
          />

          {/* Image Overlay */}

          <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

          {/* Category */}

          <div
            className="
              absolute
              left-4
              top-4
              rounded-full
              bg-[#2587FF]
              px-3
              py-1
              text-xs
              font-bold
              text-white
              shadow-lg
            "
          >
            {post.category}
          </div>
        </div>

        {/* =====================================================
            CONTENT
        ====================================================== */}

        <div
          className="
            article-modal-scroll
            min-h-0
            flex-1
            overflow-y-auto
            px-6
            pb-6
            pt-6
            sm:px-8
            sm:pb-7
            sm:pt-7
          "
        >
          {/* Meta */}

          <div className="mb-3 flex items-center gap-4 text-xs text-neutral-400">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" />
              {post.date}
            </span>

            <span className="flex items-center gap-1.5">
              <Tag className="h-3.5 w-3.5" />
              Lumos Insights
            </span>
          </div>

          {/* Title */}

          <h2
            className="
              text-xl
              font-black
              leading-snug
              text-neutral-900
              sm:text-2xl
            "
          >
            {post.title}
          </h2>

          {/* Excerpt */}

          <p
            className="
              mt-3
              text-sm
              leading-relaxed
              text-neutral-600
            "
          >
            {post.excerpt}
          </p>

          {/* Article Content */}

          <div
            className="
              mt-4
              border-t
              border-neutral-100
              pt-4
              text-sm
              leading-relaxed
              text-neutral-700
            "
          >
            <p>{post.content}</p>

            <p className="mt-3">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
          </div>

          {/* Done Reading */}

          <div className="flex justify-end pt-5">
            <button
              type="button"
              onClick={onClose}
              className="
                cursor-pointer
                rounded-full
                bg-gradient-to-r
                from-[#2587FF]
                to-[#8B3DFF]
                px-6
                py-2.5
                text-xs
                font-bold
                text-white
                shadow-[0_10px_25px_rgba(65,104,255,0.20)]
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:shadow-[0_14px_30px_rgba(65,104,255,0.28)]
              "
            >
              Done Reading
            </button>
          </div>
        </div>
      </div>

      {/* =====================================================
          SCROLLBAR
      ====================================================== */}

      <style>{`
        .article-modal-scroll {
          scrollbar-width: thin;
          scrollbar-color: #cbd5e1 transparent;
        }

        .article-modal-scroll::-webkit-scrollbar {
          width: 5px;
        }

        .article-modal-scroll::-webkit-scrollbar-track {
          background: transparent;
        }

        .article-modal-scroll::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 999px;
        }

        .article-modal-scroll::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
      `}</style>
    </div>
  );
};