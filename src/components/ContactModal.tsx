import React, { useState } from 'react';
import { X, Send, CheckCircle2 } from 'lucide-react';

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

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: initialTopic,
    message: '',
  });

  if (!isOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setSubmitted(true);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);

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
        sm:p-6
      "
      onClick={handleResetAndClose}
    >
      <div
        id="contact-modal-container"
        className="
          relative
          w-full
          max-w-xl
          overflow-hidden
          rounded-[26px]
          border
          border-white/60
          bg-white
          shadow-[0_30px_80px_rgba(0,0,0,0.25)]
        "
        onClick={(e) => e.stopPropagation()}
      >
        {/* Gradient Accent */}
        <div
          className="
            absolute
            left-0
            right-0
            top-0
            h-1
            bg-gradient-to-r
            from-[#2587FF]
            via-[#5B6CFF]
            to-[#8B3DFF]
          "
        />

        {/* Close Button */}
        <button
          type="button"
          onClick={handleResetAndClose}
          className="
            absolute
            right-5
            top-5
            z-10
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            border
            border-slate-200
            bg-white
            text-slate-500
            transition
            hover:border-[#C8D8FF]
            hover:bg-[#F5F8FF]
            hover:text-[#4168FF]
          "
          aria-label="Close"
        >
          <X size={19} />
        </button>

        {/* Content */}
        <div className="p-5 sm:p-6">
          {submitted ? (
            /* =========================
               SUCCESS STATE
            ========================== */
            <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
              <div
                className="
                  mb-5
                  flex
                  h-20
                  w-20
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
                <CheckCircle2 size={42} strokeWidth={2} />
              </div>

              <span
                className="
                  mb-3
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-[#4168FF]
                "
              >
                NEXORA DIGITAL AGENCY
              </span>

              <h2 className="text-3xl font-bold tracking-tight text-neutral-900">
                Message Sent!
              </h2>

              <p className="mt-3 max-w-md text-sm leading-6 text-slate-500">
                Thank you for contacting NEXORA. We have received your
                message and will get back to you as soon as possible.
              </p>

              <button
                type="button"
                onClick={handleResetAndClose}
                className="
                  mt-6
                  rounded-full
                  bg-gradient-to-r
                  from-[#2587FF]
                  to-[#8B3DFF]
                  px-7
                  py-3
                  text-sm
                  font-bold
                  text-white
                  shadow-[0_10px_25px_rgba(65,104,255,0.22)]
                  transition
                  hover:-translate-y-0.5
                  hover:shadow-[0_15px_30px_rgba(65,104,255,0.28)]
                "
              >
                Back to Website
              </button>
            </div>
          ) : (
            /* =========================
               CONTACT FORM
            ========================== */
            <>
              {/* Header */}
              <div className="pr-12">
                <div className="flex items-center gap-2">
                  <span className="h-[2px] w-10 bg-gradient-to-r from-[#2587FF] to-[#8B3DFF]" />

                  <span
                    className="
                      text-xs
                      font-bold
                      uppercase
                      tracking-[0.2em]
                      text-[#4168FF]
                    "
                  >
                    Get In Touch
                  </span>
                </div>

                <h2
                  className="
                    mt-3
                    text-3xl
                    font-bold
                    leading-tight
                    tracking-tight
                    text-neutral-900
                    sm:text-[34px]
                  "
                >
                  Let's Build Something{' '}
                  <span
                    className="
                      bg-gradient-to-r
                      from-[#2587FF]
                      via-[#5B6CFF]
                      to-[#8B3DFF]
                      bg-clip-text
                      text-transparent
                    "
                  >
                    Great.
                  </span>
                </h2>

                <p
                  className="
                    mt-3
                    text-base
                    leading-6
                    text-slate-500
                  "
                >
                  Ceritakan tentang project, kebutuhan, atau ide digital yang
                  ingin Anda kembangkan bersama NEXORA.
                </p>
              </div>

              {/* Form */}
              <form
                onSubmit={handleSubmit}
                className="mt-6 space-y-4"
              >
                {/* Name + Email */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="
                        mb-2
                        block
                        text-sm
                        font-semibold
                        text-slate-700
                      "
                    >
                      Your Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="
                        w-full
                        rounded-xl
                        border
                        border-slate-200
                        bg-slate-50
                        px-4
                        py-3
                        text-sm
                        text-slate-800
                        outline-none
                        transition
                        placeholder:text-slate-400
                        focus:border-[#5B6CFF]
                        focus:bg-white
                        focus:ring-4
                        focus:ring-[#5B6CFF]/10
                      "
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="
                        mb-2
                        block
                        text-sm
                        font-semibold
                        text-slate-700
                      "
                    >
                      Email Address
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className="
                        w-full
                        rounded-xl
                        border
                        border-slate-200
                        bg-slate-50
                        px-4
                        py-3
                        text-sm
                        text-slate-800
                        outline-none
                        transition
                        placeholder:text-slate-400
                        focus:border-[#5B6CFF]
                        focus:bg-white
                        focus:ring-4
                        focus:ring-[#5B6CFF]/10
                      "
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="
                      mb-2
                      block
                      text-sm
                      font-semibold
                      text-slate-700
                    "
                  >
                    Interested In
                  </label>

                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    className="
                      w-full
                      rounded-xl
                      border
                      border-slate-200
                      bg-slate-50
                      px-4
                      py-3
                      text-sm
                      text-slate-800
                      outline-none
                      transition
                      focus:border-[#5B6CFF]
                      focus:bg-white
                      focus:ring-4
                      focus:ring-[#5B6CFF]/10
                    "
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="
                      mb-2
                      block
                      text-sm
                      font-semibold
                      text-slate-700
                    "
                  >
                    Project Details
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us what you'd like to build..."
                    className="
                      w-full
                      resize-none
                      rounded-xl
                      border
                      border-slate-200
                      bg-slate-50
                      px-4
                      py-3
                      text-sm
                      leading-6
                      text-slate-800
                      outline-none
                      transition
                      placeholder:text-slate-400
                      focus:border-[#5B6CFF]
                      focus:bg-white
                      focus:ring-4
                      focus:ring-[#5B6CFF]/10
                    "
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-full
                    bg-gradient-to-r
                    from-[#2587FF]
                    to-[#8B3DFF]
                    px-6
                    py-3
                    text-sm
                    font-bold
                    text-white
                    shadow-[0_10px_25px_rgba(65,104,255,0.22)]
                    transition
                    hover:-translate-y-0.5
                    hover:shadow-[0_15px_30px_rgba(65,104,255,0.3)]
                    active:translate-y-0
                  "
                >
                  Send Message
                  <Send size={17} />
                </button>

                {/* Privacy */}
                <p
                  className="
                    text-center
                    text-[11px]
                    leading-5
                    text-slate-400
                  "
                >
                  We respect your privacy. Your information will only be used
                  to respond to your inquiry.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};