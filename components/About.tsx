'use client'
import { Card, CardContent } from "@/components/ui/card";
import { Code2, Rocket, Users, Coffee } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const About = () => {
  const { t } = useLanguage();

  const highlights = [
    {
      icon: Code2,
      title: t('about.fullstack'),
      description: t('about.fullstack.desc')
    },
    {
      icon: Rocket,
      title: t('about.innovation'),
      description: t('about.innovation.desc')
    },
    {
      icon: Users,
      title: t('about.collaboration'),
      description: t('about.collaboration.desc')
    },
    {
      icon: Coffee,
      title: t('about.dedication'),
      description: t('about.dedication.desc')
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('about.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('about.subtitle')}
          </p>
        </div>

        <div className="grid overflow-auto scrollbar-hide lg:grid-cols-2 gap-12 items-center">
          <div className="lg:max-h-[50vh] space-y-6">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {t('about.p1')}
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {t('about.p2')}
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {t('about.p3')}
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {t('about.p4')}
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {t('about.p5')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300 border-0 shadow-md dark:bg-gray-800">
                <CardContent className="p-0 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
