'use client'
import { Moon, Sun, Globe } from "lucide-react";
import { useTheme } from "next-themes";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

export const ThemeLanguageSwitches = () => {
  const { theme, setTheme } = useTheme();
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-4">
      {/* Language Switch */}
      <div className="flex items-center gap-2">
        <Globe className="h-4 w-4 text-gray-600 dark:text-gray-300" />
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setLanguage(language === 'pt' ? 'en' : 'pt')}
          className="text-sm font-medium"
        >
          {language === 'pt' ? 'EN' : 'PT'}
        </Button>
      </div>

      {/* Theme Switch */}
      {/* <div className="flex items-center gap-2">
        <Sun className="h-4 w-4 text-gray-600 dark:text-gray-300" />
        <Switch
          checked={theme === 'dark'}
          onCheckedChange={(checked) => setTheme(checked ? 'dark' : 'light')}
        />
        <Moon className="h-4 w-4 text-gray-600 dark:text-gray-300" />
      </div> */}
    </div>
  );
};
