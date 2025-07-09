'use client'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";

export const Skills = () => {
  const { t } = useLanguage();

  const skillCategories = [
    {
      title: t('skills.frontend'),
      skills: ["React", "Next.js", "TypeScript", "JavaScript", "PHP", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
      color: "bg-blue-500"
    },
    {
      title: t('skills.backend'),
      skills: ["Java", "SpringBoot", "Node.js", "Express", "Python", "MySQL", "PostgreSQL", "MongoDB", "REST APIs", "Docker"],
      color: "bg-red-500"
    },
    {
      title: t('skills.tools'),
      skills: ["Git", "GitHub", "VS Code", "Figma", "Vercel", "AWS", "Linux", "Agile/Scrum"],
      color: "bg-purple-500"
    }
  ];

  return (
    <section id="skills" className="py-10 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('skills.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('skills.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md dark:bg-gray-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 dark:text-white">
                  <div className={`w-4 h-4 rounded-full ${category.color}`}></div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="text-sm py-1 px-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full">
            <span className="text-sm font-medium">{t('skills.evolution')}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
