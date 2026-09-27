import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Linkedin,
  Twitter,
  ArrowUp,
  ArrowRight,
  X,
} from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

export const Footer: React.FC = () => {
  const [activeLegalPage, setActiveLegalPage] = useState<
    "privacy" | "terms" | null
  >(null);

  const location = useLocation();
  const navigate = useNavigate();

  /* =========================================================
     BACK TO TOP
  ========================================================== */

  const scrollToTop = () => {
    if (location.pathname !== "/") {
      navigate("/");

      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }, 150);

      return;
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  /* =========================================================
     SCROLL TO SECTION
  ========================================================== */

  const scrollToSection = (id: string) => {
    /*
      Jika sudah berada di homepage,
      langsung scroll ke section.
    */
    if (location.pathname === "/") {
      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }

      return;
    }

    /*
      Jika sedang berada di halaman artikel
      seperti /blog/b1, /blog/b2, /blog/b3,
      kembali ke homepage dengan hash tujuan.
    */
    navigate(`/#${id}`);

    /*
      Tunggu homepage selesai dirender,
      kemudian scroll ke section.
    */
    setTimeout(() => {
      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 150);
  };

  /* =========================================================
     LEGAL MODAL
  ========================================================== */

  const openPrivacyPolicy = () => {
    setActiveLegalPage("privacy");
  };

  const openTerms = () => {
    setActiveLegalPage("terms");
  };

  const closeLegalModal = () => {
    setActiveLegalPage(null);
  };

  return (
    <>
      {/* =====================================================
          FOOTER
      ====================================================== */}

      <footer
        id="contact"
        className="
          relative
          overflow-hidden
          bg-[#0B1020]
          text-white
        "
      >
        {/* =====================================================
            BACKGROUND GLOW
        ====================================================== */}

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

          {/* =====================================================
              TOP CTA
          ====================================================== */}

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
                  Punya ide, project, atau bisnis yang ingin dikembangkan
                  secara digital? Mari wujudkan bersama NEXORA.
                </p>

              </div>

              <button
                type="button"
                onClick={() => scrollToSection("contact")}
                className="
                  group
                  relative
                  inline-flex
                  w-fit
                  items-center
                  gap-3
                  overflow-hidden
                  rounded-full
                  bg-gradient-to-r
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
                <span className="relative z-10">
                  Start a Project
                </span>

                <span
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-r
                    from-[#8B3DFF]
                    to-[#2587FF]
                    opacity-0
                    transition-opacity
                    duration-300
                    group-hover:opacity-100
                  "
                />

                <ArrowRight
                  className="
                    relative
                    z-10
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

          {/* =====================================================
              MAIN FOOTER
          ====================================================== */}

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

            {/* =================================================
                BRAND
            ================================================== */}

            <div className="sm:col-span-2 lg:col-span-5">

              {/* Logo */}
              <button
                type="button"
                onClick={scrollToTop}
                className="
                  group
                  inline-flex
                  items-center
                "
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
                NEXORA Digital Agency membantu bisnis membangun digital
                presence melalui strategi, desain, teknologi, dan solusi
                digital yang berorientasi pada pertumbuhan.
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

            {/* =================================================
                COMPANY
            ================================================== */}

            <div className="lg:col-span-2">

              <h3 className="text-sm font-bold text-white">
                Company
              </h3>

              <ul className="mt-5 space-y-3 text-sm text-slate-400">

                <li>
                  <button
                    type="button"
                    onClick={() => scrollToSection("about")}
                    className="transition-colors hover:text-white"
                  >
                    About Us
                  </button>
                </li>

                <li>
                  <button
                    type="button"
                    onClick={() => scrollToSection("why-us")}
                    className="transition-colors hover:text-white"
                  >
                    Why NEXORA
                  </button>
                </li>

                <li>
                  <button
                    type="button"
                    onClick={() => scrollToSection("projects")}
                    className="transition-colors hover:text-white"
                  >
                    Projects
                  </button>
                </li>

                <li>
                  <button
                    type="button"
                    onClick={() => scrollToSection("blog")}
                    className="transition-colors hover:text-white"
                  >
                    Blog
                  </button>
                </li>

              </ul>

            </div>

            {/* =================================================
                SERVICES
            ================================================== */}

            <div className="lg:col-span-2">

              <h3 className="text-sm font-bold text-white">
                Services
              </h3>

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
                    Digital Marketing
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

            {/* =================================================
                CONTACT
            ================================================== */}

            <div className="lg:col-span-3">

              <h3 className="text-sm font-bold text-white">
                Get In Touch
              </h3>

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
                    <span className="block text-xs text-slate-500">
                      Email
                    </span>

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
                    <span className="block text-xs text-slate-500">
                      Phone
                    </span>

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
                    <span className="block text-xs text-slate-500">
                      Location
                    </span>

                    <span className="mt-0.5 block">
                      Indonesia
                    </span>
                  </div>

                </li>

              </ul>

            </div>

          </div>

          {/* =================================================
              BOTTOM BAR
          ================================================== */}

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

              {/* Privacy Policy */}
              <button
                type="button"
                onClick={openPrivacyPolicy}
                className="
                  transition-colors
                  hover:text-white
                "
              >
                Privacy Policy
              </button>

              {/* Terms */}
              <button
                type="button"
                onClick={openTerms}
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

      {/* =======================================================
          LEGAL MODAL
      ======================================================== */}

      {activeLegalPage && (
        <div
          className="
            fixed
            inset-0
            z-[100]
            flex
            items-center
            justify-center
            overflow-hidden
            bg-black/70
            p-4
            backdrop-blur-sm
            sm:p-6
          "
          onClick={closeLegalModal}
        >

          <div
            className="
              relative
              flex
              max-h-[80vh]
              w-full
              max-w-2xl
              flex-col
              overflow-hidden
              rounded-[28px]
              border
              border-white/10
              bg-white
              shadow-[0_30px_80px_rgba(0,0,0,0.30)]
            "
            onClick={(event) => event.stopPropagation()}
          >

            {/* Modal Header */}
            <div
              className="
                flex
                shrink-0
                items-center
                justify-between
                border-b
                border-slate-100
                bg-[#F8FAFF]
                px-6
                py-5
                sm:px-7
              "
            >

              <div>

                <span
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.18em]
                    text-[#4168FF]
                  "
                >
                  NEXORA Digital Agency
                </span>

                <h2
                  className="
                    mt-1
                    text-xl
                    font-black
                    tracking-tight
                    text-slate-900
                    sm:text-2xl
                  "
                >
                  {activeLegalPage === "privacy"
                    ? "Privacy Policy"
                    : "Terms & Conditions"}
                </h2>

              </div>

              <button
                type="button"
                onClick={closeLegalModal}
                aria-label="Close"
                className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-slate-200
                  bg-white
                  text-slate-500
                  transition-all
                  duration-300
                  hover:border-[#C9D8FF]
                  hover:bg-[#F5F8FF]
                  hover:text-[#4168FF]
                "
              >
                <X className="h-5 w-5" />
              </button>

            </div>

            {/* Modal Content */}
            <div
              className="
                min-h-0
                flex-1
                overflow-y-auto
                px-6
                py-6
                text-sm
                leading-7
                text-slate-600
                sm:px-7
              "
            >

              {activeLegalPage === "privacy" ? (
                <>
                  <h3 className="text-base font-bold text-slate-900">
                    Privacy Policy
                  </h3>

                  <p className="mt-3">
                    NEXORA Digital Agency menghargai privasi setiap pengunjung
                    dan berkomitmen untuk menjaga informasi yang diberikan
                    melalui website ini.
                  </p>

                  <h3 className="mt-6 text-base font-bold text-slate-900">
                    Informasi yang Kami Kumpulkan
                  </h3>

                  <p className="mt-3">
                    Informasi dapat dikumpulkan ketika Anda menghubungi NEXORA,
                    mengirimkan pertanyaan, atau menggunakan layanan yang
                    tersedia melalui website.
                  </p>

                  <h3 className="mt-6 text-base font-bold text-slate-900">
                    Penggunaan Informasi
                  </h3>

                  <p className="mt-3">
                    Informasi yang diberikan digunakan untuk memberikan
                    tanggapan, memahami kebutuhan project, meningkatkan
                    pelayanan, dan berkomunikasi mengenai layanan NEXORA.
                  </p>

                  <h3 className="mt-6 text-base font-bold text-slate-900">
                    Perlindungan Data
                  </h3>

                  <p className="mt-3">
                    Kami berupaya menjaga informasi yang diberikan dari akses,
                    penggunaan, atau pengungkapan yang tidak sesuai.
                  </p>

                  <p className="mt-6 text-xs text-slate-400">
                    Privacy Policy ini merupakan konten awal dan dapat
                    disesuaikan kembali dengan kebijakan serta kebutuhan bisnis
                    NEXORA.
                  </p>
                </>
              ) : (
                <>
                  <h3 className="text-base font-bold text-slate-900">
                    Terms & Conditions
                  </h3>

                  <p className="mt-3">
                    Dengan menggunakan website NEXORA Digital Agency, Anda
                    memahami dan menyetujui ketentuan penggunaan yang berlaku
                    pada website ini.
                  </p>

                  <h3 className="mt-6 text-base font-bold text-slate-900">
                    Penggunaan Website
                  </h3>

                  <p className="mt-3">
                    Konten yang tersedia pada website digunakan untuk
                    memberikan informasi mengenai layanan, project, dan
                    kemampuan NEXORA Digital Agency.
                  </p>

                  <h3 className="mt-6 text-base font-bold text-slate-900">
                    Layanan dan Project
                  </h3>

                  <p className="mt-3">
                    Detail layanan, ruang lingkup project, harga, jadwal, dan
                    ketentuan pengerjaan akan disepakati bersama sebelum project
                    dimulai.
                  </p>

                  <h3 className="mt-6 text-base font-bold text-slate-900">
                    Konten Website
                  </h3>

                  <p className="mt-3">
                    Materi, desain, logo, dan konten yang ditampilkan pada
                    website NEXORA dapat merupakan milik NEXORA atau pihak yang
                    memiliki hak atas materi tersebut.
                  </p>

                  <p className="mt-6 text-xs text-slate-400">
                    Terms & Conditions ini merupakan konten awal dan dapat
                    disesuaikan kembali berdasarkan kebutuhan operasional dan
                    legal NEXORA.
                  </p>
                </>
              )}

            </div>

            {/* Modal Footer */}
            <div
              className="
                flex
                shrink-0
                justify-end
                border-t
                border-slate-100
                bg-white
                px-6
                py-4
                sm:px-7
              "
            >
              <button
                type="button"
                onClick={closeLegalModal}
                className="
                  rounded-full
                  bg-gradient-to-r
                  from-[#2587FF]
                  to-[#8B3DFF]
                  px-5
                  py-2.5
                  text-xs
                  font-bold
                  text-white
                  shadow-[0_8px_20px_rgba(65,104,255,0.20)]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:shadow-[0_12px_25px_rgba(65,104,255,0.30)]
                "
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
};