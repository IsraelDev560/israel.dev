'use client'
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'pt' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  pt: {
    // Navbar
    'nav.home': 'Início',
    'nav.about': 'Sobre',
    'nav.skills': 'Habilidades',
    'nav.projects': 'Projetos',
    'nav.contact': 'Contato',

    // Hero
    'hero.greeting': 'Olá, eu sou',
    'hero.title': 'Desenvolvedor Web Full Stack',
    'hero.description': 'Apaixonado por criar experiências digitais incríveis e soluções inovadoras que fazem a diferença na vida das pessoas.',
    'hero.cta': 'Sobre mim',
    'hero.more': 'Conheça a iSCode',

    // About
    'about.title': 'Sobre Mim',
    'about.subtitle': 'Desenvolvedor Full Stack apaixonado por tecnologia e inovação',
    "about.p1": "Minha trajetória profissional começou na Potiguar Digital como Web Designer, criando conteúdos digitais e páginas de conversão para diferentes segmentos de mercado. Logo em seguida, tive minha primeira experiência profissional como desenvolvedor no projeto Vanilla App, atuando com React Native e TypeScript em um aplicativo de mensagens em tempo real.",
    "about.p2": "Atualmente, atuo como Desenvolvedor e Líder Técnico no ClosedFun, uma plataforma de entretenimento digital, onde sou responsável pelo front-end e pela liderança de uma equipe de back-end. Paralelamente, fundei a iSCode, minha empresa de tecnologia, focada em soluções web sob medida e automações inteligentes (n8n, bots e integrações).",
    "about.p3": "Ao longo da minha jornada, me qualifiquei por meio de formações sólidas, como o curso superior em Análise e Desenvolvimento de Sistemas (ADS), além de certificações como Desenvolvedor Fullstack Júnior pela MaisPraTi, Programador Web pelo Senai e Backend em Java pela DIO.",
    "about.p4": "Hoje, especializo-me em construir aplicações robustas, escaláveis e orientadas à performance, sempre priorizando experiência do usuário, boas práticas e inovação. Acredito que a tecnologia deve ser usada para simplificar processos, gerar impacto positivo e transformar negócios.",
    'about.fullstack': 'Full Stack',
    'about.fullstack.desc': 'Domínio completo do desenvolvimento web, do front-end ao back-end',
    'about.innovation': 'Inovação',
    'about.innovation.desc': 'Sempre em busca das tecnologias mais modernas e eficientes',
    'about.collaboration': 'Colaboração',
    'about.collaboration.desc': 'Experiência em trabalho em equipe, liderança técnica e metodologias ágeis',
    'about.dedication': 'Dedicação',
    'about.dedication.desc': 'Comprometido em entregar soluções de alta qualidade',

    // Skills
    'skills.title': 'Minhas Habilidades',
    'skills.subtitle': 'Tecnologias e ferramentas que domino para criar soluções completas',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.tools': 'Ferramentas & Outros',
    'skills.evolution': 'Em constante evolução 🚀',
    'skills.automation': 'Automação',
    'skills.testing': 'Testes',
    'skills.devops': 'DevOps',

    // Projects
    'projects.title': 'Meus Projetos',
    'projects.subtitle': 'Alguns dos projetos que desenvolvi aplicando as melhores práticas e tecnologias modernas',
    'projects.ecommerce': 'E-commerce Moderno',
    'projects.ecommerce.desc': 'Plataforma completa de e-commerce com painel administrativo, carrinho de compras, sistema de pagamento e gestão de produtos.',
    'projects.dashboard': 'Dashboard Analytics',
    'projects.dashboard.desc': 'Dashboard responsivo para análise de dados com gráficos interativos, relatórios em tempo real e sistema de notificações.',
    'projects.taskapp': 'App de Gestão de Tarefas',
    'projects.taskapp.desc': 'Aplicação para gerenciamento de projetos e tarefas com recursos de colaboração em equipe e acompanhamento de progresso.',
    'projects.demo': 'Demo',
    'projects.code': 'Código',
    'projects.more': 'Ver mais projetos',

    // Contact
    'contact.title': 'Vamos Conversar?',
    'contact.subtitle': 'Estou sempre aberto a novas oportunidades e projetos interessantes. Entre em contato comigo!',
    'contact.info': 'Informações de Contato',
    'contact.social': 'Redes Sociais',
    'contact.email': 'Email',
    'contact.phone': 'Telefone',
    'contact.location': 'Localização',
    'contact.github': 'GitHub',
    'contact.linkedin': 'LinkedIn',
    'contact.portfolio': 'Crie seu projeto com a iSCode',
    'contact.cta.title': 'Pronto para um novo projeto?',
    'contact.cta.desc': 'Vamos criar algo incrível juntos!',
    'contact.cta.button': 'Envie um Email',
    'contact.footer': ' Israel. Desenvolvido com ❤️ e muito ☕'
  },
  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',

    // Hero
    'hero.greeting': 'Hello, I am',
    'hero.title': 'Full Stack Web Developer',
    'hero.description': 'Passionate about creating incredible digital experiences and innovative solutions that make a difference in people\'s lives.',
    'hero.cta': 'About me',
    'hero.more': 'Get to Know iSCode',

    // About
    'about.title': 'About Me',
    'about.subtitle': 'Full Stack Developer passionate about technology and innovation',
    "about.p1": "My professional journey started at Potiguar Digital as a Web Designer, creating digital content and high-conversion landing pages for different market segments. Shortly after, I gained my first development experience with the Vanilla App project, working with React Native and TypeScript to build a real-time messaging application.",
    "about.p2": "Currently, I work as a Developer and Tech Lead at ClosedFun, a digital entertainment platform, where I am responsible for the front-end and lead a back-end development team. In parallel, I founded iSCode, my own tech company, focused on custom web solutions and intelligent automations (n8n, bots, and integrations).",
    "about.p3": "Throughout my journey, I earned solid qualifications, including a degree in Systems Analysis and Development (ADS), along with certifications as a Junior Fullstack Developer from MaisPraTi, Web Programmer from Senai, and Java Backend Developer from DIO.",
    "about.p4": "Today, I specialize in building robust, scalable, and performance-oriented applications, always prioritizing user experience, best practices, and innovation. I believe technology should simplify processes, generate positive impact, and transform businesses.",
    'about.fullstack': 'Full Stack',
    'about.fullstack.desc': 'Complete web development expertise, from front-end to back-end',
    'about.innovation': 'Innovation',
    'about.innovation.desc': 'Always seeking the most modern and efficient technologies',
    'about.collaboration': 'Collaboration',
    'about.collaboration.desc': 'Experience in teamwork, technical leadership, and agile methodologies',
    'about.dedication': 'Dedication',
    'about.dedication.desc': 'Committed to delivering high-quality solutions',

    // Skills
    'skills.title': 'My Skills',
    'skills.subtitle': 'Technologies and tools I master to create complete solutions',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.tools': 'Tools & Others',
    'skills.evolution': 'Constantly evolving',
    'skills.automation': 'Automation',
    'skills.testing': 'Testing',
    'skills.devops': 'DevOps',

    // Projects
    'projects.title': 'My Projects',
    'projects.subtitle': 'Some of the projects I developed applying best practices and modern technologies',
    'projects.ecommerce': 'Modern E-commerce',
    'projects.ecommerce.desc': 'Complete e-commerce platform with admin panel, shopping cart, payment system and product management.',
    'projects.dashboard': 'Analytics Dashboard',
    'projects.dashboard.desc': 'Responsive dashboard for data analysis with interactive charts, real-time reports and notification system.',
    'projects.taskapp': 'Task Management App',
    'projects.taskapp.desc': 'Application for project and task management with team collaboration features and progress tracking.',
    'projects.demo': 'Demo',
    'projects.code': 'Code',
    'projects.more': 'See more projects',

    // Contact
    'contact.title': 'Let\'s Talk?',
    'contact.subtitle': 'I am always open to new opportunities and interesting projects. Get in touch with me!',
    'contact.info': 'Contact Information',
    'contact.social': 'Social Media',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.location': 'Location',
    'contact.github': 'GitHub',
    'contact.linkedin': 'LinkedIn',
    'contact.portfolio': 'Build your project with iSCode',
    'contact.cta.title': 'Ready for a new project?',
    'contact.cta.desc': 'Let\'s create something amazing together!',
    'contact.cta.button': 'Send an Email',
    'contact.footer': ' Israel. Made with ❤️ and lots of ☕'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('pt');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['pt']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
