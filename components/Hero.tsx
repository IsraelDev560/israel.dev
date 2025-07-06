'use client'
import { ArrowDown, Github, Linkedin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export const Hero = () => {
  const { t } = useLanguage();

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-blue-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-24 lg:mt-0 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            {t('hero.greeting')}{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              Israel
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8 font-light">
            {t('hero.title')}
          </p>
          
          <p className="text-lg sm:text-xl text-gray-500 dark:text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            {t('hero.description')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              onClick={scrollToAbout}
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {t('hero.cta')}
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => window.open("https://iscode.vercel.app", "_blank")}
              className="px-8 py-3 text-lg font-medium border-2 border-gray-300 dark:border-gray-600 hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-all duration-300"
            >
              {t('hero.more')}
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div className="flex justify-center space-x-6 mb-16">
            <Button
              variant="ghost"
              size="lg"
              onClick={() => window.open("https://github.com/IsraelDev560", "_blank")}
              className="p-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
            >
              <Github className="h-6 w-6 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white" />
            </Button>
            <Button
              variant="ghost"
              size="lg"
              onClick={() => window.open("https://www.linkedin.com/in/israelsantoss", "_blank")}
              className="p-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
            >
              <Linkedin className="h-6 w-6 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white" />
            </Button>
          </div>

          <div className="animate-bounce">
            <button
              onClick={scrollToAbout}
              className="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-300"
            >
              <ArrowDown className="h-8 w-8 mx-auto" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
