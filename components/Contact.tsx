'use client'
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, Github, Linkedin, ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const Contact = () => {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: Mail,
      title: t('contact.email'),
      value: "devisrael560@gmail.com",
      action: () => window.open("mailto:devisrael560@gmail.com?subject=[EMAIL ISRAEL.DEV]")
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      title: t('contact.github'),
      url: "https://github.com/IsraelDev560"
    },
    {
      icon: Linkedin,
      title: t('contact.linkedin'),
      url: "https://www.linkedin.com/in/israelsantoss"
    },
    {
      icon: ExternalLink,
      title: t('contact.portfolio'),
      url: "https://iscode.vercel.app"
    }
  ];

  return (
    <section id="contact" className="py-10 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">
              {t('contact.info')}
            </h3>
            
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                        <item.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">{item.title}</h4>
                        <p className="text-gray-600 dark:text-gray-300">{item.value}</p>
                      </div>
                      {item.action && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={item.action}
                          className="ml-auto"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">
              {t('contact.social')}
            </h3>
            
            <div className="space-y-4 mb-8">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="lg"
                  onClick={() => window.open(social.url, "_blank")}
                  className="w-full justify-start gap-3 p-6 h-auto border-2 hover:border-blue-600 hover:text-blue-600 dark:border-gray-600 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-all duration-300"
                >
                  <social.icon className="h-5 w-5" />
                  <span className="text-lg">{social.title}</span>
                  <ExternalLink className="h-4 w-4 ml-auto" />
                </Button>
              ))}
            </div>

            <Card className="bg-gradient-to-r from-blue-600 to-purple-600 border-0 text-white">
              <CardContent className="p-6 text-center">
                <h4 className="text-xl font-semibold mb-3">
                  {t('contact.cta.title')}
                </h4>
                <p className="mb-4 opacity-90">
                  {t('contact.cta.desc')}
                </p>
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={() => window.open("mailto:developeriscode@gmail.com")}
                  className="bg-white text-gray-900 hover:bg-gray-100"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  {t('contact.cta.button')}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            &copy; {new Date().getFullYear()}{t('contact.footer')}
          </p>
        </div>
      </div>
    </section>
  );
};
