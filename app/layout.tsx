import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://israel-dev.vercel.app/"), // substitua com seu domínio real
  title: {
    default: "Israel - Desenvolvedor Full Stack",
    template: "%s | Israel Dev",
  },
  description:
    "Sou Israel, desenvolvedor web full stack especializado em aplicações modernas com React, Next.js, Node.js e AWS. Entrego soluções escaláveis e bem arquitetadas.",
  keywords: [
    "Israel",
    "Desenvolvedor Full Stack",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Java",
    "AWS",
    "Desenvolvedor Web",
    "Frontend",
    "Backend",
  ],
  authors: [{ name: "Israel", url: "https://israel-dev.vercel.app/" }],
  creator: "Israel",
  publisher: "iSCode",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
  openGraph: {
    title: "Israel - Desenvolvedor Full Stack",
    description: "Portfólio de Israel, desenvolvedor full stack. Veja meus projetos com React, Next.js, Java, TypeScript e AWS.",
    url: "https://israel-dev.vercel.app/",
    siteName: "Israel Dev",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "https://israel-dev.vercel.app/israel-devCodeIcon.png",
        width: 1200,
        height: 630,
        alt: "Israel - Desenvolvedor Full Stack",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Israel - Desenvolvedor Full Stack",
    description: "Portfólio de Israel, especialista em React, Next.js, Node.js, TypeScript e AWS.",
    images: ["https://israel-dev.vercel.app/israel-devCodeIcon.png"],
  },
  icons: {
    icon: "/favicon.png", 
    shortcut: "/israel-devCodeIcon.png", 
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <TooltipProvider>
              <Toaster />
              <Sonner />
              {children}
            </TooltipProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html >
  );
}
