import React, { useEffect, useState } from 'react';
import {
  X,
  Send,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTopic?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  initialTopic = 'General Inquiry',
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: initialTopic,
    message: '',
  });

  // =========================================================
  // UPDATE TOPIC
  // =========================================================

  useEffect(() => {
    if (isOpen) {
      setFormData((prev) => ({
        ...prev,
        subject: initialTopic,
      }));
    }
  }, [initialTopic, isOpen]);

  // =========================================================
  // MODAL CLOSED
  // =========================================================

  if (!isOpen) {
    return null;
  }

  // =========================================================
  // HANDLE FORM SUBMIT
  // =========================================================

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (isSending) {
      return;
    }

    setIsSending(true);

    /*
     * Simulasi proses pengiriman.
     * Nanti dapat diganti dengan API / Email / WhatsApp.
     */

    setTimeout(() => {
      setIsSending(false);
      setSubmitted(true);
    }, 900);
  };

  // =========================================================
  // HANDLE INPUT
  // =========================================================

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // =========================================================
  // RESET & CLOSE
  // =========================================================

  const handleResetAndClose = () => {
    setSubmitted(false);
    setIsSending(false);

    setFormData({
      name: '',
      email: '',
      subject: initialTopic,
      message: '',
    });

    onClose();
  };

  return (
    <div
      id="contact-modal-backdrop"
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
        sm:p-5
      "
      onClick={handleResetAndClose}
    >
      {/* =====================================================
          MODAL CONTAINER
      ====================================================== */}

      <div
        id="contact-modal-container"
        className="
          relative
          flex
          w-full
          max-w-lg
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
        {/* ===================================================
            TOP GRADIENT LINE
        ==================================================== */}

        <div
          className="
            absolute
            left-0
            right-0
            top-0
            z-30
            h-1
            bg-gradient-to-r
            from-[#2587FF]
            via-[#4168FF]
            to-[#8B3DFF]
          "
        />

        {/* ===================================================
            CLOSE BUTTON
        ==================================================== */}

        <button
          type="button"
          onClick={handleResetAndClose}
          aria-label="Close contact modal"
          className="
            absolute
            right-4
            top-4
            z-40
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-full
            border
            border-slate-200
            bg-white
            text-slate-500
            shadow-sm
            transition-all
            duration-300
            hover:border-[#C9D8FF]
            hover:bg-[#F5F8FF]
            hover:text-[#4168FF]
          "
        >
          <X className="h-4 w-4" />
        </button>

        {/* ===================================================
            SUCCESS STATE
        ==================================================== */}

        {submitted ? (
          <div
            className="
              flex
              min-h-[380px]
              flex-1
              flex-col
              items-center
              justify-center
              overflow-y-auto
              px-6
              py-10
              text-center
              sm:px-10
              contact-scroll
            "
          >
            {/* Success Icon */}

            <div
              className="
                relative
                flex
                h-20
                w-20
                shrink-0
                items-center
                justify-center
              "
            >
              {/* Glow */}

              <div
                className="
                  absolute
                  inset-0
                  animate-pulse
                  rounded-full
                  bg-gradient-to-br
                  from-[#2587FF]/20
                  to-[#8B3DFF]/20
                  blur-xl
                "
              />

              {/* Circle */}

              <div
                className="
                  relative
                  flex
                  h-20
                  w-20
                  animate-[successPop_0.6s_cubic-bezier(0.22,1,0.36,1)]
                  items-center
                  justify-center
                  rounded-full
                  bg-gradient-to-br
                  from-[#2587FF]
                  to-[#8B3DFF]
                  text-white
                  shadow-[0_15px_35px_rgba(65,104,255,0.25)]
                "
              >
                <CheckCircle2
                  className="
                    h-10
                    w-10
                    animate-[successCheck_0.5s_ease-out_0.2s_both]
                  "
                  strokeWidth={2.5}
                />
              </div>
            </div>

            {/* Success Badge */}

            <div
              className="
                mt-7
                inline-flex
                animate-[successFade_0.5s_ease-out_0.2s_both]
                items-center
                gap-2
                rounded-full
                border
                border-[#D9E6FF]
                bg-[#F5F8FF]
                px-3
                py-1
                text-[10px]
                font-bold
                uppercase
                tracking-[0.16em]
                text-[#4168FF]
              "
            >
              <Sparkles className="h-3 w-3" />
              NEXORA
            </div>

            {/* Success Heading */}

            <h2
              className="
                mt-4
                animate-[successFade_0.5s_ease-out_0.3s_both]
                text-2xl
                font-black
                tracking-tight
                text-slate-900
                sm:text-3xl
              "
            >
              Message Sent!
            </h2>

            {/* Success Description */}

            <p
              className="
                mt-3
                max-w-sm
                animate-[successFade_0.5s_ease-out_0.4s_both]
                text-sm
                leading-6
                text-slate-500
              "
            >
              Terima kasih telah menghubungi NEXORA.
              Kami akan segera merespons pesan dan
              kebutuhan project Anda.
            </p>

            {/* Done Button */}

            <button
              type="button"
              onClick={handleResetAndClose}
              className="
                mt-7
                animate-[successFade_0.5s_ease-out_0.5s_both]
                rounded-full
                bg-gradient-to-r
                from-[#2587FF]
                to-[#8B3DFF]
                px-8
                py-2.5
                text-sm
                font-bold
                text-white
                shadow-[0_10px_25px_rgba(65,104,255,0.20)]
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:shadow-[0_14px_30px_rgba(65,104,255,0.28)]
              "
            >
              Done
            </button>
          </div>
        ) : (
          /* =================================================
             FORM AREA
          ================================================== */

          <div
            className="
              min-h-0
              flex-1
              overflow-y-auto
              px-6
              pb-6
              pt-7
              contact-scroll
              sm:px-7
              sm:pb-7
              sm:pt-8
            "
          >
            {/* ===============================================
                HEADER
            ================================================ */}

            <div className="pr-10">
              {/* Label */}

              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                "
              >
                <span
                  className="
                    h-[2px]
                    w-8
                    bg-gradient-to-r
                    from-[#2587FF]
                    to-[#8B3DFF]
                  "
                />

                <span
                  className="
                    text-[11px]
                    font-bold
                    uppercase
                    tracking-[0.2em]
                    text-[#4168FF]
                  "
                >
                  Get In Touch
                </span>
              </div>

              {/* Heading */}

              <h2
                className="
                  mt-3
                  text-[28px]
                  font-black
                  leading-tight
                  tracking-tight
                  text-[#111114]
                  sm:text-[32px]
                "
              >
                Let's Build Something{' '}
                <span
                  className="
                    bg-gradient-to-r
                    from-[#2587FF]
                    via-[#4168FF]
                    to-[#8B3DFF]
                    bg-clip-text
                    text-transparent
                  "
                >
                  Great.
                </span>
              </h2>

              {/* Description */}

              <p
                className="
                  mt-2
                  max-w-xl
                  text-xs
                  leading-6
                  text-slate-500
                  sm:text-sm
                "
              >
                Ceritakan tentang project, kebutuhan, atau ide
                digital yang ingin Anda kembangkan bersama NEXORA.
              </p>
            </div>

            {/* ===============================================
                FORM
            ================================================ */}

            <form
              onSubmit={handleSubmit}
              className="mt-5 space-y-3.5"
            >
              {/* Name + Email */}

              <div
                className="
                  grid
                  grid-cols-1
                  gap-3
                  sm:grid-cols-2
                "
              >
                {/* Name */}

                <div>
                  <label
                    htmlFor="contact-name"
                    className="
                      mb-1.5
                      block
                      text-xs
                      font-bold
                      text-slate-700
                    "
                  >
                    Your Name
                  </label>

                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="
                      h-11
                      w-full
                      rounded-xl
                      border
                      border-slate-200
                      bg-[#F8FAFC]
                      px-3.5
                      text-sm
                      text-slate-800
                      outline-none
                      transition-all
                      placeholder:text-slate-400
                      focus:border-[#8EB7FF]
                      focus:bg-white
                      focus:ring-4
                      focus:ring-[#2587FF]/10
                    "
                  />
                </div>

                {/* Email */}

                <div>
                  <label
                    htmlFor="contact-email"
                    className="
                      mb-1.5
                      block
                      text-xs
                      font-bold
                      text-slate-700
                    "
                  >
                    Email Address
                  </label>

                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    className="
                      h-11
                      w-full
                      rounded-xl
                      border
                      border-slate-200
                      bg-[#F8FAFC]
                      px-3.5
                      text-sm
                      text-slate-800
                      outline-none
                      transition-all
                      placeholder:text-slate-400
                      focus:border-[#8EB7FF]
                      focus:bg-white
                      focus:ring-4
                      focus:ring-[#2587FF]/10
                    "
                  />
                </div>
              </div>

              {/* Interested In */}

              <div>
                <label
                  htmlFor="contact-subject"
                  className="
                    mb-1.5
                    block
                    text-xs
                    font-bold
                    text-slate-700
                  "
                >
                  Interested In
                </label>

                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  className="
                    h-11
                    w-full
                    rounded-xl
                    border
                    border-slate-200
                    bg-[#F8FAFC]
                    px-3.5
                    text-sm
                    text-slate-800
                    outline-none
                    transition-all
                    focus:border-[#8EB7FF]
                    focus:bg-white
                    focus:ring-4
                    focus:ring-[#2587FF]/10
                  "
                />
              </div>

              {/* Project Details */}

              <div>
                <label
                  htmlFor="contact-message"
                  className="
                    mb-1.5
                    block
                    text-xs
                    font-bold
                    text-slate-700
                  "
                >
                  Project Details
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us what you'd like to build..."
                  rows={3}
                  className="
                    min-h-[92px]
                    w-full
                    resize-none
                    rounded-xl
                    border
                    border-slate-200
                    bg-[#F8FAFC]
                    px-3.5
                    py-3
                    text-sm
                    leading-6
                    text-slate-800
                    outline-none
                    transition-all
                    placeholder:text-slate-400
                    focus:border-[#8EB7FF]
                    focus:bg-white
                    focus:ring-4
                    focus:ring-[#2587FF]/10
                  "
                />
              </div>

              {/* ===============================================
                  SEND BUTTON
              ================================================ */}

              <button
                type="submit"
                disabled={isSending}
                className="
                  group
                  relative
                  flex
                  h-12
                  w-full
                  items-center
                  justify-center
                  gap-2
                  overflow-hidden
                  rounded-full
                  bg-gradient-to-r
                  from-[#2587FF]
                  to-[#8B3DFF]
                  text-sm
                  font-bold
                  text-white
                  shadow-[0_10px_25px_rgba(65,104,255,0.20)]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:shadow-[0_14px_30px_rgba(65,104,255,0.28)]
                  disabled:cursor-not-allowed
                  disabled:opacity-80
                "
              >
                {isSending ? (
                  <>
                    <span
                      className="
                        h-4
                        w-4
                        animate-spin
                        rounded-full
                        border-2
                        border-white/30
                        border-t-white
                      "
                    />

                    <span>
                      Sending...
                    </span>
                  </>
                ) : (
                  <>
                    <span>
                      Send Message
                    </span>

                    <Send
                      className="
                        h-4
                        w-4
                        transition-transform
                        duration-300
                        group-hover:translate-x-0.5
                        group-hover:-translate-y-0.5
                      "
                    />
                  </>
                )}
              </button>

              {/* Privacy */}

              <p
                className="
                  pt-0.5
                  text-center
                  text-[10px]
                  leading-5
                  text-slate-400
                  sm:text-[11px]
                "
              >
                We respect your privacy. Your information will only
                be used to respond to your inquiry.
              </p>
            </form>
          </div>
        )}
      </div>

      {/* =====================================================
          CUSTOM SCROLLBAR + SUCCESS ANIMATION
      ====================================================== */}

      <style>{`
        .contact-scroll {
          scrollbar-width: thin;
          scrollbar-color: #cbd5e1 transparent;
        }

        .contact-scroll::-webkit-scrollbar {
          width: 5px;
        }

        .contact-scroll::-webkit-scrollbar-track {
          background: transparent;
        }

        .contact-scroll::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 999px;
        }

        .contact-scroll::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }

        @keyframes successPop {
          0% {
            opacity: 0;
            transform: scale(0.5);
          }

          70% {
            opacity: 1;
            transform: scale(1.08);
          }

          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes successCheck {
          0% {
            opacity: 0;
            transform: scale(0.4) rotate(-15deg);
          }

          100% {
            opacity: 1;
            transform: scale(1) rotate(0);
          }
        }

        @keyframes successFade {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }

          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};