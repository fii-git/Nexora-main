import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { VideoSection } from './components/VideoSection';
import { Partners } from './components/Partners';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Pricing } from './components/Pricing';
import { Projects } from './components/Projects';
import { Testimonials } from './components/Testimonials';
import { Blog } from './components/Blog';
import { Footer } from './components/Footer';
import { VideoModal } from './components/VideoModal';
import { ArticleModal } from './components/ArticleModal';
import { ContactModal } from './components/ContactModal';
import { ProjectModal } from './components/ProjectModal';
import { BlogPost, ProjectItem } from './types';

export function App() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  // Service yang sedang dipilih
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const [selectedTopic, setSelectedTopic] = useState(
    'General Consultation'
  );

  const [selectedArticle, setSelectedArticle] =
    useState<BlogPost | null>(null);

  const [selectedProject, setSelectedProject] =
    useState<ProjectItem | null>(null);

  // =========================================================
  // CONTACT MODAL
  // =========================================================

  const handleOpenContactWithTopic = (topic: string) => {
    setSelectedTopic(topic);
    setIsContactModalOpen(true);
  };

  // =========================================================
  // GET STARTED
  // =========================================================

  const handleGetStarted = () => {
    handleOpenContactWithTopic('New Project Kickoff');
  };

  // =========================================================
  // SERVICE
  // =========================================================

  const handleSelectService = (service: string) => {
    // Simpan service yang dipilih
    setSelectedService(service);

    // Buka contact modal
    handleOpenContactWithTopic(`Service: ${service}`);
  };

  // =========================================================
  // CLOSE CONTACT MODAL
  // =========================================================

  const handleCloseContact = () => {
    // Tutup modal
    setIsContactModalOpen(false);

    // Reset service yang dipilih
    // sehingga card kembali putih
    setSelectedService(null);
  };

  // =========================================================
  // OUR STORY
  // =========================================================

  const handleOurStory = () => {
    const el = document.getElementById('why-us');

    if (el) {
      el.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  // =========================================================
  // SEE DETAIL
  // =========================================================

  const handleSeeDetail = () => {
    const el = document.getElementById('why-us');

    if (el) {
      el.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  return (
    <div
      className="
        min-h-screen
        bg-white
        font-sans
        text-neutral-900
        selection:bg-[#2587FF]
        selection:text-white
      "
    >

      {/* =====================================================
          NAVBAR
      ====================================================== */}

      <Navbar
        onOpenContact={() =>
          handleOpenContactWithTopic('General Inquiry')
        }
      />

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <main>

        {/* 1. HERO */}
        <Hero
          onWatchVideo={() => setIsVideoModalOpen(true)}
          onGetStarted={handleGetStarted}
        />

        {/* 2. SERVICES */}
        <Services
          selectedService={selectedService}
          onSelectService={handleSelectService}
          onSeeDetail={handleSeeDetail}
        />

        {/* 3. ABOUT / VIDEO */}
        <VideoSection
          onPlayVideo={() => setIsVideoModalOpen(true)}
          onOurStory={handleOurStory}
        />

        {/* 4. PARTNERS */}
        <Partners />

        {/* 5. WHY CHOOSE US */}
        <WhyChooseUs />

        {/* 6. PRICING */}
        <Pricing
          onSelectPlan={(plan) =>
            handleOpenContactWithTopic(
              `Selected Plan: ${plan}`
            )
          }
        />

        {/* 7. PROJECTS */}
        <Projects
          onSelectProject={(project) =>
            setSelectedProject(project)
          }
        />

        {/* 8. TESTIMONIALS */}
        <Testimonials />

        {/* 9. BLOG */}
        <Blog
          onSelectArticle={(post) =>
            setSelectedArticle(post)
          }
        />

      </main>

      {/* =====================================================
          FOOTER
      ====================================================== */}

      <Footer />

      {/* =====================================================
          VIDEO MODAL
      ====================================================== */}

      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() =>
          setIsVideoModalOpen(false)
        }
      />

      {/* =====================================================
          ARTICLE MODAL
      ====================================================== */}

      <ArticleModal
        post={selectedArticle}
        onClose={() =>
          setSelectedArticle(null)
        }
      />

      {/* =====================================================
          PROJECT MODAL
      ====================================================== */}

      <ProjectModal
        project={selectedProject}
        onClose={() =>
          setSelectedProject(null)
        }
        onConsult={() => {
          if (selectedProject) {
            handleOpenContactWithTopic(
              `Case Study Inquiry: ${selectedProject.title}`
            );
          }
        }}
      />

      {/* =====================================================
          CONTACT MODAL
      ====================================================== */}

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={handleCloseContact}
        initialTopic={selectedTopic}
      />

    </div>
  );
}

export default App;