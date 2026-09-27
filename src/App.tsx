import React, { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { HelmetProvider } from "react-helmet-async";

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { VideoSection } from "./components/VideoSection";
import { Partners } from "./components/Partners";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { Pricing } from "./components/Pricing";
import { Projects } from "./components/Projects";
import { Testimonials } from "./components/Testimonials";
import { Blog } from "./components/Blog";
import { BlogArticle } from "./components/BlogArticle";
import { Footer } from "./components/Footer";

import { VideoModal } from "./components/VideoModal";
import { ContactModal } from "./components/ContactModal";
import { ProjectModal } from "./components/ProjectModal";

import { ProjectItem } from "./types";

/* =========================================================
   HOME PAGE
========================================================= */

interface HomePageProps {
  onOpenContactWithTopic: (topic: string) => void;
  onCloseContact: () => void;
  isContactModalOpen: boolean;
}

function HomePage({
  onOpenContactWithTopic,
  onCloseContact,
  isContactModalOpen,
}: HomePageProps) {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const [selectedService, setSelectedService] = useState<string | null>(
    null,
  );

  const [selectedProject, setSelectedProject] =
    useState<ProjectItem | null>(null);

  useEffect(() => {
    if (!isContactModalOpen) {
    setSelectedService(null);
    }
  }, [isContactModalOpen]);

  /* =======================================================
     CONTACT
  ======================================================== */

  const handleGetStarted = () => {
    onOpenContactWithTopic("New Project Kickoff");
  };

  /* =======================================================
     SERVICES
  ======================================================== */

  const handleSelectService = (service: string) => {
    setSelectedService(service);

    onOpenContactWithTopic(`Service: ${service}`);
  };

  /* =======================================================
     ABOUT / STORY
  ======================================================== */

  const handleOurStory = () => {
    const el = document.getElementById("why-us");

    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const handleSeeDetail = () => {
    const el = document.getElementById("why-us");

    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* =====================================================
          NAVBAR
      ====================================================== */}

      <Navbar
        onOpenContact={() =>
          onOpenContactWithTopic("General Inquiry")
        }
      />

      <main>

        {/* =================================================
            HERO
        ================================================== */}

        <Hero
          onWatchVideo={() => setIsVideoModalOpen(true)}
          onGetStarted={handleGetStarted}
        />

        {/* =================================================
            ABOUT
        ================================================== */}

        <VideoSection
          onPlayVideo={() => setIsVideoModalOpen(true)}
          onOurStory={handleOurStory}
        />

        {/* =================================================
            SERVICES
        ================================================== */}

        <Services
          selectedService={selectedService}
          onSelectService={handleSelectService}
          onSeeDetail={handleSeeDetail}
        />

        {/* =================================================
            PARTNERS
        ================================================== */}

        <Partners />

        {/* =================================================
            WHY CHOOSE US
        ================================================== */}

        <WhyChooseUs />

        {/* =================================================
            PRICING
        ================================================== */}

        <Pricing
          onSelectPlan={(plan) =>
            onOpenContactWithTopic(
              `Selected Plan: ${plan}`,
            )
          }
        />

        {/* =================================================
            PROJECTS
        ================================================== */}

        <Projects
          onSelectProject={(project) =>
            setSelectedProject(project)
          }
        />

        {/* =================================================
            TESTIMONIALS
        ================================================== */}

        <Testimonials />

        {/* =================================================
            BLOG
        ================================================== */}

        <Blog />

      </main>

      {/* ===================================================
          FOOTER
      ==================================================== */}

      <Footer />

      {/* ===================================================
          VIDEO MODAL
      ==================================================== */}

      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      />

      {/* ===================================================
          PROJECT MODAL
      ==================================================== */}

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onConsult={() => {
          if (selectedProject) {
            onOpenContactWithTopic(
              `Case Study Inquiry: ${selectedProject.title}`,
            );
          }
        }}
      />

    </>
  );
}

/* =========================================================
   APP
========================================================= */

export function App() {
  /* =======================================================
     GLOBAL CONTACT STATE
  ======================================================== */

  const [isContactModalOpen, setIsContactModalOpen] =
    useState(false);

  const [selectedTopic, setSelectedTopic] = useState(
    "General Consultation",
  );

  /* =======================================================
     OPEN CONTACT
  ======================================================== */

  const handleOpenContactWithTopic = (topic: string) => {
    setSelectedTopic(topic);
    setIsContactModalOpen(true);
  };

  /* =======================================================
     CLOSE CONTACT
  ======================================================== */

  const handleCloseContact = () => {
    setIsContactModalOpen(false);
  };

  return (
   <HelmetProvider>
    <BrowserRouter>
      <div className="min-h-screen bg-white font-sans text-neutral-900 selection:bg-[#2587FF] selection:text-white">

        <Routes>

          {/* ===============================================
              HOME
          ================================================ */}

          <Route
            path="/"
            element={
              <HomePage
                onOpenContactWithTopic={
                  handleOpenContactWithTopic
                }
                onCloseContact={
                  handleCloseContact
                }
                isContactModalOpen={isContactModalOpen}
              />
            }
          />

          {/* ===============================================
              BLOG ARTICLE
          ================================================ */}

          <Route
            path="/blog/:id"
            element={
              <BlogArticle
                onOpenContact={() =>
                  handleOpenContactWithTopic(
                    "General Inquiry",
                  )
                }
              />
            }
          />

        </Routes>

        {/* =================================================
            GLOBAL CONTACT MODAL

            Modal berada di luar Routes sehingga dapat
            dibuka dari homepage maupun halaman artikel.
        ================================================== */}

        <ContactModal
          isOpen={isContactModalOpen}
          onClose={handleCloseContact}
          initialTopic={selectedTopic}
        />

      </div>
    </BrowserRouter>
   </HelmetProvider>
  );
}

export default App;