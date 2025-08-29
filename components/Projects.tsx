'use client'
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { projects } from "./mocks/projects";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const projectImages = projects.map((p) => ({ src: p.image }));

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  return (
    <section id="projects" className="py-10 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('projects.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('projects.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} openLightbox={openLightbox} index={index} />
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            onClick={() => window.open("https://iscode.vercel.app", "_blank")}
            className="px-8 py-3 text-lg font-medium border-2 border-gray-300 dark:border-gray-600 hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-all duration-300"
          >
            {t('projects.more')}
            <ExternalLink className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={projectImages}
        index={currentIndex}
      />
    </section>
  );
};
