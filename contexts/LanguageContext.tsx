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
    'about.subtitle': 'Desenvolvedor apaixonado por tecnologia e inovação',
    'about.p1': "No passado, tive a oportunidade de trabalhar como Web Designer na Potiguar Digital, onde desenvolvi projetos criativos para diferentes nichos de mercado. Também realizei freelas com Next.js e React.js, entregando soluções sob medida para diversos clientes. Essas experiências me ajudaram a consolidar minhas habilidades técnicas e minha capacidade de resolver problemas com eficiência.",
    'about.p2': "Ao longo da minha jornada, me qualifiquei por meio de cursos importantes, como o curso superior em Análise e Desenvolvimento de Sistemas (ADS), além de Desenvolvedor Fullstack Júnior pela MaisPraTi, Programador Web no Senai e Backend em Java pela DIO",
    'about.p3': "Essas formações foram fundamentais para construir minha base sólida em desenvolvimento web e aprofundar meus conhecimentos em tecnologias atuais. Estou sempre em busca de novos desafios e oportunidades para aplicar minhas habilidades e crescer ainda mais como profissional, criando soluções que realmente façam a diferença.",
    'about.p4': 'Especializo-me em criar aplicações web robustas e escaláveis, sempre focando na experiência do usuário e nas melhores práticas de desenvolvimento. Acredito que a tecnologia deve ser uma ferramenta para resolver problemas reais e simplificar processos.',
    'about.p5': 'Estou sempre em busca de novos desafios que me permitam crescer profissionalmente e contribuir para projetos inovadores.',
    'about.fullstack': 'Full Stack',
    'about.fullstack.desc': 'Domínio completo do desenvolvimento web, do front-end ao back-end',
    'about.innovation': 'Inovação',
    'about.innovation.desc': 'Sempre em busca das tecnologias mais modernas e eficientes',
    'about.collaboration': 'Colaboração',
    'about.collaboration.desc': 'Experiência em trabalho em equipe e metodologias ágeis',
    'about.dedication': 'Dedicação',
    'about.dedication.desc': 'Comprometido em entregar soluções de alta qualidade',

    // Skills
    'skills.title': 'Minhas Habilidades',
    'skills.subtitle': 'Tecnologias e ferramentas que domino para criar soluções completas',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.tools': 'Ferramentas & Outros',
    'skills.learning': 'Sempre aprendendo e me atualizando com as últimas tendências do mercado',
    'skills.evolution': 'Em constante evolução 🚀',

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
    'about.subtitle': 'Developer passionate about technology and innovation',
    "about.p1": "In the past, I had the opportunity to work as a Web Designer at Potiguar Digital, where I developed creative projects for various market niches. I also worked on freelance projects using Next.js and React.js, delivering tailored solutions for a wide range of clients. These experiences helped me strengthen my technical skills and my ability to solve problems efficiently.",
    "about.p2": "Throughout my journey, I gained qualifications through important courses, such as a degree in Systems Analysis and Development (ADS), Junior Fullstack Developer at MaisPraTi, Web Programmer at Senai, and Java Backend Developer at DIO.",
    "about.p3": "These programs were fundamental in building a solid foundation in web development and deepening my knowledge of current technologies. I’m constantly seeking new challenges and opportunities to apply my skills and grow professionally, creating solutions that truly make a difference.",
    "about.p4": "I specialize in building robust and scalable web applications, always focusing on user experience and best development practices. I believe technology should be a tool to solve real problems and simplify processes.",
    "about.p5": "I'm always looking for new challenges that allow me to grow professionally and contribute to innovative projects.",
    'about.fullstack': 'Full Stack',
    'about.fullstack.desc': 'Complete web development expertise, from front-end to back-end',
    'about.innovation': 'Innovation',
    'about.innovation.desc': 'Always seeking the most modern and efficient technologies',
    'about.collaboration': 'Collaboration',
    'about.collaboration.desc': 'Experience in teamwork and agile methodologies',
    'about.dedication': 'Dedication',
    'about.dedication.desc': 'Committed to delivering high-quality solutions',

    // Skills
    'skills.title': 'My Skills',
    'skills.subtitle': 'Technologies and tools I master to create complete solutions',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.tools': 'Tools & Others',
    'skills.learning': 'Always learning and staying updated with the latest market trends',
    'skills.evolution': 'Constantly evolving',

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
