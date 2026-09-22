import React from 'react';
import { blogPostsData } from '../data';
import { BlogPost } from '../types';
import { ArrowRight } from 'lucide-react';

interface BlogProps {
  onSelectArticle: (post: BlogPost) => void;
}

export const Blog: React.FC<BlogProps> = ({ onSelectArticle }) => {
  return (
    <section id="blog" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center">
            <span
              id="blog-tag-badge"
              className="px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold text-[#f95700] bg-[#fff1ec] tracking-wide"
            >
              Blog & Article
            </span>
          </div>

          <h2
            id="blog-heading"
            className="text-3xl sm:text-4xl lg:text-[44px] font-black text-neutral-900 tracking-tight leading-[1.2]"
          >
            Latest Blog & News
          </h2>

          <p
            id="blog-subtitle"
            className="text-neutral-500 text-xs sm:text-sm leading-relaxed"
          >
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod
            Tempor Incididunt Ut Labore Et Dolore Magna Aliqua.
          </p>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPostsData.map((post) => (
            <article
              key={post.id}
              id={`blog-card-${post.id}`}
              className="group flex flex-col justify-between"
            >
              <div>
                {/* Image Container with smooth rounded corners matching image */}
                <div
                  className="rounded-3xl overflow-hidden shadow-sm aspect-[16/10] bg-neutral-100 mb-5 cursor-pointer relative"
                  onClick={() => onSelectArticle(post)}
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-full text-[10px] font-bold text-neutral-800">
                    {post.category}
                  </div>
                </div>

                {/* Title */}
                <h3
                  onClick={() => onSelectArticle(post)}
                  className="text-lg sm:text-xl font-bold text-neutral-900 leading-snug mb-3 cursor-pointer group-hover:text-[#f95700] transition-colors"
                >
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed mb-4">
                  {post.excerpt}
                </p>
              </div>

              {/* Read More button */}
              <div>
                <button
                  type="button"
                  onClick={() => onSelectArticle(post)}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#f95700] hover:text-[#e44d00] transition-colors cursor-pointer"
                >
                  <span>Read More</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
