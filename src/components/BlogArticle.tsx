import React from "react";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Check,
  Sparkles,
} from "lucide-react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import { blogPostsData } from "../data";
import { ScrollReveal } from "./ScrollReveal";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

interface BlogArticleProps {
  onOpenContact?: () => void;
}

export const BlogArticle: React.FC<BlogArticleProps> = ({
  onOpenContact,
}) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const postIndex = blogPostsData.findIndex((post) => post.id === id);
  const post = postIndex !== -1 ? blogPostsData[postIndex] : null;

  /* =========================================================
     SEO DATA
  ========================================================== */

  const siteUrl = "https://nexora.id";

  const seoTitle = `${post?.title ?? "Blog"} | NEXORA Digital Agency`;

  const seoDescription =
    post?.excerpt ??
    "Insight tentang digital strategy, technology, branding, dan digital experience dari NEXORA Digital Agency.";

  const seoImage = post?.image ?? "";

  const seoUrl = post
    ? `${siteUrl}/blog/${post.id}`
    : `${siteUrl}/blog`;

  /* =========================================================
     ARTICLE NOT FOUND
  ========================================================== */

  if (!post) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar onOpenContact={onOpenContact} />

        <main className="flex min-h-[70vh] items-center justify-center px-6 pt-32">
          <div className="mx-auto max-w-xl text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50">
              <Sparkles className="h-7 w-7 text-[#2587FF]" />
            </div>

            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#2587FF]">
              Article Not Found
            </p>

            <h1 className="text-3xl font-black tracking-tight text-[#111114] sm:text-4xl">
              Artikel yang kamu cari tidak ditemukan.
            </h1>

            <p className="mt-4 text-base leading-7 text-neutral-500">
              Artikel mungkin sudah dipindahkan atau URL yang digunakan tidak
              tersedia.
            </p>

            <Link
              to="/"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#111114] px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#2587FF]"
            >
              <ArrowLeft className="h-4 w-4" />
              Kembali ke Beranda
            </Link>
          </div>
        </main>

        <Footer />
      </div>
    );
  }

  /* =========================================================
     PREVIOUS / NEXT ARTICLE
  ========================================================== */

  const previousPost =
    postIndex > 0 ? blogPostsData[postIndex - 1] : null;

  const nextPost =
    postIndex < blogPostsData.length - 1
      ? blogPostsData[postIndex + 1]
      : null;

  /* =========================================================
     RELATED ARTICLES
  ========================================================== */

  const relatedPosts = blogPostsData
    .filter((item) => item.id !== post.id)
    .slice(0, 2);

  /* =========================================================
     ARTICLE PAGE
  ========================================================== */

  return (
    <>
      {/* =====================================================
          SEO / META DATA
      ====================================================== */}

      <Helmet>
        <title>{seoTitle}</title>

        <meta
          name="description"
          content={seoDescription}
        />

        <meta
          name="robots"
          content="index, follow"
        />

        {/* =================================================
            OPEN GRAPH
        ================================================== */}

        <meta
          property="og:type"
          content="article"
        />

        <meta
          property="og:title"
          content={post.title}
        />

        <meta
          property="og:description"
          content={seoDescription}
        />

        <meta
          property="og:image"
          content={seoImage}
        />

        <meta
          property="og:url"
          content={seoUrl}
        />

        <meta
          property="og:site_name"
          content="NEXORA Digital Agency"
        />

        {/* =================================================
            TWITTER / X
        ================================================== */}

        <meta
          name="twitter:card"
          content="summary_large_image"
        />

        <meta
          name="twitter:title"
          content={post.title}
        />

        <meta
          name="twitter:description"
          content={seoDescription}
        />

        <meta
          name="twitter:image"
          content={seoImage}
        />

        {/* =================================================
            ARTICLE METADATA
        ================================================== */}

        <meta
          property="article:section"
          content={post.category}
        />

        <meta
          property="article:published_time"
          content={post.date}
        />
      </Helmet>

      {/* =====================================================
          ARTICLE PAGE
      ====================================================== */}

      <div className="min-h-screen bg-white">
        <Navbar onOpenContact={onOpenContact} />

        <main>
          {/* =================================================
              ARTICLE HEADER
          ================================================== */}

          <section className="relative overflow-hidden bg-[#F8FAFF] px-6 pb-14 pt-36 sm:pb-20 sm:pt-40">
            {/* Decorative background */}
            <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-blue-100/40 blur-3xl" />

            <div className="relative mx-auto max-w-5xl">
              {/* Back to blog */}
              <ScrollReveal y={20}>
                <button
                  type="button"
                  onClick={() => navigate("/#blog")}
                  className="group mb-10 inline-flex items-center gap-2 text-sm font-bold text-neutral-500 transition hover:text-[#2587FF]"
                >
                  <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                  Kembali ke Blog
                </button>
              </ScrollReveal>

              {/* Meta */}
              <ScrollReveal y={25} delay={100}>
                <div className="mb-6 flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-[#2587FF]/10 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.16em] text-[#2587FF]">
                    {post.category}
                  </span>

                  <span className="h-1 w-1 rounded-full bg-neutral-300" />

                  <div className="flex items-center gap-2 text-sm font-medium text-neutral-500">
                    <CalendarDays className="h-4 w-4" />
                    {post.date}
                  </div>
                </div>
              </ScrollReveal>

              {/* Title */}
              <ScrollReveal y={30} delay={150}>
                <h1 className="max-w-4xl text-4xl font-black leading-[1.08] tracking-[-0.04em] text-[#111114] sm:text-5xl lg:text-6xl">
                  {post.title}
                </h1>
              </ScrollReveal>

              {/* Excerpt */}
              <ScrollReveal y={25} delay={250}>
                <p className="mt-7 max-w-3xl text-lg leading-8 text-neutral-500 sm:text-xl">
                  {post.excerpt}
                </p>
              </ScrollReveal>

              {/* Author / Brand */}
              <ScrollReveal y={20} delay={350}>
                <div className="mt-8 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[#2587FF] to-[#8B3DFF] text-sm font-black text-white">
                    N
                  </div>

                  <div>
                    <p className="text-sm font-bold text-[#111114]">
                      NEXORA Digital Agency
                    </p>

                    <p className="text-xs text-neutral-500">
                      Digital Strategy &amp; Creative Technology
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </section>

          {/* =================================================
              FEATURED IMAGE
          ================================================== */}

          <section className="px-6">
            <ScrollReveal y={35}>
              <div className="relative mx-auto -mt-6 max-w-6xl sm:-mt-10">
                <div className="overflow-hidden rounded-[28px] bg-neutral-100 shadow-[0_25px_80px_rgba(17,17,20,0.12)] sm:rounded-[36px]">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="aspect-[16/8] w-full object-cover"
                  />
                </div>

                {/* NEXORA Badge */}
                <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full border border-white/30 bg-white/90 px-4 py-2.5 shadow-lg backdrop-blur-xl sm:bottom-6 sm:left-6">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-[#2587FF] to-[#8B3DFF] text-[10px] font-black text-white">
                    N
                  </div>

                  <span className="text-xs font-extrabold text-[#111114]">
                    NEXORA
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </section>

          {/* =================================================
              ARTICLE CONTENT
          ================================================== */}

          <section className="px-6 py-16 sm:py-20 lg:py-24">
            <div className="mx-auto max-w-4xl">
              <ScrollReveal y={25}>
                <article className="text-neutral-700">
                  {/* Intro */}
                  <p className="mb-10 text-lg font-medium leading-8 text-neutral-600 sm:text-xl sm:leading-9">
                    {post.content}
                  </p>

                  {/* Dynamic Sections */}
                  {post.sections?.map((section, index) => {
                    /* =========================================
                       HEADING
                    ========================================== */

                    if (section.type === "heading") {
                      return (
                        <ScrollReveal
                          key={`${post.id}-heading-${index}`}
                          y={20}
                          delay={index * 30}
                        >
                          <h2 className="mb-5 mt-12 text-2xl font-black tracking-tight text-[#111114] sm:text-3xl">
                            {section.content}
                          </h2>
                        </ScrollReveal>
                      );
                    }

                    /* =========================================
                       PARAGRAPH
                    ========================================== */

                    if (section.type === "paragraph") {
                      return (
                        <p
                          key={`${post.id}-paragraph-${index}`}
                          className="mb-7 text-base leading-8 text-neutral-600 sm:text-lg sm:leading-9"
                        >
                          {section.content}
                        </p>
                      );
                    }

                    /* =========================================
                       LIST
                    ========================================== */

                    if (section.type === "list") {
                      return (
                        <div
                          key={`${post.id}-list-${index}`}
                          className="my-8 rounded-3xl border border-blue-100 bg-[#F8FAFF] p-6 sm:p-8"
                        >
                          <p className="mb-5 text-base font-bold leading-7 text-[#111114] sm:text-lg">
                            {section.content}
                          </p>

                          <ul className="space-y-4">
                            {section.items?.map((item, itemIndex) => (
                              <li
                                key={`${post.id}-list-${index}-${itemIndex}`}
                                className="flex items-start gap-3 text-base leading-7 text-neutral-600"
                              >
                                <span className="mt-1.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#2587FF]/10">
                                  <Check className="h-3 w-3 text-[#2587FF]" />
                                </span>

                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      );
                    }

                    /* =========================================
                       QUOTE
                    ========================================== */

                    if (section.type === "quote") {
                      return (
                        <blockquote
                          key={`${post.id}-quote-${index}`}
                          className="my-10 rounded-3xl border-l-4 border-[#2587FF] bg-gradient-to-r from-blue-50 to-purple-50 px-6 py-7 sm:px-8 sm:py-9"
                        >
                          <p className="text-xl font-bold leading-8 tracking-tight text-[#111114] sm:text-2xl sm:leading-9">
                            “{section.content}”
                          </p>

                          <footer className="mt-5 text-xs font-extrabold uppercase tracking-[0.18em] text-[#2587FF]">
                            NEXORA Digital Agency
                          </footer>
                        </blockquote>
                      );
                    }

                    return null;
                  })}
                </article>
              </ScrollReveal>
            </div>
          </section>

          {/* =================================================
              PREVIOUS / NEXT ARTICLE
          ================================================== */}

          {(previousPost || nextPost) && (
            <section className="border-y border-neutral-100 bg-[#FAFBFF] px-6 py-12 sm:py-16">
              <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2">
                {/* Previous */}
                {previousPost ? (
                  <Link
                    to={`/blog/${previousPost.id}`}
                    className="group rounded-3xl border border-neutral-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/40"
                  >
                    <div className="mb-5 flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.16em] text-neutral-400">
                      <ArrowLeft className="h-4 w-4" />
                      Artikel Sebelumnya
                    </div>

                    <div className="flex gap-4">
                      <img
                        src={previousPost.image}
                        alt={previousPost.title}
                        className="h-20 w-24 shrink-0 rounded-2xl object-cover"
                      />

                      <div>
                        <span className="text-xs font-bold text-[#2587FF]">
                          {previousPost.category}
                        </span>

                        <h3 className="mt-1 line-clamp-2 text-base font-black leading-6 text-[#111114] transition group-hover:text-[#2587FF]">
                          {previousPost.title}
                        </h3>
                      </div>
                    </div>
                  </Link>
                ) : (
                  <div />
                )}

                {/* Next */}
                {nextPost ? (
                  <Link
                    to={`/blog/${nextPost.id}`}
                    className="group rounded-3xl border border-neutral-200 bg-white p-6 text-left transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/40 md:text-right"
                  >
                    <div className="mb-5 flex items-center justify-end gap-2 text-xs font-extrabold uppercase tracking-[0.16em] text-neutral-400">
                      Artikel Berikutnya
                      <ArrowRight className="h-4 w-4" />
                    </div>

                    <div className="flex flex-row-reverse gap-4 md:flex-row">
                      <img
                        src={nextPost.image}
                        alt={nextPost.title}
                        className="h-20 w-24 shrink-0 rounded-2xl object-cover"
                      />

                      <div className="flex-1">
                        <span className="text-xs font-bold text-[#2587FF]">
                          {nextPost.category}
                        </span>

                        <h3 className="mt-1 line-clamp-2 text-base font-black leading-6 text-[#111114] transition group-hover:text-[#2587FF]">
                          {nextPost.title}
                        </h3>
                      </div>
                    </div>
                  </Link>
                ) : null}
              </div>
            </section>
          )}

          {/* =================================================
              MORE ARTICLES
          ================================================== */}

          <section className="px-6 py-20 sm:py-24">
            <div className="mx-auto max-w-6xl">
              <ScrollReveal y={25}>
                <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
                  <div>
                    <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.2em] text-[#2587FF]">
                      Keep Exploring
                    </p>

                    <h2 className="text-3xl font-black tracking-tight text-[#111114] sm:text-4xl">
                      More Articles
                    </h2>
                  </div>

                  <Link
                    to="/#blog"
                    className="inline-flex items-center gap-2 text-sm font-bold text-neutral-500 transition hover:text-[#2587FF]"
                  >
                    Lihat Semua
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </ScrollReveal>

              <div className="grid gap-6 md:grid-cols-2">
                {relatedPosts.map((relatedPost, index) => (
                  <ScrollReveal
                    key={relatedPost.id}
                    y={30}
                    delay={index * 150}
                  >
                    <Link
                      to={`/blog/${relatedPost.id}`}
                      className="group block overflow-hidden rounded-[28px] border border-neutral-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-100/40"
                    >
                      <div className="relative overflow-hidden">
                        <img
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          className="aspect-[16/8] w-full object-cover transition duration-700 group-hover:scale-105"
                        />

                        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.15em] text-[#2587FF] shadow-sm backdrop-blur">
                          {relatedPost.category}
                        </span>
                      </div>

                      <div className="p-6">
                        <div className="mb-3 flex items-center gap-2 text-xs font-medium text-neutral-400">
                          <CalendarDays className="h-3.5 w-3.5" />
                          {relatedPost.date}
                        </div>

                        <h3 className="line-clamp-2 text-xl font-black leading-7 tracking-tight text-[#111114] transition group-hover:text-[#2587FF]">
                          {relatedPost.title}
                        </h3>

                        <p className="mt-3 line-clamp-2 text-sm leading-6 text-neutral-500">
                          {relatedPost.excerpt}
                        </p>

                        <div className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#2587FF]">
                          Baca Artikel
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </div>
                      </div>
                    </Link>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};