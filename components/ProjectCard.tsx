'use client'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";

const MAX_DESCRIPTION_LENGTH = 150;

export const ProjectCard = ({ project, openLightbox, index }) => {
  const { t } = useLanguage();
  const [isExpanded, setIsExpanded] = useState(false);

  const description = t(project.description);
  const isLongDescription = description.length > MAX_DESCRIPTION_LENGTH;

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 border-0 shadow-md dark:bg-gray-800 flex flex-col">
      <div 
        className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 relative overflow-hidden cursor-pointer"
        onClick={() => openLightbox(index)}
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl dark:text-white">{project.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col flex-grow">
        <div className="flex-grow">
          <div className={`relative ${isExpanded ? '' : 'max-h-24 overflow-y-auto'} scrollbar-hide`}>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                  {description}
              </p>
              {!isExpanded && isLongDescription && (
                  <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-gray-800 to-transparent"></div>
              )}
          </div>
          {isLongDescription && (
            <Button onClick={() => setIsExpanded(!isExpanded)} variant="link" className="text-blue-500 p-0 h-auto mb-4">
                {isExpanded ? t('projects.readLess') : t('projects.readMore')}
            </Button>
          )}

          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech, techIndex) => (
              <Badge
                key={techIndex}
                variant="outline"
                className="text-xs dark:border-gray-600 dark:text-gray-300"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex gap-3 mt-auto">
          {/** Botão DEMO */}
          <Button
            variant="outline"
            size="sm"
            disabled={!project.available || !project.demoLink}
            className={`
                flex-1 
                ${project.available && project.demoLink
                ? "dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
                : "bg-red-500 cursor-not-allowed opacity-60 dark:border-gray-600"}`}
            onClick={() => {
              if (project.available && project.demoLink) {
                window.open(project.demoLink, "_blank");
              }
            }}
          >
            <ExternalLink className="h-4 w-4 mr-2" />
            {t('projects.demo')}
          </Button>

          {/** Botão CÓDIGO */}
          <Button
            variant="outline"
            size="sm"
            disabled={!project.available || !project.githubLink}
            className={`
                flex-1 
                ${project.available && project.githubLink
                ? "dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
                : "bg-red-500 cursor-not-allowed opacity-60 dark:border-gray-600"}`}
            onClick={() => {
              if (project.available && project.githubLink) {
                window.open(project.githubLink, "_blank");
              }
            }}
          >
            <Github className="h-4 w-4 mr-2" />
            {t('projects.code')}
          </Button>

        </div>
      </CardContent>
    </Card>
  );
};