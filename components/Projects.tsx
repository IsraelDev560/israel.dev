'use client'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { projects } from "./mocks/projects";

export const Projects = () => {
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
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
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 border-0 shadow-md dark:bg-gray-800">
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl dark:text-white">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

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

                <div className="flex gap-3">
                  {/** Botão DEMO */}
                  <Button
                    variant="outline"
                    size="sm"
                    disabled={!project.available || !project.demoLink}
                    className={`
                        flex-1 
                        ${project.available && project.demoLink
                        ? "dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
                        : "bg-red-500 cursor-not-allowed opacity-60 dark:border-gray-600"}
                              `}
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
                        : "bg-red-500 cursor-not-allowed opacity-60 dark:border-gray-600"}
                              `}
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
    </section>
  );
};
