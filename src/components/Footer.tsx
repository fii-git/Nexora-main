import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-[#f95700] text-white pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/20">
          {/* Column 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#f95700] shadow-sm">
                <div className="w-3.5 h-3.5 rounded-tr-xl rounded-bl-xl bg-[#f95700] rotate-45" />
              </div>
              <span className="font-extrabold text-2xl tracking-tight text-white">
                Lumos
              </span>
            </div>

            <p className="text-xs sm:text-sm text-orange-100/90 leading-relaxed max-w-sm">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
              sint. Velit officia consequat duis enim velit mollit.
            </p>

            {/* Social media icons */}
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white hover:text-[#f95700] flex items-center justify-center text-white transition-all"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white hover:text-[#f95700] flex items-center justify-center text-white transition-all"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white hover:text-[#f95700] flex items-center justify-center text-white transition-all"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white hover:text-[#f95700] flex items-center justify-center text-white transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white hover:text-[#f95700] flex items-center justify-center text-white transition-all"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Contact Info (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-base font-bold text-white mb-4">Contact</h4>
            <ul className="space-y-3.5 text-xs sm:text-sm text-orange-100">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-white flex-shrink-0" />
                <a
                  href="mailto:lms@domain.com"
                  className="hover:text-white transition-colors"
                >
                  lms@domain.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-white flex-shrink-0" />
                <a
                  href="tel:+02115803658"
                  className="hover:text-white transition-colors"
                >
                  (+021) 1580 3658
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-white flex-shrink-0" />
                <span>Keramat jati 468</span>
              </li>
            </ul>
          </div>

          {/* Column 3: Company (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-base font-bold text-white mb-4">Company</h4>
            <ul className="space-y-3 text-xs sm:text-sm text-orange-100">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  Terms Conditions
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  Cookies
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Other Pages (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-base font-bold text-white mb-4">Other Pages</h4>
            <ul className="space-y-3 text-xs sm:text-sm text-orange-100">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">
                  Portfolios
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-white transition-colors">
                  Works
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  Career
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-orange-100">
          <p>© {new Date().getFullYear()} Lumos Agency. All rights reserved.</p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
              <ArrowUp className="w-3.5 h-3.5 text-white" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};
