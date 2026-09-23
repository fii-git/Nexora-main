import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Linkedin,
  Twitter,
  ArrowUp,
  ArrowRight,
} from "lucide-react";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <footer
      id="contact"
      className="
        relative
        overflow-hidden
        bg-[#0B1020]
        text-white
      "
    >
      {/* Background Glow */}
      <div
        className="
          pointer-events-none
          absolute
          -right-40
          -top-40
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
          -bottom-40
          left-1/4
          h-96
          w-96
          rounded-full
          bg-[#8B3DFF]/10
          blur-3xl
        "
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* =========================================
            TOP CTA
        ========================================== */}
        <div
          className="
            border-b
            border-white/10
            py-12
            sm:py-14
          "
        >
          <div
            className="
              flex
              flex-col
              gap-6
              lg:flex-row
              lg:items-center
              lg:justify-between
            "
          >
            <div className="max-w-2xl">
              <span
                className="
                  inline-flex
                  items-center
                  gap-2
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-[#6EA8FF]
                "
              >
                <span className="h-[2px] w-8 bg-gradient-to-r from-[#2587FF] to-[#8B3DFF]" />
                Let's Work Together
              </span>

              <h2
                className="
                  mt-3
                  text-3xl
                  font-bold
                  leading-tight
                  tracking-tight
                  sm:text-4xl
                "
              >
                Let's build something{" "}
                <span
                  className="
                    bg-gradient-to-r
                    from-[#4CA0FF]
                    via-[#6878FF]
                    to-[#A855F7]
                    bg-clip-text
                    text-transparent
                  "
                >
                  great together.
                </span>
              </h2>

              <p
                className="
                  mt-3
                  max-w-xl
                  text-sm
                  leading-6
                  text-slate-400
                "
              >
                Punya ide, project, atau bisnis yang ingin dikembangkan secara
                digital? Mari wujudkan bersama NEXORA.
              </p>
            </div>

            <button
              type="button"
              onClick={() => scrollToSection("contact")}
              className="
                overflow-hidden
                group
                inline-flex
                w-fit
                items-center
                gap-3
                rounded-full
                bg-linear-to-r
                from-[#2587FF]
                to-[#8B3DFF]
                px-6
                py-3
                text-sm
                font-bold
                text-white
                shadow-[0_12px_30px_rgba(65,104,255,0.25)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_18px_40px_rgba(65,104,255,0.35)]
              "
            >
              <span className="relative z-10"> Start a Project</span>
              <span className="absolute inset-0 bg-linear-to-r from-[#8B3DFF] to-[#2587FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <ArrowRight
                className="
                  h-4
                  w-4
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </button>
          </div>
        </div>

        {/* =========================================
            MAIN FOOTER
        ========================================== */}
        <div
          className="
            grid
            grid-cols-1
            gap-10
            py-12
            sm:grid-cols-2
            lg:grid-cols-12
            lg:gap-8
            lg:py-14
          "
        >
          {/* =====================================
              BRAND
          ====================================== */}
          <div className="sm:col-span-2 lg:col-span-5">
            {/* Logo */}
            <button
              type="button"
              onClick={scrollToTop}
              className="group inline-flex items-center"
              aria-label="Back to homepage"
            >
              <img
                src="/src/assets/LOGO3.png"
                alt="NEXORA Digital Agency"
                className="
                  h-10
                  w-auto
                  object-contain
                  transition-transform
                  duration-300
                  group-hover:scale-105
                "
              />
            </button>

            <p
              className="
                mt-5
                max-w-md
                text-sm
                leading-7
                text-slate-400
              "
            >
              NEXORA Digital Agency membantu bisnis membangun digital presence
              melalui strategi, desain, teknologi, dan solusi digital yang
              berorientasi pada pertumbuhan.
            </p>

            {/* Social Media */}
            <div className="mt-6 flex items-center gap-3">
              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.04]
                  text-slate-400
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#2587FF]/40
                  hover:bg-[#2587FF]/10
                  hover:text-white
                "
              >
                <Instagram className="h-4 w-4" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.04]
                  text-slate-400
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#2587FF]/40
                  hover:bg-[#2587FF]/10
                  hover:text-white
                "
              >
                <Linkedin className="h-4 w-4" />
              </a>

              {/* Twitter / X */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.04]
                  text-slate-400
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#2587FF]/40
                  hover:bg-[#2587FF]/10
                  hover:text-white
                "
              >
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* =====================================
              COMPANY
          ====================================== */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold text-white">Company</h3>

            <ul className="mt-5 space-y-3 text-sm text-slate-400">
              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection("about")}
                  className="
                    transition-colors
                    hover:text-white
                  "
                >
                  About Us
                </button>
              </li>

              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection("why-us")}
                  className="
                    transition-colors
                    hover:text-white
                  "
                >
                  Why NEXORA
                </button>
              </li>

              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection("projects")}
                  className="
                    transition-colors
                    hover:text-white
                  "
                >
                  Projects
                </button>
              </li>

              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection("blog")}
                  className="
                    transition-colors
                    hover:text-white
                  "
                >
                  Blog
                </button>
              </li>
            </ul>
          </div>

          {/* =====================================
              SERVICES
          ====================================== */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold text-white">Services</h3>

            <ul className="mt-5 space-y-3 text-sm text-slate-400">
              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection("services")}
                  className="
                    text-left
                    transition-colors
                    hover:text-white
                  "
                >
                  Web Development
                </button>
              </li>

              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection("services")}
                  className="
                    text-left
                    transition-colors
                    hover:text-white
                  "
                >
                  Social Media
                </button>
              </li>

              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection("services")}
                  className="
                    text-left
                    transition-colors
                    hover:text-white
                  "
                >
                  Content Writing
                </button>
              </li>

              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection("services")}
                  className="
                    text-left
                    transition-colors
                    hover:text-white
                  "
                >
                  SEO Management
                </button>
              </li>
            </ul>
          </div>

          {/* =====================================
              CONTACT
          ====================================== */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold text-white">Get In Touch</h3>

            <ul className="mt-5 space-y-4 text-sm text-slate-400">
              {/* Email */}
              <li className="flex items-start gap-3">
                <span
                  className="
                    mt-0.5
                    flex
                    h-8
                    w-8
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    bg-[#2587FF]/10
                    text-[#6EA8FF]
                  "
                >
                  <Mail className="h-4 w-4" />
                </span>

                <div>
                  <span className="block text-xs text-slate-500">Email</span>

                  <a
                    href="mailto:hello@nexora.id"
                    className="
                      mt-0.5
                      block
                      transition-colors
                      hover:text-white
                    "
                  >
                    hello@nexora.id
                  </a>
                </div>
              </li>

              {/* Phone */}
              <li className="flex items-start gap-3">
                <span
                  className="
                    mt-0.5
                    flex
                    h-8
                    w-8
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    bg-[#8B3DFF]/10
                    text-[#A855F7]
                  "
                >
                  <Phone className="h-4 w-4" />
                </span>

                <div>
                  <span className="block text-xs text-slate-500">Phone</span>

                  <a
                    href="tel:+6280000000000"
                    className="
                      mt-0.5
                      block
                      transition-colors
                      hover:text-white
                    "
                  >
                    +62 800 0000 0000
                  </a>
                </div>
              </li>

              {/* Location */}
              <li className="flex items-start gap-3">
                <span
                  className="
                    mt-0.5
                    flex
                    h-8
                    w-8
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    bg-[#2587FF]/10
                    text-[#6EA8FF]
                  "
                >
                  <MapPin className="h-4 w-4" />
                </span>

                <div>
                  <span className="block text-xs text-slate-500">Location</span>

                  <span className="mt-0.5 block">Indonesia</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* =========================================
            BOTTOM BAR
        ========================================== */}
        <div
          className="
            flex
            flex-col
            gap-5
            border-t
            border-white/10
            py-6
            text-xs
            text-slate-500
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p>
            © {new Date().getFullYear()} NEXORA Digital Agency. All rights
            reserved.
          </p>

          <div className="flex items-center gap-5">
            <button
              type="button"
              className="
                transition-colors
                hover:text-white
              "
            >
              Privacy Policy
            </button>

            <button
              type="button"
              className="
                transition-colors
                hover:text-white
              "
            >
              Terms
            </button>

            {/* Back To Top */}
            <button
              type="button"
              onClick={scrollToTop}
              className="
                group
                flex
                items-center
                gap-2
                text-slate-400
                transition-colors
                hover:text-white
              "
            >
              <span>Back to top</span>

              <span
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.04]
                  transition-all
                  duration-300
                  group-hover:border-[#2587FF]/40
                  group-hover:bg-[#2587FF]/10
                "
              >
                <ArrowUp
                  className="
                    h-3.5
                    w-3.5
                    transition-transform
                    duration-300
                    group-hover:-translate-y-0.5
                  "
                />
              </span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
